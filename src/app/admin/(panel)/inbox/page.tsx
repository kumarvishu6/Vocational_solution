import Link from "next/link";
import { InquiryCard, type Inquiry } from "@/components/admin/inquiry-card";
import { EmptyState, PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";
import { cn } from "@/lib/utils";

const filters = [
  { id: "open", label: "Open" },
  { id: "all", label: "All" },
  { id: "contact", label: "Messages" },
  { id: "booking", label: "Bookings" },
  { id: "order", label: "Orders" },
];

export default async function InboxPage({ searchParams }: PageProps<"/admin/inbox">) {
  const { supabase } = await requireAdmin();
  const { show } = await searchParams;
  const filter = typeof show === "string" && filters.some((f) => f.id === show) ? show : "open";

  let query = supabase.from("inquiries").select("*").order("created_at", { ascending: false }).limit(200);
  if (filter === "open") query = query.neq("status", "done");
  else if (filter !== "all") query = query.eq("kind", filter);
  const { data } = await query;
  const inquiries = (data ?? []) as Inquiry[];

  return (
    <div className="space-y-6">
      <PageHeader title="Inbox" description="Contact messages, booking requests, and orders from the website." />
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <Link
            key={f.id}
            href={`/admin/inbox?show=${f.id}`}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
              filter === f.id ? "bg-navy-900 text-white" : "bg-white text-ink-500 ring-1 ring-navy-900/10 hover:text-navy-900"
            )}
          >
            {f.label}
          </Link>
        ))}
      </div>
      {inquiries.length === 0 ? (
        <EmptyState title="Nothing here" text="New messages, bookings, and orders from the website will appear here." />
      ) : (
        <div className="space-y-4">
          {inquiries.map((i) => (
            <InquiryCard key={i.id} inquiry={i} />
          ))}
        </div>
      )}
    </div>
  );
}
