import type { UserRole } from "@/types/auth";

/**
 * Central route registry — the single source of truth for all paths.
 *
 * Components and guards reference these constants instead of hardcoding
 * strings, so a path change happens in exactly one place. Grouped by audience
 * (public / teacher / student / support) to mirror the role-scoped route tree
 * defined in Router.tsx.
 */

export const ROUTES = {
  // Public
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",

  // Teacher (desktop-first — UX-DR12 / UX-DR19)
  TEACHER: {
    DASHBOARD: "/dashboard/teacher",
    CONTENT: "/dashboard/teacher/content",
    QUIZZES: "/dashboard/teacher/quizzes",
    STUDENTS: "/dashboard/teacher/students",
    PROFILE: "/dashboard/teacher/profile",
  },

  // Student (mobile-first — UX-DR19)
  STUDENT: {
    DASHBOARD: "/dashboard/student",
    PROFILE: "/dashboard/student/profile",
    LESSON: "/lessons/:lessonId",
    PAYMENT: "/checkout/:chapterId",
    QUIZ: "/quizzes/:quizId",
    QUIZ_RESULT: "/quizzes/:quizId/result",
    AI_TUTOR: "/tutor",
  },

  // Support agent (Admin Panel — UJ-3 / FR-18)
  SUPPORT: {
    PROMO_CODES: "/support/promo-codes",
  },

  NOT_FOUND: "*",
} as const;

/**
 * Where a freshly authenticated user (or anyone hitting a guest-only page while
 * logged in) should land, based on role. Used by AuthGuard / GuestGuard / login.
 */
export function roleHome(role: UserRole): string {
  switch (role) {
    case "teacher":
      return ROUTES.TEACHER.DASHBOARD;
    case "support":
      return ROUTES.SUPPORT.PROMO_CODES;
    case "student":
    default:
      return ROUTES.STUDENT.DASHBOARD;
  }
}

/** Build a concrete path from a parameterised template, e.g. LESSON -> /lessons/42. */
export function buildPath(
  template: string,
  params: Record<string, string | number>,
): string {
  return template.replace(/:([A-Za-z0-9_]+)/g, (_, key: string) => {
    const value = params[key];
    if (value === undefined) {
      throw new Error(`buildPath: missing param "${key}" for "${template}"`);
    }
    return String(value);
  });
}
