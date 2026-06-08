import { ArrowRight, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { mockTeacher, landingContent, landingCopy } from "@/data/landing";

export default function FinalCTASection() {
  const { lang } = useLanguage();
  const finalCta = landingContent[lang].finalCta;
  const copy = landingCopy[lang];

  return (
    <Section id="subscribe" variant="dark">
      <div className="mx-auto flex max-w-tablet flex-col items-center text-center">
        <h2 className="text-h2 font-bold text-text-on-primary">
          {finalCta.title}
        </h2>
        <p className="mt-md text-h3 font-regular text-text-on-primary/80">
          {finalCta.subtitle}
        </p>

        {/* Price */}
        <div className="mt-xl flex flex-col items-center gap-xs">
          <span className="text-h1 font-extrabold text-accent">
            {copy.priceLabel(mockTeacher.chapterPrice, mockTeacher.currency)}
          </span>
          <span className="text-small text-text-on-primary/70">
            {finalCta.priceNote}
          </span>
        </div>

        <a href="#top" className="mt-xl w-full sm:w-auto">
          <Button variant="primary" fullWidth className="group sm:w-auto">
            {finalCta.button}
            <ArrowRight
              size={20}
              className="ms-sm transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
            />
          </Button>
        </a>

        <p className="mt-lg inline-flex items-center gap-xs text-small text-text-on-primary/70">
          <ShieldCheck size={16} className="text-accent" />
          {finalCta.guarantee}
        </p>
      </div>
    </Section>
  );
}
