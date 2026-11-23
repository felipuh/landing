import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { symlinkSync, unlinkSync } from 'node:fs';
import { request } from 'node:http';
import net from 'node:net';
import { resolve } from 'node:path';
import { after, before, test } from 'node:test';

let child;
let port;
let stderr = '';

function availablePort() {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.once('error', reject);
    probe.listen(0, '127.0.0.1', () => {
      const address = probe.address();
      probe.close((error) => error ? reject(error) : resolve(address.port));
    });
  });
}

function get(path) {
  return new Promise((resolve, reject) => {
    const req = request({ host: '127.0.0.1', port, path, method: 'GET' }, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ body, headers: res.headers, status: res.statusCode }));
    });
    req.once('error', reject);
    req.end();
  });
}

async function waitUntilReady() {
  const deadline = Date.now() + 5000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`server exited during startup: ${stderr}`);
    try {
      const response = await get('/');
      if (response.status === 200) return;
    } catch {
      // The child may not have bound its socket yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 25));
  }
  throw new Error('server did not become ready');
}

async function assertStillHealthy() {
  assert.equal(child.exitCode, null);
  const valid = await get('/');
  assert.equal(valid.status, 200);
  assert.match(valid.body, /<!doctype html>/i);
}

before(async () => {
  port = await availablePort();
  child = spawn(process.execPath, ['server.mjs'], {
    cwd: new URL('..', import.meta.url),
    env: { ...process.env, HOST: '127.0.0.1', PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  child.stderr.on('data', (chunk) => { stderr += chunk; });
  await waitUntilReady();
});

after(() => {
  if (child?.exitCode === null) child.kill('SIGTERM');
});

test('malformed percent and UTF-8 encodings return 400 without terminating the process', async () => {
  for (const path of ['/%', '/%ZZ', '/%E0%A4%A', '/%C3%28', '/%F0%28%8C%28', '/%00']) {
    const invalid = await get(path);
    assert.equal(invalid.status, 400, path);
    assert.equal(invalid.body, 'Bad Request');
    assert.match(invalid.headers['content-security-policy'], /default-src 'self'/);
    await assertStillHealthy();
  }
});

test('encoded traversal and unexpected separators never expose files outside dist', async () => {
  for (const path of [
    '/%2e%2e/package.json',
    '/%2e%2e%2fpackage.json',
    '/assets/%2e%2e/%2e%2e/package.json',
    '/assets%2f..%2f..%2fpackage.json',
  ]) {
    const response = await get(path);
    assert.equal(response.status, 403, path);
    assert.equal(response.body, 'Forbidden');
    assert.doesNotMatch(response.body, /smart3ai-landing|private|dependencies/);
    await assertStillHealthy();
  }

  for (const path of ['/..%5cpackage.json', '/assets%5cindex.js']) {
    const response = await get(path);
    assert.equal(response.status, 400, path);
    assert.equal(response.body, 'Bad Request');
    await assertStillHealthy();
  }
});

test('a static-root symlink cannot expose an outside file', async () => {
  const linkName = `.security-test-outside-${process.pid}`;
  const linkPath = resolve('dist', linkName);
  symlinkSync(resolve('package.json'), linkPath);
  try {
    const response = await get(`/${linkName}`);
    assert.equal(response.status, 403);
    assert.equal(response.body, 'Forbidden');
    assert.doesNotMatch(response.body, /smart3ai-landing|private|dependencies/);
    await assertStillHealthy();
  } finally {
    unlinkSync(linkPath);
  }
});

test('concurrent malformed requests remain isolated and valid traffic continues', async () => {
  const requests = Array.from({ length: 60 }, (_, index) => get(index % 2 ? '/%' : '/%ZZ'));
  const responses = await Promise.all(requests);
  assert.ok(responses.every((response) => response.status === 400));
  assert.equal(child.exitCode, null);

  const validResponses = await Promise.all(Array.from({ length: 20 }, () => get('/medsupplier')));
  assert.ok(validResponses.every((response) => response.status === 200));
  assert.ok(validResponses.every((response) => /<!doctype html>/i.test(response.body)));
  assert.equal(stderr, '');
});
