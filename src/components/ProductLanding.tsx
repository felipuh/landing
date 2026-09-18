import { Benefits } from './Benefits';
import { ContactCta } from './ContactCta';
import { DashboardShowcase } from './DashboardShowcase';
import { Differentiators } from './Differentiators';
import { Features } from './Features';
import { Faq } from './Faq';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { Problem } from './Problem';
import { Solution } from './Solution';
import { TargetAudience } from './TargetAudience';
import type { ProductLandingContent } from '../data/products/types';

type ProductLandingProps = {
  product: ProductLandingContent;
};

export function ProductLanding({ product }: ProductLandingProps) {
  const isIsoSmart = product.key === 'isoSmart';

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header product={product} />
      <main id="main-content">
        <Hero product={product} />
        {!isIsoSmart && <Problem product={product} />}
        <Solution product={product} />
        <Features product={product} />
        {!isIsoSmart && <Benefits product={product} />}
        {!isIsoSmart && <TargetAudience product={product} />}
        <DashboardShowcase product={product} />
        <Differentiators product={product} />
        <Faq product={product} />
        <ContactCta product={product} />
      </main>
      <Footer product={product} />
    </>
  );
}
