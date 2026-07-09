import type { LucideIcon } from 'lucide-react';

export type ProductKey = 'isoSmart' | 'medSupplier';

export type LinkSet = {
  demo: string;
  advisor: string;
  whatsapp: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type IconTextItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type AudienceItem = {
  icon: LucideIcon;
  label: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HeroCopy = SectionCopy & {
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  trustPoints: Array<{
    icon: LucideIcon;
    label: string;
  }>;
};

export type ProblemCopy = SectionCopy & {
  panelTitle: string;
  panelContext: string;
  footerLabel: string;
  footerText: string;
  items: string[];
};

export type SolutionCopy = SectionCopy & {
  metrics: Array<{
    value: string;
    label: string;
  }>;
  flowLabel: string;
  flowNodes: {
    first: string;
    second: string;
    coreTitle: string;
    coreSubtitle: string;
    third: string;
    fourth: string;
  };
  items: Array<{
    title: string;
    text: string;
  }>;
};

export type FeatureCopy = SectionCopy & {
  primaryKicker: string;
  primaryMeta: string[];
  operationLabel: string;
  operationTitle: string;
  resultLabel: string;
  resultText: string;
  items: IconTextItem[];
};

export type BenefitCopy = SectionCopy & {
  primaryKicker: string;
  scoreboards: Array<{
    value: string;
    label: string;
  }>;
  progressLabel: string;
  items: IconTextItem[];
};

export type AudienceCopy = SectionCopy & {
  profileKicker: string;
  profileTitle: string;
  profileText: string;
  profileTags: string[];
  primaryGroupLabel: string;
  secondaryGroupLabel: string;
  items: AudienceItem[];
};

export type DashboardCopy = SectionCopy & {
  mockupLabel: string;
  topbarTitle: string;
  sidebar: string[];
  kpis: Array<{
    icon: LucideIcon;
    value: string;
    label: string;
  }>;
  panelOverline: string;
  panelTitle: string;
  progressWidth: string;
  tasks: Array<{
    label: string;
    status: string;
    tone?: 'ok' | 'pending' | 'expired' | 'risk';
  }>;
  chartHeights: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export type DifferentiatorCopy = SectionCopy & {
  primaryKicker: string;
  primaryPoints: string[];
  compareLabel: string;
  beforeTitle: string;
  beforeText: string;
  afterTitle: string;
  afterText: string;
  items: IconTextItem[];
};

export type ContactCopy = SectionCopy & {
  primaryCta: string;
  secondaryCta: string;
  cardLabel: string;
  cardText: string;
  cardItems: string[];
};

export type FooterCopy = {
  description: string;
  navLabel: string;
  contactLabel: string;
  contactText: string;
  contactCta: string;
  legal: string;
  disclaimer: string;
};

export type ProductTheme = {
  brand: string;
  brand700: string;
  brand900: string;
  accent: string;
  risk: string;
  soft: string;
};

export type ProductLandingContent = {
  key: ProductKey;
  brandName: string;
  navTagline: string;
  logoAlt: string;
  email: string;
  links: LinkSet;
  navItems: NavItem[];
  theme: ProductTheme;
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: HeroCopy;
  problem: ProblemCopy;
  solution: SolutionCopy;
  features: FeatureCopy;
  benefits: BenefitCopy;
  audience: AudienceCopy;
  dashboard: DashboardCopy;
  differentiators: DifferentiatorCopy;
  contact: ContactCopy;
  footer: FooterCopy;
};
