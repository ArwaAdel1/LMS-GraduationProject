import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { roleHome } from "@/router/routes";

/**
 * Inverse of AuthGuard: for pages that only make sense when logged out
 * (landing, login, register). Satisfies FR-2 — "authenticated users are never
 * shown the landing page" — by redirecting them to their role dashboard.
 */
export default function GuestGuard() {
  const { isAuthenticated, user, status } = useAuth();

  if (status === "loading") return null;

  if (isAuthenticated && user) {
    return <Navigate to={roleHome(user.role)} replace />;
  }

  return <Outlet />;
}
