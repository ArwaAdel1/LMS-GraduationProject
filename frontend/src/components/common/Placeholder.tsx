import { useTranslation } from "react-i18next";

/**
 * Scaffolding stand-in for routes whose real screens are future stories.
 * Lets the full route map + guards be wired and navigated today; each instance
 * is replaced by its actual page component when that story is implemented.
 *
 * Also serves as the reference for consuming i18next: `useTranslation()` + t()
 * against the lazy-loaded "common" namespace.
 */
export default function Placeholder({ title }: { title: string }) {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
      <h1 className="text-h1 font-extrabold text-primary">{title}</h1>
      <p className="mt-sm text-body text-text-secondary">
        {t("states.underConstruction")}
      </p>
    </div>
  );
}
