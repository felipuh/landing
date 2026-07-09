import { Clock3, TrendingUp } from 'lucide-react';
import type { ProductLandingContent } from '../data/products/types';

type DashboardMockupProps = {
  product: ProductLandingContent;
  variant?: 'hero' | 'section';
};

export function DashboardMockup({ product, variant = 'section' }: DashboardMockupProps) {
  return (
    <div className={`dashboard-mockup ${variant === 'hero' ? 'dashboard-hero' : ''}`} aria-label={product.dashboard.mockupLabel}>
      <div className="mockup-topbar">
        <div aria-hidden="true">
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
        <strong>{product.dashboard.topbarTitle}</strong>
      </div>
      <div className="mockup-content">
        <aside className="mockup-sidebar" aria-hidden="true">
          {product.dashboard.sidebar.map((item, index) => (
            <span key={item} className={index === 0 ? 'active' : undefined}>{item}</span>
          ))}
        </aside>
        <div className="mockup-main">
          <div className="mockup-kpis">
            {product.dashboard.kpis.map(({ icon: Icon, value, label }) => (
              <article key={label}>
                <Icon size={18} />
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
          <div className="mockup-panel">
            <div className="panel-heading">
              <div>
                <span>{product.dashboard.panelOverline}</span>
                <strong>{product.dashboard.panelTitle}</strong>
              </div>
              <Clock3 size={18} />
            </div>
            <div className="progress-line"><span style={{ width: product.dashboard.progressWidth }} /></div>
            <ul className="mockup-list">
              {product.dashboard.tasks.map((task) => (
                <li key={task.label}><span /> {task.label} <strong>{task.status}</strong></li>
              ))}
            </ul>
          </div>
          <div className="mockup-chart" aria-hidden="true">
            <TrendingUp size={18} />
            {product.dashboard.chartHeights.map((height, index) => (
              <span key={`${height}-${index}`} style={{ height }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
