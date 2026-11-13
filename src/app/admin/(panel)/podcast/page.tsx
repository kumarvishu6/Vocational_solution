import Link from "next/link";
import { Pencil } from "lucide-react";
import { EmptyState, PageHeader, StatusPill } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";
import type { Episode } from "@/lib/content";

export default async function AdminPodcastPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("podcast_episodes").select("*").order("number", { ascending: false });
  const episodes = (data ?? []) as Episode[];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Podcast"
        description="Episodes listed on the Podcast page. Until one is published, the page shows 'coming soon'."
        action={{ href: "/admin/podcast/new", label: "New episode" }}
      />
      {episodes.length === 0 ? (
        <EmptyState title="No episodes yet" text="Add an episode with a link to where it's hosted (Spotify, Apple Podcasts, YouTube)." />
      ) : (
        <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-navy-900/10">
          {episodes.map((e) => (
            <Link
              key={e.id}
              href={`/admin/podcast/${e.id}`}
              className="flex items-center justify-between gap-4 border-b border-navy-900/10 px-5 py-4 last:border-0 hover:bg-cloud"
            >
              <div className="min-w-0">
                <p className="truncate font-semibold text-navy-900">
                  {String(e.number).padStart(2, "0")} · {e.title}
                </p>
                <p className="mt-0.5 text-xs text-ink-500">
                  {e.duration ? `${e.duration} · ` : ""}
                  {new Date(e.published_at).toLocaleDateString("en-US")}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <StatusPill published={e.published} />
                <Pencil className="h-4 w-4 text-ink-300" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
