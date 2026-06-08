import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { router } from "@/router/Router";

/**
 * App composition root: providers wrap the router so every route element,
 * layout, and guard can read language + auth context.
 *
 * FR-2 ("authenticated users never see the landing page") is enforced by
 * GuestGuard inside the route tree, not here.
 */
export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
