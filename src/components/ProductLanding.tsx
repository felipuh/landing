import { Benefits } from './Benefits';
import { ContactCta } from './ContactCta';
import { DashboardShowcase } from './DashboardShowcase';
import { Differentiators } from './Differentiators';
import { Features } from './Features';
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
  return (
    <>
      <Header product={product} />
      <main>
        <Hero product={product} />
        <Problem product={product} />
        <Solution product={product} />
        <Features product={product} />
        <Benefits product={product} />
        <TargetAudience product={product} />
        <DashboardShowcase product={product} />
        <Differentiators product={product} />
        <ContactCta product={product} />
      </main>
      <Footer product={product} />
    </>
  );
}
