# Linea Base Frontend + Prompt Maestro (Landing)

## Objetivo
Garantizar una landing comercial moderna, accesible y multilenguaje sin romper tracking, CTA ni estructura existente.

## Reglas de Multilenguaje (criticas)
1. No eliminar ni renombrar claves existentes en data-i18n o diccionario JS.
2. No hardcodear texto visible fuera del sistema i18n.
3. Si se agrega copy nuevo, agregar clave nueva en es/en/pt.

## Estandar Visual
1. Hero con jerarquia clara y CTA principal/secundario.
2. Secciones con contraste correcto y lectura escaneable.
3. Cards con profundidad sutil y consistencia de spacing.
4. Modo oscuro legible, sin perder contraste ni jerarquia.
5. Mobile sticky CTA usable y seguro (safe-area incluido).

## Accesibilidad
1. role="main" y landmarks correctos.
2. aria-live para resultados dinamicos (ROI, chat, bloques IA).
3. Focus visible en links, botones, inputs y controles.
4. reduced-motion para usuarios sensibles a animacion.

## Conversion y UX Comercial
1. CTA siempre visibles en primer scroll.
2. Mensajes alineados por perfil (gerencia, calidad, operaciones).
3. Feedback claro en acciones de sincronizacion/export.
4. Formularios cortos, con labels y feedback inline.

## Checklist de PR
- [ ] i18n intacto (sin hardcoded nuevo).
- [ ] CTA y tracking siguen operativos.
- [ ] Mobile y desktop validados.
- [ ] Contraste y foco accesible validados.
- [ ] Sintaxis JS/HTML/CSS OK.

## Prompt Maestro para Nuevos Proyectos (Landing SaaS)
"Actua como Senior Frontend + UX Lead especializado en landings B2B SaaS multilenguaje.

Contexto:
- Landing con i18n activo y CTA de conversion.
- No romper analytics, enlaces ni estructura de secciones.

Objetivos:
1) Mejorar visual premium y consistencia de marca.
2) Mantener multilenguaje estricto (sin hardcoded).
3) Mejorar accesibilidad AA y usabilidad mobile.
4) Optimizar conversion con CTA claros y flujo narrativo.

Entregables:
- Cambios por archivo con impacto visual y funcional.
- Checklist de validacion i18n + accesibilidad + conversion.
- Recomendaciones de experimentos A/B fase 2."