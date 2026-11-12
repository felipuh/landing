# Landing — recepción real de solicitudes de demo (laboratorio)

Fecha: 2026-11-12, America/Costa_Rica. Entorno: WSL2 local, datos sintéticos, PostgreSQL 18.6 de `smart3ai-dev`. `PRODUCTION_READY=FALSE`.

## Contrato y evidencia

- Fuente: `docs/internal/FRONTEND_LINEA_BASE_Y_PROMPT.md` (CTA, formulario y feedback), `src/components/ContactCta.tsx`, `server.mjs`, AdminApps `apps/integration/views.py:create_demo_request`.
- `npm run build`: PASS (TypeScript y Vite).
- Chromium/Playwright contra `node server.mjs` y AdminApps HTTP real, sin interceptar peticiones:
  - Sin credencial configurada: ISO `/` y MedSupplier `/medsupplier` devolvieron HTTP 503; ambos formularios mostraron el error y enlace de correo. 2/2 casos negativos PASS.
  - Con credencial de laboratorio `landing_demo` creada mediante `create_integration_api_key` por operador staff: ISO y MedSupplier devolvieron HTTP 201 y mostraron confirmación. 2/2 casos positivos PASS.
- PostgreSQL AdminApps contiene exactamente los registros de esta ejecución:
  - ISO_SMART, `1dc040eb-1aba-494d-a853-b4cf80a70156`, `qa-iso-20261112@example.invalid`, estado `new`, servicio `landing_demo`, consentimiento `true`.
  - MEDSUPPLIER, `768c4c6d-67c4-4687-8615-f1b701b33da3`, `qa-med-20261112@example.invalid`, estado `new`, servicio `landing_demo`, consentimiento `true`.
- La credencial se almacena solo en el directorio local protegido `~/.local/share/smart3ai-dev/secrets/` (modo 0600). Este informe no contiene el secreto.
- Para Chromium se extrajeron bibliotecas `.deb` en `/home/felipe/proyectos/acceptance-2026-11-12/chromium-libs`; no se instalaron paquetes del sistema.
- Auditoría de navegación en Chromium para `/` y `/medsupplier`, a 390 y 1440 px: 4/4 variantes mostraron título de producto correcto, un `main`, cero anclas internas rotas y cero desbordamiento horizontal. Esto comprueba las rutas y anclas principales, no todos los destinos externos.

## Alcance pendiente

La prueba confirma navegador → proxy → AdminApps → PostgreSQL, el error visible del proxy y las rutas/anclas principales. No verifica asignación a un responsable, contacto comercial, entrega por correo, accesibilidad completa, ni aceptación manual. Esos pasos son necesarios antes de declarar la Landing lista para aceptación integral.
