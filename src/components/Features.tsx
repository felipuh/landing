import { features } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Features() {
  const [primaryFeature, ...supportFeatures] = features;
  const operationalFeatures = supportFeatures.slice(0, 4);
  const governanceFeatures = supportFeatures.slice(4);

  return (
    <section id="funcionalidades" className="section features-section">
      <div className="container">
        <SectionHeader
          eyebrow="Funcionalidades"
          title="Módulos diseñados para controlar el sistema ISO sin aumentar la carga manual"
          description="Documentos, evidencias, auditorías, hallazgos y acciones conectados en una experiencia clara para equipos de calidad, cumplimiento y operaciones."
          align="center"
        />

        <div className="feature-suite">
          <article className="feature-hero-card">
            <span className="feature-kicker">Módulo central</span>
            <span className="icon-box"><primaryFeature.icon size={24} aria-hidden="true" /></span>
            <h3>{primaryFeature.title}</h3>
            <p>{primaryFeature.text}</p>
            <div className="feature-hero-meta">
              <span>Versiones</span>
              <span>Vigencias</span>
              <span>Responsables</span>
            </div>
          </article>

          <div className="feature-lane">
            <div className="feature-lane-head">
              <span>Operación diaria</span>
              <strong>Seguimiento controlado</strong>
            </div>
            {operationalFeatures.map(({ icon: Icon, title, text }) => (
              <article className="feature-row" key={title}>
                <span className="icon-box"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="feature-module-grid">
            {governanceFeatures.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <span className="icon-box"><Icon size={20} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="feature-footer-panel">
          <span>Resultado</span>
          <strong>Una operación ISO más visible, trazable y preparada para auditorías.</strong>
        </div>
      </div>
    </section>
  );
}
