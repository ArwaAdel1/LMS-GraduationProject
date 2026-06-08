import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { landingContent } from "@/data/landing";

export default function FAQSection() {
  const { lang } = useLanguage();
  const faq = landingContent[lang].faq;

  return (
    <Section id="faq" variant="surface">
      <SectionHeading title={faq.title} subtitle={faq.subtitle} />
      <div className="mx-auto mt-2xl max-w-tablet">
        <Accordion items={faq.items} />
      </div>
    </Section>
  );
}
