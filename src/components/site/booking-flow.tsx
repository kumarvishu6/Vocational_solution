"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Clock, Loader2 } from "lucide-react";
import { consultationTypes, formatPrice } from "@/data/vc";
import { cn } from "@/lib/utils";

const steps = ["Consultation", "Date", "Time", "Your details", "Review"];
const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

function nextWeekdays(count: number) {
  const days: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
  }
  return days;
}

function makeReference() {
  return `VC-${Date.now().toString(36).toUpperCase().slice(-6)}`;
}

const field =
  "w-full rounded-sm border border-navy-900/15 bg-white px-4 py-3 text-[0.95rem] text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [typeId, setTypeId] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", notes: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [reference, setReference] = useState("");

  const type = consultationTypes.find((t) => t.id === typeId);
  const dateLabel = date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) ?? "";
  const canContinue = [!!type, !!date, !!time, !!details.name && !!details.email][step] ?? true;

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!type) return;
    setStatus("sending");
    const ref = makeReference();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "booking",
          reference: ref,
          details: { consultation: type.title, length: type.length, fee: type.price, date: dateLabel, time: `${time} ET` },
          name: details.name,
          email: details.email,
          phone: details.phone,
          subject: `Booking request: ${type.title}`,
          message: `Reference ${ref}\n${type.title} (${type.length}, ${formatPrice(type.price)})\nRequested: ${dateLabel} at ${time} ET\n\n${details.notes}`,
        }),
      });
      if (!res.ok) throw new Error();
      setReference(ref);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="animate-fade-up rounded-sm bg-navy-900 p-10 text-center text-white sm:p-14">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400 text-navy-950">
          <CalendarCheck className="h-8 w-8" />
        </span>
        <p className="font-heading mt-6 text-3xl font-bold uppercase tracking-wide sm:text-4xl">Request received</p>
        <p className="mt-3 text-white/75">
          {type?.title} · {dateLabel} at {time} ET
        </p>
        <p className="mt-6 inline-block rounded-sm border border-gold-400/50 px-5 py-2 text-sm tracking-[0.2em] text-gold-300">
          Reference {reference}
        </p>
        <p className="mx-auto mt-6 max-w-md text-sm text-white/60">
          Our office will confirm your appointment by email. Paid consultations receive a secure payment link with the
          confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-sm bg-white shadow-xl shadow-navy-900/10 ring-1 ring-navy-900/10">
      <ol className="flex border-b border-navy-900/10">
        {steps.map((s, i) => (
          <li key={s} className="relative flex-1 px-2 py-4 text-center">
            <span
              className={cn(
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300",
                i < step ? "bg-gold-400 text-navy-950" : i === step ? "bg-navy-900 text-white" : "bg-cloud text-ink-500"
              )}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span className={cn("mt-2 hidden text-[0.7rem] font-semibold uppercase tracking-[0.16em] sm:block", i === step ? "text-navy-900" : "text-ink-500")}>
              {s}
            </span>
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gold-400 transition-transform duration-500",
                i <= step ? "scale-x-100" : "scale-x-0"
              )}
            />
          </li>
        ))}
      </ol>

      <form onSubmit={submit} className="p-6 sm:p-10">
        <div key={step} className="animate-fade-up">
          {step === 0 && (
            <div className="grid gap-4">
              {consultationTypes.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setTypeId(t.id)}
                  className={cn(
                    "flex flex-col gap-3 rounded-sm border p-5 text-left transition-all duration-300 sm:flex-row sm:items-center sm:justify-between",
                    typeId === t.id ? "border-navy-900 bg-navy-900 text-white shadow-lg" : "border-navy-900/15 hover:border-gold-400"
                  )}
                >
                  <span>
                    <span className="font-heading block text-xl font-bold uppercase tracking-wide">{t.title}</span>
                    <span className={cn("mt-1 block text-sm", typeId === t.id ? "text-white/70" : "text-ink-500")}>{t.description}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className={cn("font-heading block text-2xl font-bold", typeId === t.id ? "text-gold-300" : "text-navy-900")}>
                      {formatPrice(t.price)}
                    </span>
                    <span className={cn("flex items-center gap-1 text-xs uppercase tracking-[0.14em]", typeId === t.id ? "text-white/60" : "text-ink-500")}>
                      <Clock className="h-3 w-3" /> {t.length}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {nextWeekdays(10).map((d) => {
                const selected = date?.toDateString() === d.toDateString();
                return (
                  <button
                    type="button"
                    key={d.toISOString()}
                    onClick={() => setDate(d)}
                    className={cn(
                      "rounded-sm border p-4 text-center transition-all duration-300",
                      selected ? "border-navy-900 bg-navy-900 text-white shadow-lg" : "border-navy-900/15 hover:border-gold-400"
                    )}
                  >
                    <span className={cn("block text-xs uppercase tracking-[0.18em]", selected ? "text-gold-300" : "text-ink-500")}>
                      {d.toLocaleDateString("en-US", { weekday: "short" })}
                    </span>
                    <span className="font-heading block text-3xl font-bold">{d.getDate()}</span>
                    <span className={cn("block text-xs", selected ? "text-white/70" : "text-ink-500")}>
                      {d.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-sm text-ink-500">{dateLabel} · Eastern Time</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {times.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTime(t)}
                    className={cn(
                      "rounded-sm border py-4 text-sm font-semibold transition-all duration-300",
                      time === t ? "border-navy-900 bg-navy-900 text-white shadow-lg" : "border-navy-900/15 text-navy-900 hover:border-gold-400"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-5 sm:grid-cols-2">
              {(
                [
                  ["name", "Full name", "text", "name"],
                  ["email", "Email", "email", "email"],
                  ["phone", "Phone", "tel", "tel"],
                ] as const
              ).map(([key, label, type, auto]) => (
                <div key={key} className={key === "phone" ? "sm:col-span-2" : undefined}>
                  <label htmlFor={`b-${key}`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-navy-900">
                    {label}
                  </label>
                  <input
                    id={`b-${key}`}
                    type={type}
                    autoComplete={auto}
                    required={key !== "phone"}
                    value={details[key]}
                    onChange={(e) => setDetails({ ...details, [key]: e.target.value })}
                    className={field}
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="b-notes" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-navy-900">
                  About your matter
                </label>
                <textarea
                  id="b-notes"
                  rows={4}
                  value={details.notes}
                  onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                  className={field}
                />
              </div>
            </div>
          )}

          {step === 4 && type && (
            <dl className="divide-y divide-navy-900/10 rounded-sm border border-navy-900/10">
              {[
                ["Consultation", `${type.title} (${type.length})`],
                ["Fee", formatPrice(type.price)],
                ["When", `${dateLabel} at ${time} ET`],
                ["Name", details.name],
                ["Email", details.email],
                ["Phone", details.phone || "—"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 p-4 sm:flex-row sm:justify-between">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{k}</dt>
                  <dd className="text-[0.95rem] font-medium text-navy-900">{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {status === "error" && (
          <p className="mt-6 text-sm text-amaranth-500">Something went wrong. Please try again or call our office.</p>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className={cn(
              "font-heading inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy-900 transition-opacity",
              step === 0 && "pointer-events-none opacity-0"
            )}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          {step < steps.length - 1 ? (
            <button
              type="button"
              disabled={!canContinue}
              onClick={() => setStep((s) => s + 1)}
              className="font-heading group inline-flex h-12 items-center gap-2 rounded-sm bg-navy-900 px-7 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "sending"}
              className="shine font-heading inline-flex h-12 items-center gap-2 rounded-sm bg-gold-400 px-7 text-sm font-semibold uppercase tracking-[0.16em] text-navy-950 transition-colors hover:bg-gold-300"
            >
              {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              Request appointment
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
