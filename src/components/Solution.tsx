import { CheckCircle2, FileStack, Gauge, GitBranch, ShieldCheck } from 'lucide-react';
import { solutionItems } from '../data/content';

export function Solution() {
  return (
    <section id="solucion" className="section solution-section">
      <div className="container solution-card">
        <div className="solution-copy">
          <p className="eyebrow">
            <ShieldCheck size={16} aria-hidden="true" />
            La solución
          </p>
          <h2>Un sistema ISO digital con control, trazabilidad y seguimiento real</h2>
          <p>
            ISO SMART AI reúne los elementos críticos del cumplimiento en una operación clara para que calidad, operaciones y gerencia trabajen con la misma información.
          </p>
          <div className="solution-metrics" aria-label="Resultados esperados">
            <article><strong>1</strong><span>fuente central de verdad</span></article>
            <article><strong>360°</strong><span>trazabilidad por proceso</span></article>
            <article><strong>24/7</strong><span>visibilidad de pendientes</span></article>
          </div>
        </div>

        <div className="solution-visual" aria-label="Flujo visual de ISO SMART AI">
          <div className="solution-flow">
            <div className="flow-node muted">
              <FileStack size={20} aria-hidden="true" />
              <span>Documentos</span>
            </div>
            <div className="flow-node muted">
              <GitBranch size={20} aria-hidden="true" />
              <span>Procesos</span>
            </div>
            <div className="flow-core">
              <img className="flow-logo-icon" src="/iso-smart-ai-isotipo-azul.png" alt="" aria-hidden="true" />
              <strong>ISO SMART AI</strong>
              <small>Control Center</small>
            </div>
            <div className="flow-node">
              <Gauge size={20} aria-hidden="true" />
              <span>Indicadores</span>
            </div>
            <div className="flow-node">
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>Auditoría lista</span>
            </div>
          </div>

          <div className="solution-grid">
            {solutionItems.map((item, index) => (
              <article key={item.title}>
                <span className="solution-index">{String(index + 1).padStart(2, '0')}</span>
                <CheckCircle2 size={20} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
