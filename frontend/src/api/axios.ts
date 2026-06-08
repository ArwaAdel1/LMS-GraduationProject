import axios, { AxiosError, type AxiosInstance } from "axios";
import { getToken, clearSession } from "@/lib/authStorage";
import { ROUTES } from "@/router/routes";

/**
 * Shared HTTP client for all backend calls (architecture §5 — Nest.js modular API).
 *
 * - Base URL from VITE_API_URL (defaults to "/api" for local proxying).
 * - Request interceptor attaches the JWT as a Bearer token.
 * - Response interceptor clears the session and bounces to /login on 401,
 *   so an expired/invalid token never leaves the app in a half-authenticated state.
 */

const BASE_URL = import.meta.env.VITE_API_URL ?? "/api";

export const http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 30_000,
});

// Attach JWT to every outgoing request.
http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Normalise errors and handle auth expiry centrally.
http.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      clearSession();
      // Avoid redirect loops when the 401 came from the login call itself.
      if (!window.location.pathname.startsWith(ROUTES.LOGIN)) {
        window.location.assign(ROUTES.LOGIN);
      }
    }

    return Promise.reject(error);
  },
);

export default http;
