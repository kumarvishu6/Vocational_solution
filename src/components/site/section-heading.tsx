import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  light = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn(center && "mx-auto text-center", "max-w-3xl", className)}>
      <p
        className={cn(
          "eyebrow-line text-xs font-semibold uppercase tracking-[0.28em]",
          light ? "text-gold-300" : "text-gold-500"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-heading mt-4 text-[2.15rem] font-bold uppercase leading-[1.04] tracking-tight sm:text-5xl",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {children && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-ink-500")}>
          {children}
        </p>
      )}
    </Reveal>
  );
}
