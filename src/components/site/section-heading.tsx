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
          "eyebrow-line text-[0.68rem] font-semibold uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.28em]",
          light ? "text-gold-300" : "text-gold-500"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-heading mt-3 text-[1.7rem] font-bold uppercase leading-[1.1] tracking-[0.01em] sm:mt-4 sm:text-4xl lg:text-5xl lg:leading-[1.04]",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {children && (
        <p className={cn("mt-4 text-[0.95rem] leading-relaxed sm:mt-5 sm:text-lg", light ? "text-white/70" : "text-ink-500")}>
          {children}
        </p>
      )}
    </Reveal>
  );
}
