import { Benefits } from './components/Benefits';
import { ContactCta } from './components/ContactCta';
import { DashboardShowcase } from './components/DashboardShowcase';
import { Differentiators } from './components/Differentiators';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { TargetAudience } from './components/TargetAudience';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <TargetAudience />
        <DashboardShowcase />
        <Differentiators />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
