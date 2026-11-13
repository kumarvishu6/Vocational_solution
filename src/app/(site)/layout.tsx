import { Archivo_Narrow, Libre_Caslon_Text } from "next/font/google";
import { CartProvider } from "@/components/site/cart";
import { MobileActionBar } from "@/components/site/mobile-action-bar";
import { MovingBar } from "@/components/site/moving-bar";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getProducts } from "@/lib/content";

// Pages are regenerated when the admin saves; this is a safety net.
export const revalidate = 300;

const display = Archivo_Narrow({
  variable: "--site-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const serif = Libre_Caslon_Text({
  variable: "--site-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const products = await getProducts();

  return (
    <div className={`${display.variable} ${serif.variable} flex min-h-screen flex-col overflow-x-clip bg-white pb-[68px] text-ink-900 lg:pb-0`}>
      <CartProvider products={products}>
        <SiteHeader />
        <MovingBar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </CartProvider>
    </div>
  );
}
