#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="/home/aplicacion/projects"
LOG_DIR="$BASE_DIR/landing/.runtime_logs/autostart"
mkdir -p "$LOG_DIR"

CONDOMINIOS_MODE="${CONDOMINIOS_MODE:-compat}"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"
}

start_process() {
  local name="$1"
  local cwd="$2"
  local pattern="$3"
  local command="$4"
  local logfile="$LOG_DIR/${name}.log"

  if pgrep -f "$pattern" >/dev/null 2>&1; then
    log "SKIP $name (ya en ejecucion)"
    return
  fi

  log "START $name"
  (
    cd "$cwd"
    nohup bash -lc "$command" >> "$logfile" 2>&1 &
  )
}

start_vulnguard() {
  local cwd="$BASE_DIR/VulnGuard_IA"
  local logfile="$LOG_DIR/vulnguard_compose.log"

  if ! command -v docker >/dev/null 2>&1; then
    log "WARN docker no disponible. Se omite VulnGuard_IA."
    return
  fi

  log "START VulnGuard_IA (docker compose up -d)"
  (
    cd "$cwd"
    docker compose up -d >> "$logfile" 2>&1 || true
  )
}

start_control_horas_db() {
  if ! command -v podman >/dev/null 2>&1; then
    log "WARN podman no disponible. Se omite DB local de Control_Horas_Desarrollo."
    return
  fi

  if podman ps --format '{{.Names}}' | grep -x devtech_postgres >/dev/null 2>&1; then
    log "SKIP control_horas_db (contenedor activo)"
    return
  fi

  if podman ps -a --format '{{.Names}}' | grep -x devtech_postgres >/dev/null 2>&1; then
    log "START control_horas_db (contenedor existente)"
    podman start devtech_postgres >/dev/null 2>&1 || true
    return
  fi

  log "START control_horas_db (crear contenedor)"
  podman run -d --name devtech_postgres \
    -e POSTGRES_DB=devtech_control_horas \
    -e POSTGRES_USER=devtech \
    -e POSTGRES_PASSWORD=devtech123 \
    -p 5432:5432 \
    postgres:15-alpine >/dev/null 2>&1 || true
}

install_info_banner() {
  log "Autostart Smart3AI Portfolio"
  log "Logs: $LOG_DIR"
  log "Modo Condominios: $CONDOMINIOS_MODE"
}

install_info_banner

# 1) AdminApps (8000 / 3000)
start_process \
  "adminapps_backend" \
  "$BASE_DIR/adminapps/backend" \
  "adminapps/backend/.*/python.*manage.py runserver 0.0.0.0:8000|adminapps/backend/venv_admin/bin/python manage.py runserver 0.0.0.0:8000" \
  "if [[ -x venv_admin/bin/python ]]; then venv_admin/bin/python manage.py runserver 0.0.0.0:8000; else python3 manage.py runserver 0.0.0.0:8000; fi"

start_process \
  "adminapps_frontend" \
  "$BASE_DIR/adminapps/frontend" \
  "adminapps/frontend/node_modules/.bin/vite.*--port 3000|vite --host 0.0.0.0 --port 3000" \
  "npm run dev -- --host 0.0.0.0 --port 3000"

# 2) IsoSmart (8001 / 3001)
start_process \
  "isosmart_backend" \
  "$BASE_DIR/isosmart/backend" \
  "isosmart/backend/.*/python.*manage.py runserver 0.0.0.0:8001|isosmart/backend/venv_ai/bin/python manage.py runserver 0.0.0.0:8001" \
  "if [[ -x venv_ai/bin/python ]]; then venv_ai/bin/python manage.py runserver 0.0.0.0:8001; else python3 manage.py runserver 0.0.0.0:8001; fi"

start_process \
  "isosmart_frontend" \
  "$BASE_DIR/isosmart/frontend" \
  "isosmart/frontend/node_modules/.bin/vite.*--port 3001|vite --host 0.0.0.0 --port 3001" \
  "npm run dev -- --host 0.0.0.0 --port 3001"

# 3) Control Horas (3002 / 5174)
start_control_horas_db

start_process \
  "control_horas_backend" \
  "$BASE_DIR/Control_Horas_Desarrollo/backend" \
  "Control_Horas_Desarrollo/backend/node_modules/.bin/nodemon.*server.js|node server.js" \
  "npm run dev"

start_process \
  "control_horas_frontend" \
  "$BASE_DIR/Control_Horas_Desarrollo/frontend" \
  "Control_Horas_Desarrollo/frontend/node_modules/.bin/vite.*--port 5174|vite --host 0.0.0.0 --port 5174" \
  "npm run dev -- --host 0.0.0.0 --port 5174"

# 4) Condominios (compat: 3003 / 5176, standard: 4000 / 5175)
if [[ "$CONDOMINIOS_MODE" == "standard" ]]; then
  CONDO_BACKEND_PORT="4000"
  CONDO_FRONTEND_PORT="5175"
else
  CONDO_BACKEND_PORT="3003"
  CONDO_FRONTEND_PORT="5176"
fi

start_process \
  "condominios_backend" \
  "$BASE_DIR/Sistema_Control_Condominios/backend" \
  "Sistema_Control_Condominios/backend/node_modules/.bin/nodemon.*src/server.js|PORT=$CONDO_BACKEND_PORT npm run dev" \
  "PORT=$CONDO_BACKEND_PORT npm run dev"

start_process \
  "condominios_frontend" \
  "$BASE_DIR/Sistema_Control_Condominios/frontend" \
  "Sistema_Control_Condominios/frontend/node_modules/.bin/vite.*--port $CONDO_FRONTEND_PORT|vite --host 0.0.0.0 --port $CONDO_FRONTEND_PORT" \
  "npm run dev -- --host 0.0.0.0 --port $CONDO_FRONTEND_PORT"

# 5) VulnGuard_IA (docker compose)
start_vulnguard

# 6) BOT_Cryptp (8100)
start_process \
  "bot_cryptp_api" \
  "$BASE_DIR/BOT_Cryptp" \
  "uvicorn app:app --host 0.0.0.0 --port 8100" \
  "if [[ -x /home/aplicacion/projects/.venv/bin/python ]]; then /home/aplicacion/projects/.venv/bin/python -m uvicorn app:app --host 0.0.0.0 --port 8100 --reload; else python3 -m uvicorn app:app --host 0.0.0.0 --port 8100 --reload; fi"

# 7) Landing (4173)
start_process \
  "landing" \
  "$BASE_DIR/landing" \
  "node server.mjs|PORT=4173 npm run dev" \
  "PORT=4173 npm run dev"

log "Autostart finalizado."
