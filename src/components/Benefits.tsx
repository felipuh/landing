import { benefits } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Benefits() {
  return (
    <section id="beneficios" className="section tinted-section">
      <div className="container">
        <SectionHeader
          eyebrow="Beneficios de negocio"
          title="Más control operativo, menos trabajo manual y mejor preparación ante auditorías"
          align="center"
        />
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={23} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
