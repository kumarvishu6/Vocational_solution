import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export const inputClass =
  "w-full rounded-md border border-navy-900/15 bg-white px-3.5 py-2.5 text-[0.95rem] text-navy-900 outline-none transition-colors placeholder:text-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-navy-900/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-heading text-3xl font-bold uppercase tracking-wide text-navy-900">{title}</h1>
        {description && <p className="mt-1.5 max-w-2xl text-sm text-ink-500">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          <Plus className="h-4 w-4" /> {action.label}
        </Link>
      )}
    </div>
  );
}

export function Field({ label, hint, htmlFor, children }: { label: string; hint?: string; htmlFor?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-ink-500">{hint}</p>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg bg-white p-6 shadow-sm ring-1 ring-navy-900/10 ${className}`}>{children}</div>;
}

export function StatusPill({ published }: { published: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        published ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-dashed border-navy-900/20 bg-white p-10 text-center">
      <p className="font-heading text-xl font-bold uppercase tracking-wide text-navy-900">{title}</p>
      <p className="mt-2 text-sm text-ink-500">{text}</p>
    </div>
  );
}

export const toLocalInput = (iso?: string | null) => {
  const d = iso ? new Date(iso) : new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
