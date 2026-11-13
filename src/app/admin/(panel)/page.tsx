import Link from "next/link";
import { ArrowRight, FileText, Inbox, Mic, Receipt, Users } from "lucide-react";
import { InquiryCard, type Inquiry } from "@/components/admin/inquiry-card";
import { EmptyState, PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";

export default async function AdminDashboard() {
  const { supabase, user } = await requireAdmin();

  const count = async (table: string) =>
    (await supabase.from(table).select("id", { count: "exact", head: true })).count ?? 0;

  const [newInquiries, posts, episodes, fees, team, recent] = await Promise.all([
    supabase
      .from("inquiries")
      .select("id", { count: "exact", head: true })
      .eq("status", "new")
      .then((r) => r.count ?? 0),
    count("posts"),
    count("podcast_episodes"),
    count("products"),
    count("team_members"),
    supabase.from("inquiries").select("*").neq("status", "done").order("created_at", { ascending: false }).limit(5),
  ]);

  const tiles = [
    { href: "/admin/inbox", label: "New in inbox", value: newInquiries, icon: Inbox },
    { href: "/admin/posts", label: "Blog posts", value: posts, icon: FileText },
    { href: "/admin/podcast", label: "Podcast episodes", value: episodes, icon: Mic },
    { href: "/admin/fees", label: "Fees", value: fees, icon: Receipt },
    { href: "/admin/team", label: "Team members", value: team, icon: Users },
  ];

  return (
    <div className="space-y-8">
      <PageHeader title="Welcome back" description={`Signed in as ${user.email}. Changes you save appear on the website straight away.`} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {tiles.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group rounded-lg bg-white p-5 shadow-sm ring-1 ring-navy-900/10 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <t.icon className="h-5 w-5 text-gold-500" />
            <p className="font-heading mt-4 text-4xl font-bold text-navy-900">{t.value}</p>
            <p className="mt-1 flex items-center justify-between text-sm font-medium text-ink-500">
              {t.label} <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </p>
          </Link>
        ))}
      </div>
      <div>
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-navy-900">Needs attention</h2>
        <div className="mt-4 space-y-4">
          {(recent.data ?? []).length === 0 ? (
            <EmptyState title="All caught up" text="There are no open messages, bookings, or orders." />
          ) : (
            (recent.data as Inquiry[]).map((i) => <InquiryCard key={i.id} inquiry={i} />)
          )}
        </div>
      </div>
    </div>
  );
}
