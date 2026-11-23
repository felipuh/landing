# Sprint 10A — P0 Landing stabilization

Date: 2026-11-23  
Branch: `feature/productized-landing-architecture`

## Reproduction

Before the fix, a real `node server.mjs` process received `GET /%`. The request
returned an empty reply, `decodeURIComponent()` raised an uncaught `URIError`,
the process exited, and a subsequent valid request could not connect.

## Correction

- Malformed percent and UTF-8 encodings now receive a generic HTTP 400.
- Decoded traversal receives HTTP 403; NUL and backslash separators receive
  HTTP 400.
- Lexical and canonical path checks confine static files to `dist`, including
  protection against symlink escape.
- The server fails closed when `dist` is absent instead of exposing repository
  files as a fallback static root.
- A top-level asynchronous request boundary prevents uncaught handler errors,
  avoids a second response after headers are sent, and emits no stack trace to
  clients.
- Static streams use `pipeline()` so asynchronous read failures reach the same
  boundary.
- Existing security headers and valid SPA routes remain unchanged.

## Verification

- `npm run build` — PASS; TypeScript and Vite rebuilt current source.
- `npm run test:server` — PASS; real child process, malformed encodings,
  traversal, unexpected separators, symlink escape, concurrency, and valid
  requests after failures.
- `npm run qa:screenshots` — PASS; 5 Playwright functional/visual tests.
- `gitleaks detect --source . --no-banner --redact --exit-code 1` — PASS; no
  leaks detected.
- `git diff --check` — PASS.

This correction is a focused availability and path-isolation control. It does
not constitute certification against OWASP ASVS or NIST SSDF, and it does not
change the ecosystem readiness decisions:

```text
ISO_SMART_INTEGRAL_ACCEPTANCE_READY=FALSE
CONTROLLED_PILOT_READY=FALSE
PRODUCTION_READY=FALSE
```
