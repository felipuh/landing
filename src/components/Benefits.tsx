import { benefits } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Benefits() {
  const [primaryBenefit, auditBenefit, manualBenefit, ...supportBenefits] = benefits;

  return (
    <section id="beneficios" className="section benefits-section">
      <div className="container">
        <SectionHeader
          eyebrow="Beneficios de negocio"
          title="Control operativo real para equipos que deben demostrar cumplimiento"
          description="ISO SMART AI reduce el trabajo disperso y convierte la gestión ISO en información clara, trazable y útil para decidir."
          align="center"
        />

        <div className="benefit-suite">
          <article className="benefit-impact-card">
            <span className="benefit-kicker">Impacto esperado</span>
            <div className="benefit-impact-title">
              <span className="icon-box"><primaryBenefit.icon size={24} aria-hidden="true" /></span>
              <div>
                <h3>{primaryBenefit.title}</h3>
                <p>{primaryBenefit.text}</p>
              </div>
            </div>
            <div className="benefit-scoreboard" aria-label="Indicadores de impacto">
              <div>
                <strong>1</strong>
                <span>fuente central de documentos y evidencias</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>visibilidad para responsables y gerencia</span>
              </div>
            </div>
            <div className="benefit-progress">
              <span>Orden documental</span>
              <i aria-hidden="true" />
            </div>
          </article>

          <div className="benefit-focus">
            {[auditBenefit, manualBenefit].map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <span className="icon-box"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="benefit-list">
            {supportBenefits.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <span className="icon-box"><Icon size={19} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
