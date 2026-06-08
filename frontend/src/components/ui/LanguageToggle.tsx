import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="
        inline-flex items-center gap-sm
        rounded-button
        border-2 border-primary/20
        px-md py-xs
        text-small font-semibold text-primary
        bg-surface
        hover:border-accent hover:text-accent
        transition-colors duration-200
        cursor-pointer
      "
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      <span className={lang === "ar" ? "opacity-50" : "opacity-100"}>EN</span>
      <span className="text-text-secondary">/</span>
      <span className={lang === "ar" ? "opacity-100" : "opacity-50"}>عربي</span>
    </button>
  );
}
