import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, CalendarCheck2, CheckCircle2, Mail } from 'lucide-react';
import type { ProductLandingContent } from '../data/products/types';

type ContactCtaProps = {
  product: ProductLandingContent;
};

function createRequestId() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();

  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function ContactCta({ product }: ContactCtaProps) {
  const requestId = useRef(createRequestId());
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const submitRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const organization = String(formData.get('organization') ?? '').trim();
    const priority = String(formData.get('priority') ?? '').trim();
    const website = String(formData.get('website') ?? '').trim();
    const campaign = new URLSearchParams(window.location.search).get('utm_campaign') ?? '';

    setStatus('submitting');
    try {
      const response = await fetch('/api/demo-requests/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          request_id: requestId.current,
          name,
          email,
          organization,
          priority,
          product: product.key === 'isoSmart' ? 'ISO_SMART' : 'MEDSUPPLIER',
          consent: formData.get('consent') === 'on',
          website,
          source: 'landing',
          campaign,
          page_url: window.location.href,
        }),
      });

      if (!response.ok) throw new Error('request_failed');

      setStatus('success');
      form.reset();
      requestId.current = createRequestId();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="section final-cta-section">
      <div className="container final-cta">
        <div className="final-cta-copy">
          <p className="eyebrow">{product.contact.eyebrow}</p>
          <h2>{product.contact.title}</h2>
          <p>
            {product.contact.description}
          </p>
          <div className="demo-expectations" aria-label="Qué incluye la conversación">
            <span><CalendarCheck2 size={18} aria-hidden="true" /> 20 minutos</span>
            <span><CheckCircle2 size={18} aria-hidden="true" /> Sin compromiso</span>
            <span><ArrowRight size={18} aria-hidden="true" /> Próximos pasos claros</span>
          </div>
        </div>

        <form className="demo-form" onSubmit={submitRequest}>
          <div className="form-heading">
            <span>{product.contact.cardLabel}</span>
            <strong>Cuéntanos dónde necesitas más control</strong>
          </div>
          <label>
            Nombre
            <input name="name" autoComplete="name" required placeholder="Tu nombre" />
          </label>
          <label>
            Correo de trabajo
            <input name="email" type="email" autoComplete="email" required placeholder="nombre@empresa.com" />
          </label>
          <label>
            Organización
            <input name="organization" autoComplete="organization" required placeholder="Nombre de la empresa" />
          </label>
          <label>
            Prioridad principal
            <select name="priority" required defaultValue="">
              <option value="" disabled>Selecciona una opción</option>
              <option value="document_control">Control documental</option>
              <option value="audit_readiness">Preparación de auditorías</option>
              <option value="findings_actions">Hallazgos y acciones</option>
              <option value="indicators_followup">Indicadores y seguimiento</option>
              <option value="general_evaluation">Evaluación general</option>
            </select>
          </label>
          <label className="honeypot-field" aria-hidden="true">
            Sitio web
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <label className="consent-field">
            <input name="consent" type="checkbox" required />
            <span>Acepto que Smart3AI utilice estos datos para responder mi solicitud.</span>
          </label>
          <button className="button button-primary" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Enviando…' : 'Solicitar demo'}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="form-privacy">Usaremos estos datos únicamente para responder tu solicitud.</p>
          {status === 'success' && (
            <p className="form-status is-success" role="status">
              <CheckCircle2 size={18} aria-hidden="true" />
              Solicitud recibida. Nuestro equipo podrá gestionarla desde AdminApps.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status is-error" role="alert">
              No pudimos registrar la solicitud. Intenta nuevamente o escríbenos a{' '}
              <a href={`mailto:${product.email}`}><Mail size={15} aria-hidden="true" />{product.email}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
