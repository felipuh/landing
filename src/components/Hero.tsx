import { ArrowRight, CheckCircle2, FileCheck2, LockKeyhole, ShieldCheck } from 'lucide-react';
import { links } from '../data/content';
import { DashboardMockup } from './DashboardMockup';

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy reveal-in">
          <p className="eyebrow">
            <ShieldCheck size={16} aria-hidden="true" />
            Plataforma SaaS para sistemas de gestión ISO
          </p>
          <h1>Gestión ISO inteligente, ordenada y digital</h1>
          <p className="hero-lead">
            ISO SMART AI centraliza documentación, evidencias, auditorías, planes de acción y seguimiento de cumplimiento en una plataforma moderna para empresas que necesitan control, trazabilidad y mejora continua.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={links.demo}>
              Solicitar demo
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#funcionalidades">
              Ver funcionalidades
            </a>
          </div>
          <div className="trust-row" aria-label="Puntos de confianza">
            <span><CheckCircle2 size={17} /> Trazabilidad documental</span>
            <span><LockKeyhole size={17} /> Roles y permisos</span>
            <span><FileCheck2 size={17} /> Auditoría preparada</span>
          </div>
        </div>
        <DashboardMockup variant="hero" />
      </div>
    </section>
  );
}
