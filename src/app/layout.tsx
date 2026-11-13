import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { company } from "@/data/vc";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

// Vercel provides the production domain, so share links stay correct after the domain switch.
const siteUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "vocational-solution.vercel.app"}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${company.name} | ${company.tagline}`,
  description: company.intro,
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.intro,
    siteName: company.legalName,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
