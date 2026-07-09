import { DashboardMockup } from './DashboardMockup';
import { SectionHeader } from './SectionHeader';
import type { ProductLandingContent } from '../data/products/types';

type DashboardShowcaseProps = {
  product: ProductLandingContent;
};

export function DashboardShowcase({ product }: DashboardShowcaseProps) {
  return (
    <section className="section dashboard-section">
      <div className="container dashboard-grid">
        <div>
          <SectionHeader
            eyebrow={product.dashboard.eyebrow}
            title={product.dashboard.title}
            description={product.dashboard.description}
          />
          <div className="stat-strip">
            {product.dashboard.stats.map((stat) => (
              <article key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>
            ))}
          </div>
        </div>
        <DashboardMockup product={product} />
      </div>
    </section>
  );
}
