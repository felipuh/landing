import { SectionHeader } from './SectionHeader';
import type { ProductLandingContent } from '../data/products/types';

type TargetAudienceProps = {
  product: ProductLandingContent;
};

export function TargetAudience({ product }: TargetAudienceProps) {
  const [certified, certificationProcess, consultant, quality, compliance, operations, spreadsheet] = product.audience.items;
  const coreAudiences = [certified, certificationProcess, consultant, quality];
  const leadershipAudiences = [compliance, operations, spreadsheet];

  return (
    <section id="para-quien-es" className="section audience-section">
      <div className="container">
        <SectionHeader
          eyebrow={product.audience.eyebrow}
          title={product.audience.title}
          description={product.audience.description}
          align="center"
        />

        <div className="audience-suite">
          <article className="audience-profile-card">
            <span className="audience-kicker">{product.audience.profileKicker}</span>
            <h3>{product.audience.profileTitle}</h3>
            <p>
              {product.audience.profileText}
            </p>
            <div className="audience-profile-tags">
              {product.audience.profileTags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>

          <div className="audience-column">
            <span className="audience-group-label">{product.audience.primaryGroupLabel}</span>
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
            <span className="audience-group-label">{product.audience.secondaryGroupLabel}</span>
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
