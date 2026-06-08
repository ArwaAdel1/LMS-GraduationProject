import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { AuthStatus, User } from "@/types/auth";
import {
  clearSession,
  getStoredUser,
  getToken,
  setSession,
} from "@/lib/authStorage";
import * as authApi from "@/api/auth";

export interface AuthContextValue {
  user: User | null;
  status: AuthStatus;
  isAuthenticated: boolean;
  /** Persist a session after a successful login/register API call. */
  signIn: (token: string, user: User) => void;
  /** Clear the session locally and notify the backend (best-effort). */
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Holds the authenticated session for the whole app.
 *
 * Hydrates synchronously from localStorage on first render so route guards
 * never flash the wrong screen. The `loading` status exists for a future
 * token-revalidation step (e.g. GET /auth/me) and is safe to branch on now.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  // Synchronous hydration — token + user are read together so they stay in sync.
  const [user, setUser] = useState<User | null>(() =>
    getToken() ? getStoredUser() : null,
  );

  const signIn = useCallback((token: string, nextUser: User) => {
    setSession(token, nextUser);
    setUser(nextUser);
  }, []);

  const signOut = useCallback(async () => {
    await authApi.logout();
    clearSession();
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    const isAuthenticated = user !== null;
    return {
      user,
      status: isAuthenticated ? "authenticated" : "unauthenticated",
      isAuthenticated,
      signIn,
      signOut,
    };
  }, [user, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
