import { ArrowRight, CalendarCheck2, Mail, MessageCircle } from 'lucide-react';
import type { ProductLandingContent } from '../data/products/types';

type ContactCtaProps = {
  product: ProductLandingContent;
};

export function ContactCta({ product }: ContactCtaProps) {
  return (
    <section id="contacto" className="section final-cta-section">
      <div className="container final-cta">
        <div className="final-cta-copy">
          <p className="eyebrow">{product.contact.eyebrow}</p>
          <h2>{product.contact.title}</h2>
          <p>
            {product.contact.description}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={product.links.demo}>
              {product.contact.primaryCta}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={product.links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              {product.contact.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="final-cta-card" aria-label="Información de contacto">
          <span>{product.contact.cardLabel}</span>
          <strong>{product.contact.cardText}</strong>
          <div className="final-cta-card-list">
            {product.contact.cardItems.map((item, index) => (
              <p key={item}>
                {index === 0 ? <CalendarCheck2 size={18} aria-hidden="true" /> : <Mail size={18} aria-hidden="true" />}
                {item}
              </p>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
