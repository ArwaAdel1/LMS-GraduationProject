import { Link, Outlet } from "react-router-dom";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { ROUTES } from "@/router/routes";

/**
 * Minimal, header-less layout for login / register / password-reset
 * (navigation-shell story: "Header hidden on auth pages"). A centred card on a
 * soft background, mobile-first per UX-DR19. The language toggle stays reachable
 * in the corner; it flips sides with the document `dir`.
 */
export default function AuthLayout() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-md py-xl">
      <div className="absolute top-md ltr:right-md rtl:left-md">
        <LanguageToggle />
      </div>

      <Link
        to={ROUTES.HOME}
        className="mb-lg text-h2 font-extrabold text-primary"
      >
        Teacher AI Academy
      </Link>

      <div className="w-full max-w-mobile rounded-card bg-surface p-lg shadow-elevated">
        <Outlet />
      </div>
    </div>
  );
}
