import { Fragment } from "react";
import { GraduationCap, MessageCircle, Send, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { mockTeacher, landingContent } from "@/data/landing";

const SOCIALS = [MessageCircle, Send, Mail, Phone];

export default function Footer() {
  const { lang } = useLanguage();
  const { footer, nav } = landingContent[lang];
  const year = 2026;

  // Only the anchors this page actually has — no dead 4-column link wall.
  const links = [
    { href: "#benefits", label: nav.benefits },
    { href: "#how", label: nav.how },
    { href: "#testimonials", label: nav.testimonials },
    { href: "#faq", label: nav.faq },
    { href: "#subscribe", label: nav.cta },
  ];

  return (
    <footer className="bg-primary text-text-on-primary">
      <div className="mx-auto max-w-tablet px-md py-2xl md:px-lg">
        <div className="flex flex-col items-center gap-lg text-center">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-sm">
            <div className="flex items-center gap-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-text-on-accent">
                <GraduationCap size={20} />
              </span>
              <span className="text-h3 font-bold">{mockTeacher.brandName}</span>
            </div>
            <p className="max-w-tablet text-small text-text-on-primary/70">
              {footer.tagline}
            </p>
          </div>

          {/* Nav links — single row, dot-separated */}
          <nav className="flex flex-wrap items-center justify-center gap-x-sm gap-y-xs">
            {links.map((link, i) => (
              <Fragment key={link.href}>
                {i > 0 && (
                  <span aria-hidden className="text-text-on-primary/30">
                    ·
                  </span>
                )}
                <a
                  href={link.href}
                  className="text-small font-medium text-text-on-primary/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </Fragment>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-sm">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-text-on-primary/10 text-text-on-primary/80 transition-colors hover:bg-accent hover:text-text-on-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-xl border-t border-text-on-primary/10 pt-lg text-center text-small text-text-on-primary/60">
          © {year} {mockTeacher.brandName} — {footer.rights}
        </div>
      </div>
    </footer>
  );
}
