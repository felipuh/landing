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
      </div>
    </header>
  );
}
