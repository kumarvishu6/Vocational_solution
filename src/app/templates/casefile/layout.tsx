import { Plus_Jakarta_Sans } from "next/font/google";
import { DemoFooter } from "@/components/demos/demo-footer";
import { DemoNav } from "@/components/demos/demo-nav";
import { MobileActionBar } from "@/components/demos/mobile-action-bar";

const font = Plus_Jakarta_Sans({
  variable: "--demo-body",
  subsets: ["latin"],
  display: "swap",
});

export default function CaseFileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`demo-root ${font.variable} flex min-h-screen flex-col bg-white pb-[68px] lg:pb-0 [--demo-display:var(--demo-body)]`}
    >
      <DemoNav base="/templates/casefile" variant="casefile" />
      <main className="flex-1 pt-6">{children}</main>
      <DemoFooter base="/templates/casefile" variant="casefile" />
      <MobileActionBar base="/templates/casefile" />
    </div>
  );
}
