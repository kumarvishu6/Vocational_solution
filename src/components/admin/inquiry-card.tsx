import { CalendarCheck, Mail, Phone, ShoppingBag, MessageSquare } from "lucide-react";
import { deleteInquiry, setInquiryStatus } from "@/app/admin/actions";
import { DeleteButton } from "@/components/admin/controls";

export type Inquiry = {
  id: string;
  kind: "contact" | "booking" | "order";
  reference: string | null;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string | null;
  details: Record<string, unknown>;
  status: "new" | "in_progress" | "done";
  created_at: string;
};

const kinds = {
  contact: { label: "Message", icon: MessageSquare, tone: "bg-sky-50 text-sky-700 ring-sky-200" },
  booking: { label: "Booking", icon: CalendarCheck, tone: "bg-violet-50 text-violet-700 ring-violet-200" },
  order: { label: "Order", icon: ShoppingBag, tone: "bg-amber-50 text-amber-700 ring-amber-200" },
};

const statuses = [
  { id: "new", label: "New" },
  { id: "in_progress", label: "In progress" },
  { id: "done", label: "Done" },
] as const;

const when = (iso: string) =>
  new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

type OrderItem = { name: string; qty: number; price: number };

export function InquiryCard({ inquiry }: { inquiry: Inquiry }) {
  const kind = kinds[inquiry.kind];
  const d = inquiry.details ?? {};
  const items = (d.items as OrderItem[] | undefined) ?? [];

  return (
    <article className={`rounded-lg bg-white p-5 shadow-sm ring-1 ${inquiry.status === "new" ? "ring-gold-400" : "ring-navy-900/10"}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${kind.tone}`}>
            <kind.icon className="h-3.5 w-3.5" /> {kind.label}
          </span>
          {inquiry.reference && <span className="text-xs font-semibold text-ink-500">{inquiry.reference}</span>}
          <span className="text-xs text-ink-500">{when(inquiry.created_at)}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {statuses.map((s) => (
            <form key={s.id} action={setInquiryStatus}>
              <input type="hidden" name="id" value={inquiry.id} />
              <input type="hidden" name="status" value={s.id} />
              <button
                type="submit"
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  inquiry.status === s.id ? "bg-navy-900 text-white" : "text-ink-500 hover:bg-cloud hover:text-navy-900"
                }`}
              >
                {s.label}
              </button>
            </form>
          ))}
        </div>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-navy-900">{inquiry.subject || inquiry.name}</h3>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        <span className="font-medium text-navy-900">{inquiry.name}</span>
        <a href={`mailto:${inquiry.email}`} className="flex items-center gap-1.5 text-amaranth-500 hover:underline">
          <Mail className="h-3.5 w-3.5" /> {inquiry.email}
        </a>
        {inquiry.phone && (
          <a href={`tel:${inquiry.phone}`} className="flex items-center gap-1.5 text-amaranth-500 hover:underline">
            <Phone className="h-3.5 w-3.5" /> {inquiry.phone}
          </a>
        )}
      </div>

      {inquiry.kind === "booking" && (
        <p className="mt-3 rounded-md bg-cloud px-3 py-2 text-sm text-navy-900">
          {String(d.consultation ?? "")} · {String(d.date ?? "")} at {String(d.time ?? "")}
        </p>
      )}

      {items.length > 0 && (
        <ul className="mt-3 divide-y divide-navy-900/10 rounded-md bg-cloud px-3 text-sm">
          {items.map((it) => (
            <li key={it.name} className="flex justify-between gap-4 py-2">
              <span>
                {it.name} × {it.qty}
              </span>
              <span className="font-semibold">${(it.price * it.qty).toLocaleString("en-US")}</span>
            </li>
          ))}
          <li className="flex justify-between gap-4 py-2 font-semibold text-navy-900">
            <span>Total {d.paid ? "(paid)" : "(not yet paid)"}</span>
            <span>${Number(d.total ?? 0).toLocaleString("en-US")}</span>
          </li>
        </ul>
      )}

      {inquiry.message && <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-700">{inquiry.message}</p>}

      <div className="mt-3 flex justify-end">
        <DeleteButton action={deleteInquiry} id={inquiry.id} confirmText="Delete this inquiry? This cannot be undone." />
      </div>
    </article>
  );
}
