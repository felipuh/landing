import { audiences } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function TargetAudience() {
  const [certified, certificationProcess, consultant, quality, compliance, operations, spreadsheet] = audiences;
  const coreAudiences = [certified, certificationProcess, consultant, quality];
  const leadershipAudiences = [compliance, operations, spreadsheet];

  return (
    <section id="para-quien-es" className="section audience-section">
      <div className="container">
        <SectionHeader
          eyebrow="Para quién es"
          title="Para organizaciones que necesitan demostrar control, no solo administrarlo"
          description="ISO SMART AI encaja en empresas y equipos que deben coordinar documentos, evidencias, auditorías y responsables con trazabilidad."
          align="center"
        />

        <div className="audience-suite">
          <article className="audience-profile-card">
            <span className="audience-kicker">Perfil ideal</span>
            <h3>Equipos con procesos ISO activos, auditorías frecuentes y evidencia dispersa.</h3>
            <p>
              Cuando el cumplimiento depende de correos, hojas de cálculo o carpetas compartidas, ISO SMART AI aporta una capa clara de orden, seguimiento y visibilidad gerencial.
            </p>
            <div className="audience-profile-tags">
              <span>Calidad</span>
              <span>Operaciones</span>
              <span>Cumplimiento</span>
            </div>
          </article>

          <div className="audience-column">
            <span className="audience-group-label">Organizaciones y expertos</span>
            <div className="audience-list audience-list-primary">
              {coreAudiences.map(({ icon: Icon, label }) => (
                <article key={label}>
                  <span className="icon-box"><Icon size={19} aria-hidden="true" /></span>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="audience-column audience-column-dark">
            <span className="audience-group-label">Equipos que necesitan visibilidad</span>
            <div className="audience-list">
              {leadershipAudiences.map(({ icon: Icon, label }) => (
                <article key={label}>
                  <span className="icon-box"><Icon size={19} aria-hidden="true" /></span>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
