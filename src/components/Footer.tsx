import { navItems } from '../data/content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            ISO SMART ayuda a empresas y equipos de calidad a administrar documentación, evidencias, auditorías y planes de acción con orden y trazabilidad.
          </p>
        </div>
        <nav aria-label="Links internos">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="footer-contact">
          <strong>Contacto</strong>
          <a href="mailto:felipe@smart3ai.com">felipe@smart3ai.com</a>
          <span>Demo y asesoría comercial</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ISO SMART. Todos los derechos reservados.</span>
        <span>Información comercial sujeta a validación durante la demo.</span>
      </div>
    </footer>
  );
}
