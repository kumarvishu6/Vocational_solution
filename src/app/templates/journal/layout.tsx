import { Instrument_Serif, Source_Serif_4 } from "next/font/google";
import { DemoFooter } from "@/components/demos/demo-footer";
import { DemoNav } from "@/components/demos/demo-nav";
import { MobileActionBar } from "@/components/demos/mobile-action-bar";

const display = Instrument_Serif({
  variable: "--demo-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const body = Source_Serif_4({
  variable: "--demo-body",
  subsets: ["latin"],
  display: "swap",
});

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`demo-root ${display.variable} ${body.variable} flex min-h-screen flex-col bg-white pb-[68px] lg:pb-0`}>
      <DemoNav base="/templates/journal" variant="journal" />
      <main className="flex-1">{children}</main>
      <DemoFooter base="/templates/journal" variant="journal" />
      <MobileActionBar base="/templates/journal" />
    </div>
  );
}
