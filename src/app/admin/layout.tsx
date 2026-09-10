import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: {
    template: "%s | Rebel Season Admin",
    default: "Dashboard | Rebel Season Admin",
  },
  description: "Executive and store management portal for The Rebel Season.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
