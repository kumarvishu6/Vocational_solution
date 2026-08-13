import { Poppins } from "next/font/google";
import { MinimalNavbar } from "@/components/minimal/navbar";
import { MinimalFooter } from "@/components/minimal/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MinimalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.variable} font-poppins flex min-h-screen flex-col bg-white text-slate-900`}>
      <MinimalNavbar />
      <main className="flex-1">{children}</main>
      <MinimalFooter />
    </div>
  );
}
