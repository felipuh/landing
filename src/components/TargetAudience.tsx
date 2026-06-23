import { audiences } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function TargetAudience() {
  return (
    <section id="para-quien-es" className="section">
      <div className="container audience-shell">
        <SectionHeader
          eyebrow="Para quién es"
          title="ISO SMART está diseñado para organizaciones que necesitan control real sobre su sistema de gestión"
          description="Funciona para equipos internos y consultores que desean reducir dispersión, mejorar seguimiento y elevar la madurez del cumplimiento."
        />
        <div className="audience-list">
          {audiences.map(({ icon: Icon, label }) => (
            <article key={label}>
              <Icon size={19} aria-hidden="true" />
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
