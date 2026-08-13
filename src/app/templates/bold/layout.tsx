import { Oswald, JetBrains_Mono } from "next/font/google";
import { BoldNavbar } from "@/components/bold/navbar";
import { BoldFooter } from "@/components/bold/footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export default function BoldLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${oswald.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col bg-stone-100 text-charcoal-950`}
    >
      <BoldNavbar />
      <main className="flex-1">{children}</main>
      <BoldFooter />
    </div>
  );
}
