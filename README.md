# Smart3AI Landing

Landing comercial de Smart3AI con una pagina principal y una pagina dedicada a ISO Smart.

## Linea Base UI/UX + Prompt

Documento de estandar visual/funcional y prompt maestro para nuevos proyectos:

- [docs/internal/FRONTEND_LINEA_BASE_Y_PROMPT.md](docs/internal/FRONTEND_LINEA_BASE_Y_PROMPT.md)

## Ejecutar local

```bash
npm run dev
```

La landing quedara disponible en:

- http://localhost:4173
- http://localhost:4173/isosmart.html

## Variables para analitica centralizada

Para enviar eventos al backend AdminApps sin exponer API keys en el navegador, configura estas variables al arrancar el servidor:

- `LANDING_ANALYTICS_API_KEY`: API key valida de integracion en AdminApps.
- `ADMINAPPS_ANALYTICS_ENDPOINT`: endpoint de ingesta (por defecto `http://127.0.0.1:8000/api/integration/landing-analytics/events/`).

Ejemplo:

```bash
LANDING_ANALYTICS_API_KEY="tu_clave_segura" ADMINAPPS_ANALYTICS_ENDPOINT="http://127.0.0.1:8000/api/integration/landing-analytics/events/" npm run dev
```

Tambien puedes dejarlas persistentes en `.env` para que se carguen automaticamente en cada inicio del servidor.

## Solicitudes de demo en AdminApps

El formulario publica en el proxy local `/api/demo-requests/`. El navegador nunca recibe la clave de integración.

- `LANDING_DEMO_API_KEY`: clave activa del servicio `landing_demo` en AdminApps.
- `ADMINAPPS_DEMO_REQUEST_ENDPOINT`: endpoint interno de recepción.

AdminApps conserva cada solicitud como un prospecto pre-tenant. La recepción no crea organizaciones ni usuarios automáticamente.
