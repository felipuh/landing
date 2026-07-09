# QA visual de aceptacion - ISO SMART AI /inicio

Fecha de revision: 2026-07-08  
Screenshots revisados:

- `qa-screenshots/inicio-desktop-1440x1200.png`
- `qa-screenshots/inicio-mobile-390x1200.png`

## Resultado

**PASS WITH OBSERVATIONS**

El landing cumple la base de aceptacion visual: no se observa overflow horizontal, no hay cortes bloqueantes, los CTAs principales existen, el dashboard se renderiza, el logo oficial aparece sin deformacion aparente y los tokens de marca estan definidos en CSS como `#1877F2` y `#111111`.

Antes de avanzar a MedSupplier conviene hacer una ronda corta de ajuste visual. El resultado ya es presentable, pero aun hay puntos de densidad, escala y jerarquia que lo alejan de una ejecucion SaaS B2B premium completamente madura.

## P0 bloqueante

No se detectan P0.

## P1 importante

1. **Hero desktop: el dashboard pierde peso frente al H1.**  
   En 1440, el H1 comunica fuerte, pero el mockup queda relativamente pequeno y con poca presencia de software ejecutivo. El primer viewport comunica categoria y valor, aunque podria sentirse mas producto y menos pieza editorial.
   - Archivos: `src/styles.css`, `src/components/Hero.tsx`
   - Recomendacion CSS: ajustar la proporcion de `.hero-grid` a algo como `minmax(0, 0.82fr) minmax(560px, 1.18fr)`, reducir `gap` a `44px` y dar a `.dashboard-hero` un `max-width`/escala controlada para que el dashboard gane protagonismo sin cortarse.

2. **Hero mobile: demasiados bloques dentro del primer tramo.**  
   En 390px el header no tapa contenido y no hay overflow, pero el hero se siente largo y fragmentado: H1, descripcion, dos CTAs, trust row y dashboard compiten en una columna estrecha. La lectura existe, pero no se siente tan limpia como la direccion premium esperada.
   - Archivos: `src/styles.css`, `src/components/Hero.tsx`
   - Recomendacion CSS: en `@media (max-width: 760px)`, bajar `.hero-copy h1` de `3.35rem` a `clamp(2.65rem, 12vw, 3.05rem)`, reducir `.hero-section` padding superior a `32px`, y considerar ocultar o compactar `.trust-row` en mobile.

3. **Dashboard mobile simplificado, pero aun muy denso.**  
   La sidebar se oculta correctamente y no hay desborde, pero KPIs, panel, lista y grafica se apilan con poco respiro. Como pieza de producto se entiende, aunque podria parecer mas real si prioriza KPIs + progreso + 2 acciones clave.
   - Archivos: `src/styles.css`, `src/components/DashboardMockup.tsx`
   - Recomendacion CSS: agregar variante mobile para `.dashboard-hero .mockup-chart` con menor altura, reducir `.mockup-content` padding a `12px`, y en `.mockup-list li` usar `grid-template-columns: 8px 1fr` ocultando status o moviendolo debajo con `display: block`.

4. **Titulares de secciones en mobile con saltos muy agresivos.**  
   Secciones como "La gestion ISO se vuelve fragil..." y "Un sistema ISO digital..." se leen completas, pero los cortes de linea hacen que la pagina parezca comprimida.
   - Archivos: `src/styles.css`
   - Recomendacion CSS: relajar `max-width` en `.problem-copy h2` y `.solution-copy h2` para mobile, subir `line-height` a `1.02-1.08` y usar `font-size: clamp(2.35rem, 10.5vw, 3rem)`.

## P2 mejora estetica

1. **Header desktop demasiado minimo para navegacion completa.**  
   El header flotante es compacto y legible, pero al no incluir CTA comercial visible en desktop pierde fuerza de conversion arriba.
   - Archivos: `src/components/Header.tsx`, `src/styles.css`
   - Recomendacion: reactivar/introducir `.nav-actions` con CTA compacto tipo "Solicitar demo" y mantener `white-space: nowrap`.

2. **La solucion: flujo correcto, pero visualmente pequeno.**  
   El flujo 5 pasos se entiende y no se solapa. En desktop podria ganar claridad aumentando iconos/nodos o reduciendo el ancho del bloque de texto.
   - Archivos: `src/styles.css`, `src/components/Solution.tsx`
   - Recomendacion CSS: ajustar `.solution-card` a `grid-template-columns: minmax(0, 0.72fr) minmax(560px, 1.28fr)` y subir `.flow-node, .flow-core` a `min-height: 144px` en desktop.

3. **Funcionalidades: buena composicion, pero cards secundarias algo pequenas.**  
   La card oscura principal funciona y se ve elegante. Las cards blancas son consistentes, aunque el texto secundario queda muy compacto en desktop y mobile.
   - Archivos: `src/styles.css`, `src/components/Features.tsx`
   - Recomendacion CSS: subir `.feature-row p, .feature-card p` a `0.95rem`, revisar `line-height: 1.6`, y aumentar `gap` de `.feature-suite` a `18-20px`.

4. **Footer usable, pero la jerarquia comercial puede mejorar.**  
   Logo, email, mapa del sitio, CTA y legal estan presentes y alineados. En mobile el footer no se comprime, pero el panel puede sentirse pesado por padding y cards internas.
   - Archivos: `src/styles.css`, `src/components/Footer.tsx`
   - Recomendacion CSS: en mobile usar `.footer-panel { border-radius: 18px; }`, reducir fondos decorativos y asegurar que `.footer-mail` tenga `max-width: 100%` y `overflow-wrap: anywhere`.

5. **Evitar exceso de fondos azulados suaves.**  
   No se usan bloques azules saturados como fondo principal, lo cual cumple. Aun asi, la repeticion de gradientes azulados suaves puede volver la pagina un poco generica.
   - Archivo: `src/styles.css`
   - Recomendacion CSS: reservar los gradientes para hero/CTA y usar mas superficies blancas planas con borde `#D8E0EC` y sombras suaves.

## Validacion por criterio

- Header desktop: cumple con observacion. Logo oficial visible, nav legible, sin overflow observado; falta CTA comercial en header si se espera conversion inmediata.
- Hero desktop: cumple con observacion. H1 fuerte y CTAs visibles; dashboard real pero subdimensionado.
- Dashboard: cumple. Contenedor blanco, borde fino, sombra, sidebar navy, metricas, progreso y acciones visibles. No hay fondo principal azul saturado.
- La solucion: cumple. Layout limpio, pasos 01/02/03 legibles, sin solapamientos.
- Funcionalidades: cumple. Card oscura elegante, cards blancas consistentes, iconos sobrios; mejorar densidad tipografica.
- Footer: cumple. Logo, email, sitio, CTA y legal presentes.
- Mobile 390: cumple con observacion. No se aprecia scroll horizontal, header no tapa contenido, CTAs visibles, dashboard simplificado y cards apiladas; mejorar ritmo vertical y escala de titulares.

## Archivos exactos a modificar

- `src/styles.css`: principal archivo para ajustes de escala, grid, mobile, dashboard y densidad.
- `src/components/Header.tsx`: si se decide anadir CTA/nav action en el header.
- `src/components/Hero.tsx`: si se compactan trust points o se prioriza el dashboard en mobile.
- `src/components/DashboardMockup.tsx`: si se reduce informacion visible del dashboard en mobile.
- `src/components/Solution.tsx`: solo si se modifica estructura del flujo; con CSS deberia bastar.
- `src/components/Footer.tsx`: solo si se reordena CTA/email; con CSS deberia bastar.

## Recomendaciones CSS concretas

```css
@media (min-width: 1101px) {
  .hero-grid {
    grid-template-columns: minmax(0, 0.82fr) minmax(560px, 1.18fr);
    gap: 44px;
  }

  .dashboard-hero {
    max-width: 720px;
    justify-self: end;
  }

  .solution-card {
    grid-template-columns: minmax(0, 0.72fr) minmax(560px, 1.28fr);
  }
}

@media (max-width: 760px) {
  .hero-section {
    padding-top: 32px;
  }

  .hero-copy h1,
  .problem-copy h2,
  .solution-copy h2 {
    max-width: none;
    font-size: clamp(2.55rem, 11vw, 3.05rem);
    line-height: 1.04;
  }

  .mockup-content {
    padding: 12px;
  }

  .mockup-list li {
    grid-template-columns: 8px 1fr;
  }

  .mockup-list li strong {
    grid-column: 2;
  }

  .footer-mail {
    max-width: 100%;
    overflow-wrap: anywhere;
  }
}
```

## Comandos QA

```bash
npm run build
vite preview --host 0.0.0.0 --port 4177
npm run qa:screenshots
```

Los screenshots se generan en `qa-screenshots/`.

Si Vite muestra `ENOSPC: System limit for number of file watchers reached`, ajustar inotify:

```bash
fs.inotify.max_user_watches=524288
fs.inotify.max_user_instances=1024
```
