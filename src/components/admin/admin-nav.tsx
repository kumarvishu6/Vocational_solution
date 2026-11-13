"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, FileText, Inbox, LayoutDashboard, LogOut, Menu, Mic, Receipt, Users, X } from "lucide-react";
import { signOut } from "@/app/admin/actions";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/inbox", label: "Inbox", icon: Inbox },
  { href: "/admin/posts", label: "Blog posts", icon: FileText },
  { href: "/admin/podcast", label: "Podcast", icon: Mic },
  { href: "/admin/fees", label: "Fees", icon: Receipt },
  { href: "/admin/team", label: "Team", icon: Users },
];

export function AdminNav({ email, newCount }: { email: string; newCount: number }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));

  const nav = (
    <nav className="flex flex-1 flex-col gap-1 p-3">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
            active(l.href) ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"
          )}
        >
          <l.icon className={cn("h-4 w-4", active(l.href) ? "text-gold-300" : "")} />
          {l.label}
          {l.href === "/admin/inbox" && newCount > 0 && (
            <span className="ml-auto rounded-full bg-amaranth-500 px-2 py-0.5 text-xs font-bold text-white">{newCount}</span>
          )}
        </Link>
      ))}
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/65 hover:bg-white/5 hover:text-white"
      >
        <ExternalLink className="h-4 w-4" /> View website
      </a>
    </nav>
  );

  const footer = (
    <div className="border-t border-white/10 p-4">
      <p className="truncate text-xs text-white/50">{email}</p>
      <form action={signOut}>
        <button type="submit" className="mt-2 flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-white">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </form>
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-between bg-navy-950 px-4 py-3 lg:hidden">
        <Image src="/brand/logo-horizontal-dark.png" alt="Vocational Concepts" width={1284} height={265} className="h-8 w-auto" />
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-navy-950 lg:hidden">
          <div className="flex items-center justify-between p-4">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">Admin</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          {nav}
          {footer}
        </div>
      )}

      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-navy-950 lg:flex">
        <div className="border-b border-white/10 px-5 py-5">
          <Image src="/brand/logo-horizontal-dark.png" alt="Vocational Concepts" width={1284} height={265} className="h-9 w-auto" />
          <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-300">Website admin</p>
        </div>
        {nav}
        {footer}
      </aside>
    </>
  );
}
