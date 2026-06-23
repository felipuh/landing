import { AlertTriangle, CheckCircle2, Clock3, FileText, TrendingUp } from 'lucide-react';

type DashboardMockupProps = {
  variant?: 'hero' | 'section';
};

export function DashboardMockup({ variant = 'section' }: DashboardMockupProps) {
  return (
    <div className={`dashboard-mockup ${variant === 'hero' ? 'dashboard-hero' : ''}`} aria-label="Representación visual del dashboard ISO SMART">
      <div className="mockup-topbar">
        <div aria-hidden="true">
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
        <strong>ISO SMART Control Center</strong>
      </div>
      <div className="mockup-content">
        <aside className="mockup-sidebar" aria-hidden="true">
          <span className="active">Cumplimiento</span>
          <span>Documentos</span>
          <span>Auditorías</span>
          <span>Acciones</span>
        </aside>
        <div className="mockup-main">
          <div className="mockup-kpis">
            <article>
              <CheckCircle2 size={18} />
              <strong>86%</strong>
              <span>Cumplimiento</span>
            </article>
            <article>
              <FileText size={18} />
              <strong>124</strong>
              <span>Documentos</span>
            </article>
            <article>
              <AlertTriangle size={18} />
              <strong>9</strong>
              <span>Hallazgos abiertos</span>
            </article>
          </div>
          <div className="mockup-panel">
            <div className="panel-heading">
              <div>
                <span>Auditoría interna Q2</span>
                <strong>Plan de seguimiento</strong>
              </div>
              <Clock3 size={18} />
            </div>
            <div className="progress-line"><span style={{ width: '72%' }} /></div>
            <ul className="mockup-list">
              <li><span /> Evidencias de proceso comercial <strong>Completado</strong></li>
              <li><span /> Acciones correctivas vencidas <strong>2 pendientes</strong></li>
              <li><span /> Revisión documental mensual <strong>En progreso</strong></li>
            </ul>
          </div>
          <div className="mockup-chart" aria-hidden="true">
            <TrendingUp size={18} />
            <span style={{ height: '38%' }} />
            <span style={{ height: '58%' }} />
            <span style={{ height: '46%' }} />
            <span style={{ height: '78%' }} />
            <span style={{ height: '68%' }} />
            <span style={{ height: '88%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
