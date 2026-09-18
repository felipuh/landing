import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import type { ProductLandingContent } from '../data/products/types';

type HeaderProps = {
  product: ProductLandingContent;
};

export function Header({ product }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sectionIds = product.navItems
      .map((item) => item.href.replace('#', ''))
      .filter(Boolean);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [product.navItems]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const navLinks = product.navItems.map((item) => {
    const sectionId = item.href.replace('#', '');
    const isActive = sectionId === activeSection;
    return (
      <a
        key={item.href}
        href={item.href}
        className={isActive ? 'active' : undefined}
        aria-current={isActive ? 'location' : undefined}
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
      </a>
    );
  });

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <div className="nav-brand">
          <Logo product={product} />
          <span>{product.navTagline}</span>
        </div>
        <div className="nav-center">
          <nav className="desktop-nav" aria-label="Navegación principal">
            {navLinks}
          </nav>
        </div>
        <div className="nav-actions">
          <a className="button button-primary nav-cta" href="#contacto">Agendar demo</a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegación móvil"
      >
        {navLinks}
        <a className="button button-primary" href="#contacto" onClick={() => setMenuOpen(false)}>
          Agendar demo
        </a>
      </nav>
    </header>
  );
}
