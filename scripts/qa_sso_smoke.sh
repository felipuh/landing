#!/usr/bin/env bash
set -euo pipefail

SSO_URL="${SSO_URL:-http://sso.smart3ai.local/api/integration/sso/login/}"
EMAIL="${SMART3AI_SSO_EMAIL:-felipe@smart3ai.com}"
PASSWORD="${SMART3AI_SSO_PASSWORD:-}"

if [[ -z "$PASSWORD" ]]; then
  echo "[ERROR] Debes exportar SMART3AI_SSO_PASSWORD"
  exit 1
fi

PAYLOAD=$(cat <<JSON
{"email":"$EMAIL","password":"$PASSWORD","client_id":"qa-smoke","audience":["smart3ai-portfolio"]}
JSON
)

echo "[INFO] Probando SSO login en $SSO_URL"
RESPONSE=$(curl -sS -X POST "$SSO_URL" -H "Content-Type: application/json" -d "$PAYLOAD")
echo "$RESPONSE"

if echo "$RESPONSE" | grep -q '"requires_2fa":true'; then
  echo "[OK] SSO responde reto 2FA (flujo esperado con 2FA activa)"
  exit 0
fi

if echo "$RESPONSE" | grep -q '"access_token"'; then
  echo "[OK] SSO retornó access token"
  exit 0
fi

echo "[ERROR] Respuesta SSO inesperada"
exit 1
