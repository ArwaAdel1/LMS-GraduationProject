import { useContext } from "react";
import { AuthContext, type AuthContextValue } from "@/contexts/AuthContext";

/**
 * Access the current auth session. Must be used within <AuthProvider>.
 *
 * Example:
 *   const { user, isAuthenticated, signIn, signOut } = useAuth();
 */
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
