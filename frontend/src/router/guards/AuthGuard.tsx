import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/router/routes";

/**
 * Gate for protected routes. Unauthenticated users are redirected to /login,
 * preserving the attempted path in `state.from` so the login flow can return
 * them there afterwards.
 */
export default function AuthGuard() {
  const { isAuthenticated, status } = useAuth();
  const location = useLocation();

  if (status === "loading") return null; // reserved for future token revalidation

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />;
  }

  return <Outlet />;
}
