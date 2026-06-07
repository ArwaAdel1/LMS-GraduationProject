/**
 * Authentication & identity domain types.
 *
 * Roles mirror the personas in prd.md (Youssef = student, Mr. Ahmed = teacher,
 * Nadia = support agent) and the role-based access described in FR-1.
 */

export type UserRole = "teacher" | "student" | "support";

export interface User {
  id: string;
  /** Full name (الاسم بالكامل). */
  name: string;
  /** Primary identifier for Egyptian users per UX-DR2 / decision UX-2. */
  phone: string;
  /** Optional — email is secondary to phone in this product. */
  email?: string;
  role: UserRole;
  /** Tenant the user belongs to (multi-tenant isolation, architecture §3). */
  tenantId?: string;
}

/** Lifecycle of the auth session, used to gate route guards without flicker. */
export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

/** Shape returned by POST /auth/login and POST /auth/register. */
export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  phone: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  phone: string;
  email?: string;
  password: string;
  role: UserRole;
}
