"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Keeps longer copy on the page but folded away until the visitor asks for it. */
export function Expandable({
  label,
  openLabel = "Show less",
  light = false,
  children,
}: {
  label: string;
  openLabel?: string;
  light?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={cn("grid transition-all duration-500 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">{children}</div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cn(
          "font-heading mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors",
          light ? "text-gold-300 hover:text-white" : "text-amaranth-500 hover:text-navy-900"
        )}
      >
        {open ? openLabel : label}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} />
      </button>
    </div>
  );
}
