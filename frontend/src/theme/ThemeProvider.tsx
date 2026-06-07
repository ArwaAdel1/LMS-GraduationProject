import type { ReactNode } from "react";
import "@/theme/variables.css";

/**
 * Owns the application theme. Today it simply loads the static design-token
 * CSS variables (variables.css) and renders its children.
 *
 * It exists as the single seam for runtime theming: teacher brand colors
 * (FR-4 — "brand colors reflect immediately on student-facing pages") will be
 * applied here by overriding the relevant --color-* custom properties on a
 * scope element, without touching Tailwind's build-time config.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
