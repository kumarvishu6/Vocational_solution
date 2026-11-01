import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { DemoFooter } from "@/components/demos/demo-footer";
import { DemoNav } from "@/components/demos/demo-nav";
import { MobileActionBar } from "@/components/demos/mobile-action-bar";

const display = Cormorant_Garamond({
  variable: "--demo-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--demo-body",
  subsets: ["latin"],
  display: "swap",
});

export default function CourthouseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`demo-root ${display.variable} ${body.variable} flex min-h-screen flex-col bg-white pb-[68px] lg:pb-0`}>
      <DemoNav base="/templates/courthouse" variant="courthouse" />
      <main className="flex-1">{children}</main>
      <DemoFooter base="/templates/courthouse" variant="courthouse" />
      <MobileActionBar base="/templates/courthouse" />
    </div>
  );
}
