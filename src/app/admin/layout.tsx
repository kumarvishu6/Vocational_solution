import type { Metadata } from "next";
import { Archivo_Narrow } from "next/font/google";

const display = Archivo_Narrow({
  variable: "--site-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin | Vocational Concepts",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} min-h-screen bg-cloud text-ink-900`}>{children}</div>;
}
