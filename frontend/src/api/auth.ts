import http from "@/api/axios";
import type {
  AuthResponse,
  LoginCredentials,
  RegisterPayload,
} from "@/types/auth";

/**
 * Auth API — maps to AuthModule endpoints in architecture §5.
 *
 * Reference implementation establishing the service-module pattern that every
 * future domain client (content, quizzes, payments, tutor…) should follow:
 * a thin, typed wrapper around the shared `http` instance returning `response.data`.
 */

export async function login(
  credentials: LoginCredentials,
): Promise<AuthResponse> {
  const { data } = await http.post<AuthResponse>("/auth/login", credentials);
  return data;
}

export async function register(
  payload: RegisterPayload,
): Promise<AuthResponse> {
  const { data } = await http.post<AuthResponse>("/auth/register", payload);
  return data;
}

/** Step 1 of phone-OTP reset (UX-DR3): request an OTP for the given phone. */
export async function requestPasswordReset(phone: string): Promise<void> {
  await http.post("/auth/reset-password", { phone });
}

/** Step 3 of phone-OTP reset: submit OTP + new password. */
export async function confirmPasswordReset(payload: {
  phone: string;
  otp: string;
  password: string;
}): Promise<void> {
  await http.post("/auth/reset-password/confirm", payload);
}

/** Best-effort server-side logout; client clears its own session regardless. */
export async function logout(): Promise<void> {
  try {
    await http.post("/auth/logout");
  } catch {
    /* logout is idempotent client-side; ignore network/401 errors */
  }
}
