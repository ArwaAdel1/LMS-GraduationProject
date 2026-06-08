import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

/**
 * i18next configuration (STORY-2).
 *
 * - Arabic is the default and fallback language (RTL-first product).
 * - Translation files live in src/i18n/<lng>/<ns>.json and are **lazy-loaded**
 *   on demand via dynamic import — feature namespaces (auth, teacher, student,
 *   quiz…) are fetched only when a screen that needs them mounts.
 * - Suspense is disabled so components can render without a Suspense boundary;
 *   a key briefly resolves to itself until its namespace finishes loading.
 *
 * The visible language state is exposed app-wide through LanguageContext, which
 * is backed by this instance (toggle → i18n.changeLanguage).
 */

export const DEFAULT_LANGUAGE = "ar";
export const SUPPORTED_LANGUAGES = ["ar", "en"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

void i18n
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./${language}/${namespace}.json`),
    ),
  )
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false }, // React already escapes
    react: { useSuspense: false },
  });

export default i18n;
