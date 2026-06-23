import { AlertTriangle, CircleAlert } from 'lucide-react';
import { problemItems } from '../data/content';

export function Problem() {
  return (
    <section className="section problem-section">
      <div className="container problem-shell">
        <div className="problem-copy">
          <p className="eyebrow">
            <AlertTriangle size={16} aria-hidden="true" />
            El problema
          </p>
          <h2>La gestión ISO se vuelve frágil cuando depende de archivos dispersos</h2>
          <p>
            Muchas empresas conocen sus procesos, pero pierden control cuando la documentación, las evidencias y los compromisos viven entre correos, carpetas y hojas de cálculo.
          </p>
        </div>
        <div className="problem-panel" aria-label="Riesgos operativos comunes">
          <div className="problem-panel-head">
            <span>Riesgos que ISO SMART ordena</span>
            <strong>Antes de la auditoría</strong>
          </div>
          <div className="problem-list">
            {problemItems.map((item, index) => (
              <article key={item}>
                <span className="problem-index">{String(index + 1).padStart(2, '0')}</span>
                <CircleAlert size={18} aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
          <div className="problem-panel-foot">
            <span>Resultado habitual</span>
            <strong>Menos trazabilidad, más retrabajo y baja visibilidad gerencial.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
