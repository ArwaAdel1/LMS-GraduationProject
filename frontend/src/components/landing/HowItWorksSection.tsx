import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { landingContent } from "@/data/landing";

export default function HowItWorksSection() {
  const { lang } = useLanguage();
  const how = landingContent[lang].how;
  const lastIndex = how.steps.length - 1;

  return (
    <Section id="how" variant="surface">
      <SectionHeading
        eyebrow={how.eyebrow}
        title={how.title}
        subtitle={how.subtitle}
      />

      {/* Vertical step flow — numbered rail, not a symmetric horizontal row */}
      <ol className="mx-auto mt-2xl flex max-w-tablet flex-col">
        {how.steps.map((step, i) => (
          <li key={i} className="flex gap-md">
            {/* Marker rail */}
            <div className="flex flex-col items-center">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-h3 font-bold text-text-on-primary">
                {i + 1}
              </span>
              {i < lastIndex && (
                <span aria-hidden className="my-xs w-px flex-1 bg-primary/10" />
              )}
            </div>

            <div className={i < lastIndex ? "pb-xl" : ""}>
              <h3 className="text-h3 font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-xs text-body text-text-secondary">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
