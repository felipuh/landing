import { CheckCircle2 } from 'lucide-react';
import { solutionItems } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Solution() {
  return (
    <section id="solucion" className="section">
      <div className="container solution-card">
        <SectionHeader
          eyebrow="La solución"
          title="ISO SMART convierte tu sistema de gestión en una operación digital, trazable y fácil de seguir"
          description="La plataforma reúne los elementos críticos del cumplimiento ISO para que calidad, operaciones y gerencia trabajen con la misma información."
          align="center"
        />
        <div className="solution-grid">
          {solutionItems.map((item) => (
            <article key={item.title}>
              <CheckCircle2 size={24} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
