import { GraduationCap } from "lucide-react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { mockTeacher, landingContent } from "@/data/landing";

export default function TopBar() {
  const { lang } = useLanguage();
  const nav = landingContent[lang].nav;

  const links = [
    { href: "#benefits", label: nav.benefits },
    { href: "#how", label: nav.how },
    { href: "#testimonials", label: nav.testimonials },
    { href: "#faq", label: nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary/5 bg-surface shadow-card">
      <div className="mx-auto flex max-w-mobile items-center justify-between gap-md px-md py-sm sm:max-w-tablet md:max-w-desktop md:px-lg">
        <a href="#top" className="flex items-center gap-sm">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-text-on-primary">
            <GraduationCap size={20} />
          </span>
          <span className="text-h3 font-bold text-primary">
            {mockTeacher.brandName}
          </span>
        </a>

        <nav className="hidden items-center gap-lg md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-small font-semibold text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-sm">
          <LanguageToggle />
          <a href="/login" className="hidden sm:inline-flex">
            <Button
              variant="secondary"
              className="!py-[6px] !px-md text-small !border-[1.5px]"
            >
              {nav.login}
            </Button>
          </a>
          <a href="/register">
            <Button variant="primary" className="!py-[8px] !px-md text-small">
              {nav.register}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
