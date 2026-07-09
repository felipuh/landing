import { SectionHeader } from './SectionHeader';
import type { ProductLandingContent } from '../data/products/types';

type FeaturesProps = {
  product: ProductLandingContent;
};

export function Features({ product }: FeaturesProps) {
  const [primaryFeature, ...supportFeatures] = product.features.items;
  const operationalFeatures = supportFeatures.slice(0, 4);
  const governanceFeatures = supportFeatures.slice(4);

  return (
    <section id="funcionalidades" className="section features-section">
      <div className="container">
        <SectionHeader
          eyebrow={product.features.eyebrow}
          title={product.features.title}
          description={product.features.description}
          align="center"
        />

        <div className="feature-suite">
          <article className="feature-hero-card">
            <span className="feature-kicker">{product.features.primaryKicker}</span>
            <span className="icon-box"><primaryFeature.icon size={24} aria-hidden="true" /></span>
            <h3>{primaryFeature.title}</h3>
            <p>{primaryFeature.text}</p>
            <div className="feature-hero-meta">
              {product.features.primaryMeta.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>

          <div className="feature-lane">
            <div className="feature-lane-head">
              <span>{product.features.operationLabel}</span>
              <strong>{product.features.operationTitle}</strong>
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
          <span>{product.features.resultLabel}</span>
          <strong>{product.features.resultText}</strong>
        </div>
      </div>
    </section>
  );
}
