import { ArrowRight } from 'lucide-react';
import { links, navItems } from '../data/content';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <div className="nav-brand">
          <Logo />
          <span>Gestión ISO digital</span>
        </div>
        <div className="nav-center">
          <nav className="desktop-nav" aria-label="Navegación principal">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} className={index === 0 ? 'active' : undefined}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="nav-actions">
          <a className="nav-email" href="mailto:info@isosmart-ai.com">info@isosmart-ai.com</a>
          <a className="button button-primary nav-cta" href={links.demo}>
            Solicitar demo
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
