import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Language, Direction } from "@/types/tenant";
import i18n from "@/i18n/i18n";

interface LanguageContextValue {
  lang: Language;
  dir: Direction;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Narrow i18next's free-form language string to the two we support. */
function normalize(lng: string | undefined): Language {
  return lng?.startsWith("en") ? "en" : "ar";
}

/**
 * Exposes the active language + direction to the whole app, backed by i18next.
 *
 * The public API (lang / dir / toggleLanguage) is unchanged, so existing
 * consumers (the landing page, LanguageToggle) keep working as-is; the engine
 * underneath is now i18next, and translation lookups via useTranslation() stay
 * in sync with this state through the "languageChanged" event.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => normalize(i18n.language));

  // Mirror i18next's language into local state so the tree re-renders on change.
  useEffect(() => {
    const handler = (lng: string) => setLang(normalize(lng));
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, []);

  const dir: Direction = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const toggleLanguage = () => {
    void i18n.changeLanguage(lang === "ar" ? "en" : "ar");
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
