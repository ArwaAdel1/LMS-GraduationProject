import type { ReactNode } from "react";
import Header from "@/components/layout/Header";

/**
 * Base chrome: Header + main content slot + footer skeleton. Higher-level
 * layouts (DashboardLayout, future TeacherLayout) compose this so the header
 * and page frame stay consistent across authenticated areas.
 */
export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-desktop px-md py-lg">{children}</div>
      </main>
      <footer className="border-t border-primary/10 py-md text-center text-small text-text-secondary">
        © Teacher AI Academy
      </footer>
    </div>
  );
}
