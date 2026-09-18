import type { ProductLandingContent } from '../data/products/types';

type LogoProps = {
  compact?: boolean;
  product: ProductLandingContent;
};

export function Logo({ compact = false, product }: LogoProps) {
  return (
    <a className={`logo ${compact ? 'logo-compact' : ''}`} href="#inicio" aria-label={`${product.brandName} inicio`}>
      <img
        className="logo-image"
        src={compact ? '/iso-smart-ai-icon.svg' : '/iso-smart-ai-logo.svg'}
        alt={product.logoAlt}
        width={compact ? 42 : 178}
        height={compact ? 42 : 63}
        decoding="async"
      />
    </a>
  );
}
