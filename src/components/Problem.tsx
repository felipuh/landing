import { AlertCircle } from 'lucide-react';
import { problemItems } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Problem() {
  return (
    <section className="section problem-section">
      <div className="container two-column">
        <SectionHeader
          eyebrow="El problema"
          title="Cuando ISO vive en carpetas y hojas de cálculo, el control se vuelve frágil"
          description="Muchas empresas tienen el conocimiento y la intención, pero pierden tiempo buscando evidencias, actualizando archivos y persiguiendo responsables."
        />
        <div className="problem-list">
          {problemItems.map((item) => (
            <article key={item}>
              <AlertCircle size={20} aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
