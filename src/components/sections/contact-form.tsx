"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { contactSubjects } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-gold-400/30 bg-navy-950/[0.03] px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-500" />
        <h3 className="mt-4 font-serif text-xl text-navy-950">Thank you — message received</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          We respond to all inquiries within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-gold-600 hover:text-gold-500"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2" noValidate>
      <Field label="Full Name" name="name" required autoComplete="name" />
      <Field label="Email Address" name="email" type="email" required autoComplete="email" />
      <Field label="Mobile Number" name="phone" type="tel" autoComplete="tel" />
      <Field label="Name of Your Case Attorney" name="attorney" />
      <Field label="Name of Your Law Firm" name="lawFirm" className="sm:col-span-2" />

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-navy-950">
          Subject <span className="text-gold-600">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="rounded-lg border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors focus:border-gold-400"
        >
          <option value="" disabled>
            Select a subject
          </option>
          {contactSubjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-navy-950">
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your case or inquiry..."
          className="resize-none rounded-lg border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors focus:border-gold-400 placeholder:text-ink-300"
        />
      </div>

      {status === "error" && error && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-medium tracking-wide text-navy-950 transition-colors hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <label htmlFor={name} className="text-sm font-medium text-navy-950">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-lg border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition-colors focus:border-gold-400 placeholder:text-ink-300"
      />
    </div>
  );
}
