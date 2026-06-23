import { features } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Features() {
  return (
    <section id="funcionalidades" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Funcionalidades"
          title="Todo lo necesario para administrar cumplimiento, evidencia y mejora continua"
          description="Módulos pensados para equipos que necesitan orden, seguimiento y claridad sin aumentar la carga manual."
          align="center"
        />
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <span className="icon-box"><Icon size={22} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
