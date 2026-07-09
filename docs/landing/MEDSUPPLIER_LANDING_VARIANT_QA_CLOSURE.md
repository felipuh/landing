# ISO Smart MedSupplier Landing Variant - QA Closure

Fecha de cierre: 2026-07-08

Rama: `feature/productized-landing-architecture`

## Resumen ejecutivo

La variante ISO Smart MedSupplier quedó implementada sobre la arquitectura productizada existente del landing, reutilizando componentes compartidos y separando contenido, tema visual y mockup desde la data de producto. La landing base ISO Smart se mantiene operativa y sin rutas ni CTAs existentes modificados.

MedSupplier comunica una propuesta B2B SaaS especializada en cumplimiento documental, vencimientos, evidencias regulatorias, auditorías de proveedores, riesgo y trazabilidad para cadena de suministro médica. La dirección visual mantiene la familia premium enterprise de ISO Smart, diferenciada con acento teal médico, azul clínico secundario y estados de riesgo documental.

## Ruta usada

- Ruta MedSupplier: `/medsupplier`
- Ruta alternativa soportada por la configuración existente: `/medsupplier.html`
- No se crearon rutas nuevas.

## Alcance de implementación

- Se utilizó la configuración existente de producto para resolver la variante por pathname.
- Se ajustó la data productizada de MedSupplier con narrativa médica/regulatoria y supply chain.
- Se agregó theme por producto para aislar paleta visual sin duplicar componentes.
- Se reforzó el dashboard/mockup con estados semánticos: OK, pendiente, vencido y riesgo.
- Se mantuvo la landing ISO Smart como fallback por defecto.
- Se amplió QA visual Playwright para cubrir ISO Smart y MedSupplier en desktop y mobile.

## Archivos modificados esperados

- `src/App.tsx`
- `src/components/DashboardMockup.tsx`
- `src/data/products/isoSmart.ts`
- `src/data/products/medSupplier.ts`
- `src/data/products/types.ts`
- `src/styles.css`
- `tests/landing.visual.spec.ts`
- `dist/*`
- `qa-screenshots/*`
- `docs/landing/MEDSUPPLIER_LANDING_VARIANT_QA_CLOSURE.md`

## Resultado build

Comando ejecutado:

```bash
npm run build
```

Resultado: OK.

Build validado con TypeScript y Vite. Los assets `dist/assets` versionados fueron actualizados con hashes nuevos y los assets obsoletos fueron removidos por el build versionado.

## Resultado QA visual

Comando ejecutado:

```bash
npm run qa:screenshots
```

Resultado: OK, `4 passed`.

Cobertura:

- ISO SMART AI desktop 1440x1200.
- ISO SMART AI mobile 390x1200.
- ISO Smart MedSupplier desktop 1440x1200.
- ISO Smart MedSupplier mobile 390x1200.

La prueba valida textos críticos, CTAs visibles y ausencia de scroll horizontal.

## Screenshots generados

- `qa-screenshots/inicio-desktop-1440x1200.png`
- `qa-screenshots/inicio-mobile-390x1200.png`
- `qa-screenshots/medsupplier-desktop-1440x1200.png`
- `qa-screenshots/medsupplier-mobile-390x1200.png`

## Confirmación ISO Smart

ISO Smart sigue funcionando como landing por defecto. No se cambiaron sus rutas ni CTAs existentes. Sus valores visuales principales quedaron declarados como theme explícito para mantener compatibilidad con la nueva arquitectura multi-producto.

## Criterios cumplidos

- MedSupplier usa la ruta existente `/medsupplier`.
- No se duplicó innecesariamente la arquitectura de landing.
- MedSupplier mantiene familia visual enterprise premium sin ser clon literal.
- Primer viewport comunica producto, categoría y valor.
- Dashboard/mockup representa software real con estados OK, pendiente, vencido y riesgo.
- Mobile validado sin scroll horizontal por Playwright.
- CTAs visibles.
- Build OK.
- QA visual OK.
- Screenshots desktop/mobile generados para ISO Smart y MedSupplier.
- No se detectaron archivos sensibles, credenciales, `.env`, `node_modules` ni basura temporal para commit.

## Riesgos o pendientes

- No hay bloqueantes técnicos detectados.
- Pendiente recomendado: revisión visual humana final de los screenshots antes de publicación comercial o merge.

## Dictamen final

GO CONTROLADO, sujeto a revisión visual humana de screenshots.

## Recomendación de commit

Mensaje recomendado:

```text
feat: add ISO Smart MedSupplier landing variant
```
