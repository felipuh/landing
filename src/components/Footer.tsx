import { ArrowUpRight, Mail } from 'lucide-react';
import { Logo } from './Logo';
import type { ProductLandingContent } from '../data/products/types';

type FooterProps = {
  product: ProductLandingContent;
};

export function Footer({ product }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-panel">
          <div className="footer-brand">
            <Logo product={product} />
            <p>
              {product.footer.description}
            </p>
            <a className="footer-mail" href={`mailto:${product.email}`}>
              <Mail size={18} aria-hidden="true" />
              {product.email}
            </a>
          </div>

          <nav className="footer-nav" aria-label="Links internos">
            <span>{product.footer.navLabel}</span>
            {product.navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="footer-contact-card">
            <span>{product.footer.contactLabel}</span>
            <strong>{product.footer.contactText}</strong>
            <a href={product.links.demo}>
              {product.footer.contactCta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{product.footer.legal}</span>
          <span>{product.footer.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
