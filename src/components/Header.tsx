import { ArrowRight } from 'lucide-react';
import { links, navItems } from '../data/content';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-primary nav-cta" href={links.demo}>
          Solicitar demo
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
