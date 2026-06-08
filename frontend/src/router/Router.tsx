import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import AuthGuard from "@/router/guards/AuthGuard";
import GuestGuard from "@/router/guards/GuestGuard";
import RoleGuard from "@/router/guards/RoleGuard";
import AuthLayout from "@/components/layout/AuthLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Placeholder from "@/components/common/Placeholder";
import LandingPage from "@/pages/LandingPage";

/**
 * Application route tree.
 *
 * Three top-level zones:
 *   1. Guest-only (GuestGuard): landing + auth pages — redirect to dashboard if logged in.
 *   2. Protected (AuthGuard): role-scoped dashboards via nested RoleGuard layers.
 *   3. Catch-all 404.
 *
 * Screens not yet built render <Placeholder>; swap each for its real page
 * component as the corresponding story is implemented — the guard/layout
 * wiring stays untouched.
 */
export const router = createBrowserRouter([
  // ---- Public / guest-only ----------------------------------------------
  {
    element: <GuestGuard />,
    children: [
      { path: ROUTES.HOME, element: <LandingPage /> },
      {
        element: <AuthLayout />,
        children: [
          { path: ROUTES.LOGIN, element: <Placeholder title="Login" /> },
          { path: ROUTES.REGISTER, element: <Placeholder title="Register" /> },
          {
            path: ROUTES.FORGOT_PASSWORD,
            element: <Placeholder title="Reset Password" />,
          },
        ],
      },
    ],
  },

  // ---- Protected ----------------------------------------------------------
  {
    element: <AuthGuard />,
    children: [
      // Teacher area (desktop-first)
      {
        element: <RoleGuard allow="teacher" />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: ROUTES.TEACHER.DASHBOARD,
                element: <Placeholder title="Teacher Dashboard" />,
              },
              {
                path: ROUTES.TEACHER.CONTENT,
                element: <Placeholder title="Content Manager" />,
              },
              {
                path: ROUTES.TEACHER.QUIZZES,
                element: <Placeholder title="Quiz Generator" />,
              },
              {
                path: ROUTES.TEACHER.STUDENTS,
                element: <Placeholder title="Students" />,
              },
              {
                path: ROUTES.TEACHER.PROFILE,
                element: <Placeholder title="Teacher Profile" />,
              },
            ],
          },
        ],
      },

      // Student area (mobile-first)
      {
        element: <RoleGuard allow="student" />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: ROUTES.STUDENT.DASHBOARD,
                element: <Placeholder title="My Courses" />,
              },
              {
                path: ROUTES.STUDENT.PROFILE,
                element: <Placeholder title="Student Profile" />,
              },
              {
                path: ROUTES.STUDENT.LESSON,
                element: <Placeholder title="Lesson" />,
              },
              {
                path: ROUTES.STUDENT.PAYMENT,
                element: <Placeholder title="Checkout" />,
              },
              {
                path: ROUTES.STUDENT.QUIZ,
                element: <Placeholder title="Quiz" />,
              },
              {
                path: ROUTES.STUDENT.QUIZ_RESULT,
                element: <Placeholder title="Quiz Results" />,
              },
              {
                path: ROUTES.STUDENT.AI_TUTOR,
                element: <Placeholder title="AI Tutor" />,
              },
            ],
          },
        ],
      },

      // Support agent area (Admin Panel)
      {
        element: <RoleGuard allow="support" />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: ROUTES.SUPPORT.PROMO_CODES,
                element: <Placeholder title="Promo Code Manager" />,
              },
            ],
          },
        ],
      },
    ],
  },

  // ---- 404 ----------------------------------------------------------------
  { path: ROUTES.NOT_FOUND, element: <Placeholder title="404" /> },
]);
