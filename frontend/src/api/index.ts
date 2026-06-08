/**
 * API barrel.
 *
 * Re-exports the shared HTTP client and each domain service module so callers
 * can `import { authApi, http } from "@/api"`. Add future domain modules here
 * (contentApi, quizzesApi, paymentsApi, tutorApi, …) as stories land.
 */

export { default as http } from "@/api/axios";
export * as authApi from "@/api/auth";
