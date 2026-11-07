import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { adminBase } from "@/lib/admin-path";
import { AdminBaseProvider } from "@/components/admin/AdminBase";

export function generateMetadata(): Metadata {
  const base = adminBase();
  return {
    title: { template: "%s · Nakpri admin", default: "Nakpri admin" },
    robots: { index: false, follow: false },
    // The admin installs as its own app, separate from the storefront.
    manifest: base ? `${base}/api/manifest` : undefined,
    icons: { icon: "/icons/admin-192.png", apple: "/icons/admin-apple-touch.png" },
    appleWebApp: { capable: true, title: "Nakpri Admin", statusBarStyle: "black-translucent" },
  };
}

export const viewport: Viewport = { themeColor: "#0f2338", viewportFit: "cover" };

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  const base = adminBase();
  if (!base) notFound();
  return <AdminBaseProvider base={base}>{children}</AdminBaseProvider>;
}
