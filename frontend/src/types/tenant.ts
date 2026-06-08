export interface Tenant {
  id: string;
  name: string;
  subject: string;
  bio: string;
  photoUrl: string;
  logoUrl?: string;
  brandName: string;
  studentCount: number;
  chapterPrice: number;
  currency: string;
  /** Years of teaching experience — shown as a credibility indicator. */
  yearsExperience: number;
  /** Average rating (0–5) shown in the hero. */
  rating: number;
  /** Number of ratings backing the average. */
  ratingCount: number;
}

export type Language = "ar" | "en";
export type Direction = "rtl" | "ltr";

export interface LandingCopy {
  headline: string;
  features: string[];
  ctaButton: string;
  socialProof: (count: number) => string;
  priceLabel: (price: number, currency: string) => string;
}

/* ------------------------------------------------------------------ */
/* Rich marketing content                                              */
/* ------------------------------------------------------------------ */

export interface ProblemSolution {
  problem: string;
  solution: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Step {
  icon: string;
  title: string;
  desc: string;
}

export interface MetricItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Testimonial {
  name: string;
  stage: string;
  quote: string;
  rating: number;
  /** Seed for the generated avatar. */
  seed: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface LandingContent {
  nav: {
    benefits: string;
    how: string;
    testimonials: string;
    faq: string;
    cta: string;
    login: string;
    register: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    credibility: string[];
    ratingLabel: (rating: number, count: number) => string;
    studentsLabel: (count: number) => string;
    yearsLabel: (years: number) => string;
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ProblemSolution[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: BenefitItem[];
  };
  ai: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: string[];
    chat: {
      question: string;
      answer: string;
      citation: string;
      placeholder: string;
      remaining: string;
    };
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Step[];
  };
  metrics: {
    eyebrow: string;
    title: string;
    items: MetricItem[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FAQ[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    button: string;
    guarantee: string;
    priceNote: string;
  };
  footer: {
    tagline: string;
    columns: FooterColumn[];
    rights: string;
  };
}
