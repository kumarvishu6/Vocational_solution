import { Archivo_Narrow } from "next/font/google";
import { Marquee } from "@/components/ui/marquee";
import { MobileActionBar } from "@/components/site/mobile-action-bar";
import { movingBarItems } from "@/data/vc";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const display = Archivo_Narrow({
  variable: "--site-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} flex min-h-screen flex-col overflow-x-clip bg-white pb-[68px] text-ink-900 lg:pb-0`}>
      <SiteHeader />
      <div className="bg-amaranth-500 py-3">
        <Marquee
          items={movingBarItems}
          itemClassName="font-heading text-gold-300! text-[0.95rem]! font-semibold! tracking-[0.2em]!"
          dotClassName="bg-gold-400!"
        />
      </div>
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}
