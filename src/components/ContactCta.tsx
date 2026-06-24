import { ArrowRight, CalendarCheck2, Mail, MessageCircle } from 'lucide-react';
import { links } from '../data/content';

export function ContactCta() {
  return (
    <section id="contacto" className="section final-cta-section">
      <div className="container final-cta">
        <div className="final-cta-copy">
          <p className="eyebrow">Siguiente paso</p>
          <h2>Lleva tu sistema ISO a una operación digital más clara</h2>
          <p>
            Agenda una demo de ISO SMART AI y revisemos cómo centralizar documentos, evidencias, auditorías y planes de acción en un entorno trazable.
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

        <aside className="final-cta-card" aria-label="Información de contacto">
          <span>Demo comercial</span>
          <strong>Una revisión rápida para entender tu operación actual y los próximos pasos.</strong>
          <div className="final-cta-card-list">
            <p><CalendarCheck2 size={18} aria-hidden="true" /> Revisión de procesos ISO actuales</p>
            <p><Mail size={18} aria-hidden="true" /> info@isosmart-ai.com</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
