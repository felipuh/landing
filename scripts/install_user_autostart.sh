#!/usr/bin/env bash
set -euo pipefail

SERVICE_NAME="smart3ai-portfolio.service"
SYSTEMD_USER_DIR="$HOME/.config/systemd/user"
SERVICE_FILE="$SYSTEMD_USER_DIR/$SERVICE_NAME"
START_SCRIPT="/home/aplicacion/projects/landing/scripts/start_portfolio_on_boot.sh"

if [[ ! -x "$START_SCRIPT" ]]; then
  echo "ERROR: No existe o no es ejecutable: $START_SCRIPT"
  exit 1
fi

mkdir -p "$SYSTEMD_USER_DIR"

cat > "$SERVICE_FILE" <<'EOF'
[Unit]
Description=Smart3AI Portfolio AutoStart
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
WorkingDirectory=/home/aplicacion/projects/landing
ExecStart=/home/aplicacion/projects/landing/scripts/start_portfolio_on_boot.sh
RemainAfterExit=yes

[Install]
WantedBy=default.target
EOF

echo "Servicio creado en: $SERVICE_FILE"

systemctl --user daemon-reload
systemctl --user enable "$SERVICE_NAME"
systemctl --user start "$SERVICE_NAME"

echo ""
echo "Estado servicio:"
systemctl --user --no-pager --full status "$SERVICE_NAME" || true

LINGER_STATE="$(loginctl show-user "$USER" -p Linger 2>/dev/null | awk -F= '{print $2}')"

echo ""
if [[ "$LINGER_STATE" == "yes" ]]; then
  echo "OK: Linger habilitado. El servicio arrancara incluso sin login interactivo."
else
  echo "ATENCION: Linger esta en 'no'."
  echo "Para arranque al boot sin sesion iniciada, ejecuta con sudo:"
  echo "  sudo loginctl enable-linger $USER"
fi

echo ""
echo "Comandos utiles:"
echo "  systemctl --user restart $SERVICE_NAME"
echo "  systemctl --user status $SERVICE_NAME"
echo "  journalctl --user -u $SERVICE_NAME -n 200 --no-pager"
