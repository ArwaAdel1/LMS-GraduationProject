import { Outlet } from "react-router-dom";
import AppShell from "@/components/layout/AppShell";

/**
 * Layout for authenticated dashboard routes (teacher + student). Renders the
 * shared AppShell chrome around the matched child route via <Outlet>.
 *
 * The teacher-specific sidebar (UX-DR12 / TeacherLayout story) layers on top of
 * this in a later sprint; keeping a single shell now avoids duplicating chrome.
 */
export default function DashboardLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
