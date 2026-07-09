import { SectionHeader } from './SectionHeader';
import type { ProductLandingContent } from '../data/products/types';

type BenefitsProps = {
  product: ProductLandingContent;
};

export function Benefits({ product }: BenefitsProps) {
  const [primaryBenefit, auditBenefit, manualBenefit, ...supportBenefits] = product.benefits.items;

  return (
    <section id="beneficios" className="section benefits-section">
      <div className="container">
        <SectionHeader
          eyebrow={product.benefits.eyebrow}
          title={product.benefits.title}
          description={product.benefits.description}
          align="center"
        />

        <div className="benefit-suite">
          <article className="benefit-impact-card">
            <span className="benefit-kicker">{product.benefits.primaryKicker}</span>
            <div className="benefit-impact-title">
              <span className="icon-box"><primaryBenefit.icon size={24} aria-hidden="true" /></span>
              <div>
                <h3>{primaryBenefit.title}</h3>
                <p>{primaryBenefit.text}</p>
              </div>
            </div>
            <div className="benefit-scoreboard" aria-label="Indicadores de impacto">
              {product.benefits.scoreboards.map((scoreboard) => (
                <div key={scoreboard.label}>
                  <strong>{scoreboard.value}</strong>
                  <span>{scoreboard.label}</span>
                </div>
              ))}
            </div>
            <div className="benefit-progress">
              <span>{product.benefits.progressLabel}</span>
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
