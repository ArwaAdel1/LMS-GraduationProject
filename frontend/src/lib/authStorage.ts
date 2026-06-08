import type { User } from "@/types/auth";

/**
 * Low-level persistence for the auth session.
 *
 * Lives outside both the axios instance and AuthContext so the request
 * interceptor can read the token without importing React state (which would
 * create a circular dependency). AuthContext is the only writer in normal flow.
 *
 * Session persists across reloads to satisfy FR-2 (session lasts >= 30 days).
 */

const TOKEN_KEY = "taa.auth.token";
const USER_KEY = "taa.auth.user";

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function getStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export function setSession(token: string, user: User): void {
  try {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch {
    /* storage unavailable (private mode) — session stays in-memory only */
  }
}

export function clearSession(): void {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  } catch {
    /* no-op */
  }
}
