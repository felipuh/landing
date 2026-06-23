import { DashboardMockup } from './DashboardMockup';
import { SectionHeader } from './SectionHeader';

export function DashboardShowcase() {
  return (
    <section className="section dashboard-section">
      <div className="container dashboard-grid">
        <div>
          <SectionHeader
            eyebrow="Vista ejecutiva"
            title="Indicadores, pendientes y riesgos en una sola pantalla"
            description="Visualiza cumplimiento, auditorías, documentos pendientes, hallazgos abiertos, acciones vencidas y avance de planes sin reconstruir reportes manuales."
          />
          <div className="stat-strip">
            <article><strong>86%</strong><span>Cumplimiento global</span></article>
            <article><strong>12</strong><span>Acciones por vencer</span></article>
            <article><strong>4</strong><span>Auditorías activas</span></article>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}
