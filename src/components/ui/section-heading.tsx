import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]",
            align === "center" && "justify-center",
            light ? "text-gold-300" : "text-gold-600"
          )}
        >
          <span className={cn("h-px w-8", light ? "bg-gold-300" : "bg-gold-500")} />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl leading-tight text-balance sm:text-4xl",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-white/70" : "text-ink-500")}>
          {description}
        </p>
      )}
    </div>
  );
}
