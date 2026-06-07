import { HelpCircle, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { landingContent } from "@/data/landing";

export default function WhyChooseSection() {
  const { lang } = useLanguage();
  const why = landingContent[lang].why;

  return (
    <Section variant="light">
      <SectionHeading
        eyebrow={why.eyebrow}
        title={why.title}
        subtitle={why.subtitle}
      />

      <div className="mt-2xl grid gap-lg md:grid-cols-3">
        {why.items.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col gap-md rounded-card bg-surface p-lg shadow-card transition-shadow hover:shadow-elevated ${
              i === 1
                ? "border-s-4 border-accent"
                : "border border-primary/5"
            }`}
          >
            <div className="flex items-start gap-sm text-text-secondary">
              <HelpCircle size={20} className="mt-[2px] shrink-0" />
              <p className="text-body font-semibold">{item.problem}</p>
            </div>
            <div className="h-px w-full bg-primary/5" />
            <div className="flex items-start gap-sm">
              <CheckCircle2
                size={20}
                className="mt-[2px] shrink-0 text-accent"
              />
              <p className="text-body font-semibold text-primary">
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
