import { differentiators } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Differentiators() {
  const [isoDesigned, traceability, modular, technology] = differentiators;

  return (
    <section className="section differentiators-section">
      <div className="container">
        <SectionHeader
          eyebrow="Diferenciadores"
          title="Una plataforma operativa para gestionar ISO con trazabilidad real"
          description="ISO SMART AI combina estructura documental, seguimiento de responsables y visibilidad ejecutiva para que el sistema de gestión avance con menos fricción."
          align="center"
        />

        <div className="differentiator-suite">
          <article className="differentiator-prime">
            <span className="differentiator-kicker">No es solo almacenamiento</span>
            <span className="icon-box"><isoDesigned.icon size={25} aria-hidden="true" /></span>
            <h3>{isoDesigned.title}</h3>
            <p>{isoDesigned.text}</p>
            <div className="differentiator-prime-points">
              <span>Documentación</span>
              <span>Evidencia</span>
              <span>Auditoría</span>
            </div>
          </article>

          <div className="differentiator-stack">
            {[traceability, modular, technology].map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <span className="icon-box"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="differentiator-compare" aria-label="Comparación con gestión tradicional">
            <div>
              <span>Antes</span>
              <strong>Carpetas, correos y hojas de cálculo sin contexto suficiente.</strong>
            </div>
            <div>
              <span>Con ISO SMART AI</span>
              <strong>Procesos, responsables, evidencias y cambios conectados en una misma operación.</strong>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
