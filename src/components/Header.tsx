import { Logo } from './Logo';
import type { ProductLandingContent } from '../data/products/types';

type HeaderProps = {
  product: ProductLandingContent;
};

export function Header({ product }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <div className="nav-brand">
          <Logo product={product} />
          <span>{product.navTagline}</span>
        </div>
        <div className="nav-center">
          <nav className="desktop-nav" aria-label="Navegación principal">
            {product.navItems.map((item, index) => (
              <a key={item.href} href={item.href} className={index === 0 ? 'active' : undefined}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
