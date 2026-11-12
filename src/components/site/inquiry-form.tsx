"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/data/vc";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-sm border border-navy-900/15 bg-white px-4 py-3 text-[0.95rem] text-navy-900 outline-none transition-colors placeholder:text-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-navy-900";

export function InquiryForm({ defaultTopic = "" }: { defaultTopic?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="animate-fade-up rounded-sm bg-navy-900 p-10 text-center text-white">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold-300" />
        <p className="font-heading mt-5 text-3xl font-bold uppercase tracking-wide">Message received</p>
        <p className="mt-3 text-white/75">Thank you. Our office will be in touch as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>
          Full name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="subject" className={label}>
          Service of interest
        </label>
        <select id="subject" name="subject" required defaultValue={defaultTopic ? "Shop inquiry" : ""} className={field}>
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Shop inquiry</option>
          <option>Other / not sure</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          defaultValue={defaultTopic ? `I'd like to purchase: ${defaultTopic}` : ""}
          placeholder="Tell us about your matter, timeline, and the vocational questions at issue."
          className={cn(field, "resize-y")}
        />
      </div>
      {status === "error" && <p className="text-sm text-amaranth-500 sm:col-span-2">{error}</p>}
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">Inquiries are held in confidence whether or not we are retained.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="shine font-heading inline-flex h-13 items-center justify-center gap-2 rounded-sm bg-navy-900 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy-800 disabled:opacity-70"
        >
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Send message
        </button>
      </div>
    </form>
  );
}
