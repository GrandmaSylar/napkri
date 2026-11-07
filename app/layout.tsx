import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nakpri Laptops and Accessories — Computers, Laptops & Tech in Ghana",
  description:
    "Dealers of premium laptops, computers, 4K monitors, high-speed storage, and tech accessories. Same-day delivery in Greater Accra, nationwide across Ghana.",
  authors: [{ name: "Nakpri" }],
  creator: "Nakpri",
  manifest: "/manifest.webmanifest",
  applicationName: "Nakpri Laptops",
  icons: { apple: "/icons/apple-touch-icon.png" },
  appleWebApp: { capable: true, title: "Nakpri", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#0f2338",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
