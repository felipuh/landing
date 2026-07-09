import { ArrowRight, ShieldCheck } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';
import type { ProductLandingContent } from '../data/products/types';

type HeroProps = {
  product: ProductLandingContent;
};

export function Hero({ product }: HeroProps) {
  const EyebrowIcon = ShieldCheck;

  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy reveal-in">
          <p className="eyebrow">
            <EyebrowIcon size={16} aria-hidden="true" />
            {product.hero.eyebrow}
          </p>
          <h1>{product.hero.title}</h1>
          <p className="hero-lead">
            {product.hero.description}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={product.links.demo}>
              {product.hero.primaryCta}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={product.hero.secondaryHref}>
              {product.hero.secondaryCta}
            </a>
          </div>
          <div className="trust-row" aria-label="Puntos de confianza">
            {product.hero.trustPoints.map(({ icon: Icon, label }) => (
              <span key={label}><Icon size={17} /> {label}</span>
            ))}
          </div>
        </div>
        <DashboardMockup product={product} variant="hero" />
      </div>
    </section>
  );
}
