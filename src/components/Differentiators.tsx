import { SectionHeader } from './SectionHeader';
import type { ProductLandingContent } from '../data/products/types';

type DifferentiatorsProps = {
  product: ProductLandingContent;
};

export function Differentiators({ product }: DifferentiatorsProps) {
  const [isoDesigned, traceability, modular, technology] = product.differentiators.items;

  return (
    <section className="section differentiators-section">
      <div className="container">
        <SectionHeader
          eyebrow={product.differentiators.eyebrow}
          title={product.differentiators.title}
          description={product.differentiators.description}
          align="center"
        />

        <div className="differentiator-suite">
          <article className="differentiator-prime">
            <span className="differentiator-kicker">{product.differentiators.primaryKicker}</span>
            <span className="icon-box"><isoDesigned.icon size={25} aria-hidden="true" /></span>
            <h3>{isoDesigned.title}</h3>
            <p>{isoDesigned.text}</p>
            <div className="differentiator-prime-points">
              {product.differentiators.primaryPoints.map((point) => <span key={point}>{point}</span>)}
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

          <aside className="differentiator-compare" aria-label={product.differentiators.compareLabel}>
            <div>
              <span>{product.differentiators.beforeTitle}</span>
              <strong>{product.differentiators.beforeText}</strong>
            </div>
            <div>
              <span>{product.differentiators.afterTitle}</span>
              <strong>{product.differentiators.afterText}</strong>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
