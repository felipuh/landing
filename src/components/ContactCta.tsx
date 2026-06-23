import { ArrowRight, MessageCircle } from 'lucide-react';
import { links } from '../data/content';

export function ContactCta() {
  return (
    <section id="contacto" className="section final-cta-section">
      <div className="container final-cta">
        <p className="eyebrow">Siguiente paso</p>
        <h2>Lleva la gestión ISO de tu empresa a un nuevo nivel</h2>
        <p>
          Digitaliza tus procesos, mejora el seguimiento y mantén el control de tu sistema de gestión desde una plataforma moderna, segura y ordenada.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={links.demo}>
            Solicitar demo
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href={links.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
