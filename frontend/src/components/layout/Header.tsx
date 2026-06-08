import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES } from "@/router/routes";

/**
 * App header used inside authenticated layouts (UX-DR12 nav, navigation-shell
 * story). Logo sits at the inline-start edge and flips automatically with the
 * document `dir`. Not rendered on the landing page (which has its own TopBar)
 * or on auth pages (which use the minimal AuthLayout).
 */
export default function Header() {
  const { user, signOut } = useAuth();
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  return (
    <header className="sticky top-0 z-40 bg-primary text-text-on-primary shadow-elevated">
      <div className="mx-auto flex h-16 max-w-desktop items-center justify-between px-md">
        <Link to={ROUTES.HOME} className="text-h3 font-extrabold tracking-tight">
          Teacher AI Academy
        </Link>

        <div className="flex items-center gap-sm">
          <LanguageToggle />
          {user && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-xs rounded-button px-md py-xs text-small font-semibold text-text-on-primary/90 hover:bg-white/10 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>{lang === "ar" ? "تسجيل الخروج" : "Logout"}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
