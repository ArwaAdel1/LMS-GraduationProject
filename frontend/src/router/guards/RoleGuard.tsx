import { Navigate, Outlet } from "react-router-dom";
import type { UserRole } from "@/types/auth";
import { useAuth } from "@/hooks/useAuth";
import { roleHome } from "@/router/routes";

interface RoleGuardProps {
  /** Roles permitted to view the nested routes. */
  allow: UserRole | UserRole[];
}

/**
 * Restricts a route subtree to specific roles (FR-1: teachers and students
 * cannot access each other's areas). A logged-in user with the wrong role is
 * sent to their own home rather than shown a forbidden page. Assumes it is
 * nested inside <AuthGuard>, so the user is already authenticated.
 */
export default function RoleGuard({ allow }: RoleGuardProps) {
  const { user } = useAuth();
  const allowed = Array.isArray(allow) ? allow : [allow];

  if (!user || !allowed.includes(user.role)) {
    return <Navigate to={user ? roleHome(user.role) : "/login"} replace />;
  }

  return <Outlet />;
}
