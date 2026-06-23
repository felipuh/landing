import { ArrowUpRight, Mail } from 'lucide-react';
import { links, navItems } from '../data/content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-panel">
          <div className="footer-brand">
            <Logo />
            <p>
              ISO SMART ayuda a empresas y equipos de calidad a administrar documentación, evidencias, auditorías y planes de acción con orden y trazabilidad.
            </p>
            <a className="footer-mail" href="mailto:info@isosmart-ai.com">
              <Mail size={18} aria-hidden="true" />
              info@isosmart-ai.com
            </a>
          </div>

          <nav className="footer-nav" aria-label="Links internos">
            <span>Mapa del sitio</span>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="footer-contact-card">
            <span>Contacto comercial</span>
            <strong>Agenda una conversación para evaluar cómo digitalizar tu gestión ISO.</strong>
            <a href={links.demo}>
              Solicitar demo
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ISO SMART. Todos los derechos reservados.</span>
          <span>Información comercial sujeta a validación durante la demo.</span>
        </div>
      </div>
    </footer>
  );
}
