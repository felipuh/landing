import 'dotenv/config';
import { createServer } from 'http';
import { createReadStream, existsSync, statSync } from 'fs';
import { extname, join, normalize } from 'path';
import { cwd, env } from 'process';

const PORT = Number(env.PORT || 4173);
const ROOT = cwd();
const ANALYTICS_PROXY_URL = env.ADMINAPPS_ANALYTICS_ENDPOINT || 'http://127.0.0.1:8000/api/integration/landing-analytics/events/';
const ANALYTICS_PROXY_KEY = env.LANDING_ANALYTICS_API_KEY || '';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function withSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
  );
}

function resolvePath(urlPath) {
  const safePath = normalize(decodeURIComponent(urlPath)).replace(/^\.+/, '');
  const target = join(ROOT, safePath);
  if (!target.startsWith(ROOT)) {
    return null;
  }
  return target;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error('payload_too_large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error('invalid_json'));
      }
    });
    req.on('error', reject);
  });
}

createServer(async (req, res) => {
  withSecurityHeaders(res);

  if (req.method === 'POST' && req.url === '/api/landing-analytics/events/') {
    try {
      const payload = await readJsonBody(req);
      if (!ANALYTICS_PROXY_KEY) {
        res.statusCode = 503;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ ok: false, error: 'analytics_proxy_not_configured' }));
        return;
      }

      const upstream = await fetch(ANALYTICS_PROXY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': ANALYTICS_PROXY_KEY,
        },
        body: JSON.stringify(payload),
      });

      const text = await upstream.text();
      res.statusCode = upstream.status;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(text || JSON.stringify({ ok: upstream.ok }));
      return;
    } catch (error) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ ok: false, error: error.message || 'proxy_failed' }));
      return;
    }
  }

  const rawPath = req.url.split('?')[0];
  const requestPath = rawPath === '/' ? '/index.html' : rawPath;
  const filePath = resolvePath(requestPath);

  if (!filePath || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Not Found');
    return;
  }

  const extension = extname(filePath).toLowerCase();
  res.statusCode = 200;
  res.setHeader('Content-Type', MIME_TYPES[extension] || 'application/octet-stream');
  if (extension === '.html' || extension === '.css' || extension === '.js') {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  } else {
    res.setHeader('Cache-Control', 'public, max-age=3600');
  }
  createReadStream(filePath).pipe(res);
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Landing running on http://0.0.0.0:${PORT}`);
});
