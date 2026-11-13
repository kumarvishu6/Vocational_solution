"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import { inputClass } from "@/components/admin/ui";
import { createClient } from "@/lib/supabase/browser";
import { supabaseConfigured } from "@/lib/supabase/env";

export default function AdminLoginPage() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setBusy(true);
    setError("");
    const { error: signInError } = await createClient().auth.signInWithPassword({
      email: String(form.get("email")),
      password: String(form.get("password")),
    });
    if (signInError) {
      setError("That email and password didn't match. Please try again.");
      setBusy(false);
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-950 px-6 py-16">
      <Image src="/images/courthouse-dusk.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
      <div className="relative w-full max-w-sm rounded-lg bg-white p-8 shadow-2xl">
        <Image src="/brand/logo-horizontal.png" alt="Vocational Concepts" width={1284} height={265} className="mx-auto h-11 w-auto" />
        <h1 className="font-heading mt-8 text-center text-2xl font-bold uppercase tracking-wide text-navy-900">Website admin</h1>
        <p className="mt-1 text-center text-sm text-ink-500">Sign in to manage the website.</p>
        {!supabaseConfigured && (
          <p className="mt-6 rounded-md bg-amber-50 px-4 py-3 text-sm text-amber-800 ring-1 ring-amber-200">
            The admin isn&apos;t connected to its database on this server yet.
          </p>
        )}
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-900">
              Email
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-navy-900">
              Password
            </label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className={inputClass} />
          </div>
          {error && <p className="text-sm text-amaranth-500">{error}</p>}
          <button
            type="submit"
            disabled={busy}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-navy-900 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-60"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
