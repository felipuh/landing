# Smart3AI SSO + Multitenant Portfolio Deployment

## 1) Objetivo

Esta guia deja el ecosistema Smart3AI con:
- Login centralizado (SSO) en AdminApps
- Soporte 2FA y JWT compartido
- Contexto tenant (organization_id) propagado a servicios
- Acceso local por subdominios en Nginx

Productos:
- adminapps
- isosmart
- VulnGuard_IA
- Control_Horas_Desarrollo
- Sistema_Control_Condominios
- BOT_Cryptp

## 2) Variables compartidas de seguridad

Definir el mismo secreto en todos los backends:

- SMART3AI_SSO_JWT_SECRET
- SMART3AI_SSO_ISSUER=https://sso.smart3ai.local
- SMART3AI_SSO_AUDIENCE=smart3ai-portfolio

Usuario central esperado:
- felipe@smart3ai.com
- contrasena + 2FA (si esta habilitado en AdminApps)

## 3) Endpoints SSO centrales

AdminApps expone:
- POST /api/integration/sso/login/
- POST /api/integration/sso/login/verify-2fa/
- POST /api/integration/sso/introspect/ (requiere X-API-Key)

Flujo:
1. Login con email/password
2. Si requires_2fa=true, usar challenge_token + otp_code en verify-2fa
3. Recibir access_token con claims tenant/rol

Claims principales:
- sub
- email
- organization_id
- organization_name
- organization_code
- role
- memberships
- aud
- iss

## 4) Integracion por servicio

### adminapps
- SSO central implementado en apps/integration/sso_views.py
- JWT firmado con SMART3AI_SSO_JWT_SECRET

### isosmart
- Autenticador Smart3AISSOAuthentication
- Sincroniza user/profile/organization desde claims

### VulnGuard_IA
- decode_token valida issuer/audience compartidos
- dependencia auth sincroniza Organization/User local desde claims

### Control_Horas_Desarrollo
- endpoints nuevos:
  - POST /api/auth/sso/login
  - POST /api/auth/sso/verify-2fa
- middleware auth acepta JWT SSO y extrae tenant

### Sistema_Control_Condominios
- endpoints nuevos:
  - POST /api/auth/sso/login
  - POST /api/auth/sso/verify-2fa
- middleware auth acepta JWT SSO y extrae tenant

### BOT_Cryptp
- middleware HTTP protege /api/* (excepto /api/health)
- valida JWT SSO y agrega tenant/user/role a request.state

## 5) Nginx local

Usar archivo:
- landing/nginx_smart3ai_portfolio.conf

Hosts locales:
- smart3ai.local
- landing.smart3ai.local
- sso.smart3ai.local
- adminapps.smart3ai.local
- isosmart.smart3ai.local
- vulnguard.smart3ai.local
- horas.smart3ai.local
- condominios.smart3ai.local
- cryptp.smart3ai.local

Script de apoyo:
- landing/scripts/setup_smart3ai_hosts.sh

## 6) QA rapido

Script:
- landing/scripts/qa_sso_smoke.sh

Valida:
- Respuesta de SSO con requires_2fa=true o access_token

## 7) Recomendaciones de hardening

- Rotar SMART3AI_SSO_JWT_SECRET por entorno
- Definir expiraciones de access/refresh en politica de seguridad
- Activar TLS para dominios locales en staging/prod
- Registrar auditoria de issuer/audience mismatch
- Completar tenant_id persistente en esquemas de Control_Horas y Condominios para aislamiento de datos a nivel DB
