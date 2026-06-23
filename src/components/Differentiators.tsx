import { differentiators } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Differentiators() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Diferenciadores"
          title="Una plataforma práctica para empresas reales, no solo un repositorio documental"
          align="center"
        />
        <div className="differentiator-grid">
          {differentiators.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
