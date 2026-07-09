import { CheckCircle2, FileStack, Gauge, GitBranch, ShieldCheck } from 'lucide-react';
import type { ProductLandingContent } from '../data/products/types';

type SolutionProps = {
  product: ProductLandingContent;
};

export function Solution({ product }: SolutionProps) {
  return (
    <section id="solucion" className="section solution-section">
      <div className="container solution-card">
        <div className="solution-copy">
          <p className="eyebrow">
            <ShieldCheck size={16} aria-hidden="true" />
            {product.solution.eyebrow}
          </p>
          <h2>{product.solution.title}</h2>
          <p>
            {product.solution.description}
          </p>
          <div className="solution-metrics" aria-label="Resultados esperados">
            {product.solution.metrics.map((metric) => (
              <article key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></article>
            ))}
          </div>
        </div>

        <div className="solution-visual" aria-label={product.solution.flowLabel}>
          <div className="solution-flow">
            <div className="flow-node muted">
              <FileStack size={20} aria-hidden="true" />
              <span>{product.solution.flowNodes.first}</span>
            </div>
            <div className="flow-node muted">
              <GitBranch size={20} aria-hidden="true" />
              <span>{product.solution.flowNodes.second}</span>
            </div>
            <div className="flow-core">
              <img className="flow-logo-icon" src="/iso-smart-ai-isotipo-azul.png" alt="" aria-hidden="true" />
              <strong>{product.solution.flowNodes.coreTitle}</strong>
              <small>{product.solution.flowNodes.coreSubtitle}</small>
            </div>
            <div className="flow-node">
              <Gauge size={20} aria-hidden="true" />
              <span>{product.solution.flowNodes.third}</span>
            </div>
            <div className="flow-node">
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{product.solution.flowNodes.fourth}</span>
            </div>
          </div>

          <div className="solution-grid">
            {product.solution.items.map((item, index) => (
              <article key={item.title}>
                <span className="solution-index">{String(index + 1).padStart(2, '0')}</span>
                <CheckCircle2 size={20} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
