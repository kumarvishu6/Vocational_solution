import Link from "next/link";
import { Pencil } from "lucide-react";
import { EmptyState, PageHeader, StatusPill } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";
import type { Post } from "@/lib/content";

export default async function AdminPostsPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("posts").select("*").order("published_at", { ascending: false });
  const posts = (data ?? []) as Post[];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Blog posts"
        description="Articles and guides shown on the Resources page."
        action={{ href: "/admin/posts/new", label: "New post" }}
      />
      {posts.length === 0 ? (
        <EmptyState title="No posts yet" text="Write the first article and it will appear on the Resources page once published." />
      ) : (
        <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-navy-900/10">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/admin/posts/${p.id}`}
              className="flex items-center justify-between gap-4 border-b border-navy-900/10 px-5 py-4 last:border-0 hover:bg-cloud"
            >
              <div className="min-w-0">
                <p className="truncate font-semibold text-navy-900">{p.title}</p>
                <p className="mt-0.5 text-xs text-ink-500">
                  {p.category} · {new Date(p.published_at).toLocaleDateString("en-US")}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <StatusPill published={p.published} />
                <Pencil className="h-4 w-4 text-ink-300" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
