import Section from "@/components/ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { landingContent } from "@/data/landing";

export default function MetricsSection() {
  const { lang } = useLanguage();
  const metrics = landingContent[lang].metrics;

  return (
    <Section variant="dark">
      <h2 className="mx-auto max-w-tablet text-center text-h2 font-bold text-text-on-primary">
        {metrics.title}
      </h2>

      <div className="mt-2xl grid grid-cols-2 gap-lg md:grid-cols-4">
        {metrics.items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-card bg-text-on-primary/5 px-md py-lg text-center"
          >
            <span className="text-h1 font-extrabold text-accent">
              {item.prefix ?? ""}
              {item.value}
              {item.suffix ?? ""}
            </span>
            <span className="mt-sm text-small font-medium text-text-on-primary/80">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
