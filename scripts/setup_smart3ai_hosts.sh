#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NGINX_SOURCE_CONF="$SCRIPT_DIR/../nginx_smart3ai_portfolio.conf"
NGINX_TARGET_CONF="/etc/nginx/conf.d/smart3ai_portfolio.conf"

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

if [[ ! -f "$NGINX_SOURCE_CONF" ]]; then
  echo "[ERROR] No existe archivo de config Nginx: $NGINX_SOURCE_CONF"
  exit 1
fi

if [[ -f /etc/nginx/conf.d/isosmart-all.conf ]]; then
  sudo mv /etc/nginx/conf.d/isosmart-all.conf /etc/nginx/conf.d/isosmart-all.conf.disabled-smart3ai
  echo "[OK] Desactivado conflicto: /etc/nginx/conf.d/isosmart-all.conf"
fi

sudo install -m 0644 "$NGINX_SOURCE_CONF" "$NGINX_TARGET_CONF"
echo "[OK] Config Smart3AI instalada en $NGINX_TARGET_CONF"

sudo nginx -t
sudo systemctl reload nginx
echo "[OK] Nginx validado y recargado"
