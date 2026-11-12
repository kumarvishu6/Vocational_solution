import { Archivo_Narrow, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "@/components/site/cart";
import { MobileActionBar } from "@/components/site/mobile-action-bar";
import { MovingBar } from "@/components/site/moving-bar";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const display = Archivo_Narrow({
  variable: "--site-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--site-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
  display: "swap",
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${display.variable} ${serif.variable} flex min-h-screen flex-col overflow-x-clip bg-white pb-[68px] text-ink-900 lg:pb-0`}>
      <CartProvider>
        <SiteHeader />
        <MovingBar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </CartProvider>
    </div>
  );
}
