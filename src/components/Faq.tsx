import { ChevronDown } from 'lucide-react';
import type { ProductLandingContent } from '../data/products/types';

type FaqProps = {
  product: ProductLandingContent;
};

const questions = [
  {
    question: '¿Qué podemos revisar durante la demo?',
    answer: 'Un recorrido de 20 minutos por documentos, evidencias, responsables, vencimientos, hallazgos y la vista ejecutiva. La conversación se adapta al proceso que hoy genera más fricción en tu organización.',
  },
  {
    question: '¿Sirve si todavía trabajamos con Excel y carpetas compartidas?',
    answer: 'Sí. La demo permite mapear cómo trabajan actualmente y definir una adopción gradual, empezando por el proceso o módulo con mayor impacto operativo.',
  },
  {
    question: '¿Cómo se controla quién puede ver o modificar información?',
    answer: 'La plataforma contempla roles, permisos y trazabilidad de cambios para separar responsabilidades y conservar contexto sobre cada elemento del sistema de gestión.',
  },
  {
    question: '¿La demo implica algún compromiso?',
    answer: 'No. Es una sesión exploratoria para validar encaje, resolver preguntas y acordar próximos pasos únicamente si la solución resulta pertinente para tu equipo.',
  },
];

export function Faq({ product }: FaqProps) {
  return (
    <section id="preguntas" className="section faq-section">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Lo esencial antes de evaluar {product.brandName}</h2>
          <p>Respuestas directas para decidir si vale la pena conversar con nuestro equipo.</p>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                {item.question}
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
