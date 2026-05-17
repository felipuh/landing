#!/usr/bin/env bash
set -euo pipefail

REQUIRED_HOSTS=(
  smart3ai.local
  landing.smart3ai.local
  sso.smart3ai.local
  adminapps.smart3ai.local
  isosmart.smart3ai.local
  vulnguard.smart3ai.local
  horas.smart3ai.local
  condominios.smart3ai.local
  cryptp.smart3ai.local
  bot.smart3ai.local
)

MISSING_HOSTS=()
for host in "${REQUIRED_HOSTS[@]}"; do
  if ! grep -Eq "(^|[[:space:]])${host}($|[[:space:]])" /etc/hosts; then
    MISSING_HOSTS+=("$host")
  fi
done

if [[ ${#MISSING_HOSTS[@]} -gt 0 ]]; then
  echo "127.0.0.1 ${MISSING_HOSTS[*]}" | sudo tee -a /etc/hosts >/dev/null
  echo "[OK] Hosts Smart3AI agregados a /etc/hosts"
else
  echo "[INFO] Entradas Smart3AI ya existen en /etc/hosts"
fi

echo "[NEXT] Copia landing/nginx_smart3ai_portfolio.conf a /etc/nginx/conf.d/smart3ai_portfolio.conf"
echo "[NEXT] Ejecuta: sudo nginx -t && sudo systemctl reload nginx"
