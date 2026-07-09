import { AlertTriangle, CircleAlert } from 'lucide-react';
import type { ProductLandingContent } from '../data/products/types';

type ProblemProps = {
  product: ProductLandingContent;
};

export function Problem({ product }: ProblemProps) {
  return (
    <section className="section problem-section">
      <div className="container problem-shell">
        <div className="problem-copy">
          <p className="eyebrow">
            <AlertTriangle size={16} aria-hidden="true" />
            {product.problem.eyebrow}
          </p>
          <h2>{product.problem.title}</h2>
          <p>
            {product.problem.description}
          </p>
        </div>
        <div className="problem-panel" aria-label="Riesgos operativos comunes">
          <div className="problem-panel-head">
            <span>{product.problem.panelTitle}</span>
            <strong>{product.problem.panelContext}</strong>
          </div>
          <div className="problem-list">
            {product.problem.items.map((item, index) => (
              <article key={item}>
                <span className="problem-index">{String(index + 1).padStart(2, '0')}</span>
                <CircleAlert size={18} aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
          <div className="problem-panel-foot">
            <span>{product.problem.footerLabel}</span>
            <strong>{product.problem.footerText}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
