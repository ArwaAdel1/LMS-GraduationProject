import { Star, ArrowRight, BadgeCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  mockTeacher,
  landingContent,
  landingCopy,
  teacherNameLocalized,
  subjectLocalized,
  bioLocalized,
} from "@/data/landing";


export default function HeroSection() {
  const { lang } = useLanguage();
  const hero = landingContent[lang].hero;
  const copy = landingCopy[lang];

  return (
    <section id="top" className="bg-primary text-text-on-primary">
      {/* Asymmetric hero: teacher's pitch leads, their card supports (UX-1). */}
      <div className="mx-auto grid max-w-mobile gap-xl px-md py-2xl sm:max-w-tablet md:max-w-desktop md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-2xl md:px-lg">
        {/* Copy column — the star */}
        <div className="text-start">
          <h1 className="text-h1 font-extrabold">{hero.headline}</h1>

          <p className="mt-md max-w-tablet text-h3 font-regular text-text-on-primary/80">
            {hero.subheadline}
          </p>

          {/* Feature bullet list (EXPERIENCE.md §1) */}
          <ul className="mt-lg flex flex-wrap gap-x-md gap-y-sm">
            {copy.features.map((feature) => (
              <li
                key={feature}
                className="inline-flex items-center gap-xs text-body font-medium text-text-on-primary/90"
              >
                <BadgeCheck size={16} className="text-accent" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Priced CTA — price shown prominently next to the primary action */}
          <div className="mt-xl flex flex-col gap-sm sm:flex-row sm:items-center sm:gap-md">
            <a href="#subscribe" className="sm:inline-flex">
              <Button variant="primary" fullWidth className="group sm:w-auto">
                {hero.primaryCta}
                <ArrowRight
                  size={20}
                  className="ms-sm transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                />
              </Button>
            </a>
            <a href="#benefits" className="sm:inline-flex">
              <Button
                variant="ghost"
                fullWidth
                className="sm:w-auto !bg-text-on-primary/10 ring-1 ring-text-on-primary/20 hover:!bg-text-on-primary/15"
              >
                {hero.secondaryCta}
              </Button>
            </a>
          </div>

          <p className="mt-md text-h3 font-extrabold text-accent">
            {copy.priceLabel(mockTeacher.chapterPrice, mockTeacher.currency)}
          </p>

          {/* Social proof: rating + enrolled student count */}
          <div className="mt-lg flex flex-wrap items-center gap-x-md gap-y-sm">
            <span className="inline-flex items-center gap-xs">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
              <span className="ms-xs text-small font-semibold text-text-on-primary/85">
                {hero.ratingLabel(mockTeacher.rating, mockTeacher.ratingCount)}
              </span>
            </span>
            <span className="text-small font-semibold text-text-on-primary/85">
              {copy.socialProof(mockTeacher.studentCount)}
            </span>
          </div>
        </div>

        {/* Teacher card — solid surface, this teacher's identity (no glass) */}
        <div className="w-full">
          <div className="rounded-card bg-surface p-lg shadow-elevated">
            <div className="flex items-center gap-md">
              <img
                src={mockTeacher.photoUrl}
                alt={teacherNameLocalized[lang]}
                className="h-[96px] w-[96px] shrink-0 rounded-full border-2 border-accent object-cover"
              />
              <div className="min-w-0">
                <h2 className="text-h2 font-bold text-primary">
                  {teacherNameLocalized[lang]}
                </h2>
                <p className="mt-xs text-body font-semibold text-accent">
                  {subjectLocalized[lang]}
                </p>
              </div>
            </div>

            <p className="mt-md text-small text-text-secondary">
              {bioLocalized[lang]}
            </p>

            <p className="mt-md border-t border-primary/5 pt-md text-small font-semibold text-primary">
              {hero.yearsLabel(mockTeacher.yearsExperience)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
