import type { LucideIcon } from "lucide-react";
import {
  Video,
  FileText,
  PenTool,
  ListChecks,
  Bot,
  LineChart,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import { useLanguage } from "@/contexts/LanguageContext";
import { landingContent } from "@/data/landing";

const ICON_MAP: Record<string, LucideIcon> = {
  video: Video,
  fileText: FileText,
  penTool: PenTool,
  listChecks: ListChecks,
  bot: Bot,
  lineChart: LineChart,
};

const ICON_TONE: Record<string, "accent" | "success" | "primary"> = {
  video: "accent",
  fileText: "primary",
  penTool: "success",
  listChecks: "accent",
  bot: "success",
  lineChart: "primary",
};

export default function BenefitsSection() {
  const { lang } = useLanguage();
  const benefits = landingContent[lang].benefits;

  return (
    <Section id="benefits" variant="surface">
      <SectionHeading
        eyebrow={benefits.eyebrow}
        title={benefits.title}
        subtitle={benefits.subtitle}
      />

      <div className="mt-2xl grid gap-lg sm:grid-cols-2 md:grid-cols-3 ">
        {benefits.items.map((item, i) => {
          const Icon = ICON_MAP[item.icon] ?? Video;
          const tone = ICON_TONE[item.icon] ?? "accent";
          return (
            <div
  key={i}
  className={`group flex flex-col items-center text-center gap-md rounded-card border bg-background p-lg shadow-card transition-shadow hover:shadow-elevated ${
    i === 0 ? "border-accent/20" : "border-primary/5"
  }`}
>
              <IconBadge icon={Icon} tone={tone} size="lg" />
              <h3 className="text-h3 font-semibold text-primary">{item.title}</h3>
              <p className="text-body text-text-secondary">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
