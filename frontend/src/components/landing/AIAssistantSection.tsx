import { Bot, CheckCircle2, FileText, Send } from "lucide-react";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { landingContent } from "@/data/landing";

export default function AIAssistantSection() {
  const { lang } = useLanguage();
  const ai = landingContent[lang].ai;

  return (
    <Section variant="light">
      <div className="grid items-center gap-2xl md:grid-cols-2 md:gap-xl">
        {/* Copy */}
        <div className="flex flex-col">
          <h2 className="text-h2 font-bold text-primary">{ai.title}</h2>
          <p className="mt-md text-h3 font-regular text-text-secondary">
            {ai.subtitle}
          </p>
          <ul className="mt-lg flex flex-col gap-md">
            {ai.points.map((point) => (
              <li key={point} className="flex items-start gap-sm">
                <CheckCircle2
                  size={20}
                  className="mt-[2px] shrink-0 text-accent"
                />
                <span className="text-body font-medium text-primary">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat preview — solid surfaces, no glow/gradient/typewriter */}
        <div className="overflow-hidden rounded-card bg-surface shadow-elevated">
          {/* Header */}
          <div className="flex items-center gap-sm bg-primary px-md py-sm text-text-on-primary">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-text-on-primary/10 text-accent">
              <Bot size={20} />
            </span>
            <div className="flex flex-col">
              <span className="text-body font-bold">{ai.title}</span>
              <span className="text-caption text-text-on-primary/70">
                {ai.chat.remaining}
              </span>
            </div>
          </div>

          {/* Thread — student end-aligned, AI start-aligned (flips in RTL) */}
          <div className="flex flex-col gap-md p-md">
            <div className="ms-auto max-w-[80%] rounded-card rounded-se-sm bg-accent px-md py-sm text-body font-medium text-text-on-accent">
              {ai.chat.question}
            </div>

            <div className="me-auto max-w-[88%]">
              <div className="rounded-card rounded-ss-sm bg-background px-md py-sm text-body text-primary">
                {ai.chat.answer}
              </div>
              <Badge className="mt-sm gap-xs bg-success/10 text-success">
                <FileText size={13} />
                {ai.chat.citation}
              </Badge>
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-sm border-t border-primary/5 p-md">
            <div className="flex h-[var(--input-height)] flex-1 items-center rounded-input border-[1.5px] border-[#D1D5DB] px-md text-small text-text-secondary">
              <span className="truncate">{ai.chat.placeholder}</span>
            </div>
            <span className="inline-flex h-[var(--input-height)] w-[var(--input-height)] shrink-0 items-center justify-center rounded-input bg-accent text-text-on-accent">
              <Send size={18} className="rtl:-scale-x-100" />
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
