import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { deletePost } from "@/app/admin/actions";
import { DeleteButton } from "@/components/admin/controls";
import { PostForm } from "@/components/admin/forms";
import { PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";
import { postCategories, type Post } from "@/lib/content";

export default async function EditPostPage({ params }: PageProps<"/admin/posts/[id]">) {
  const { supabase } = await requireAdmin();
  const { id } = await params;
  const { data } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const post = data as Post;

  return (
    <div className="space-y-6">
      <PageHeader title="Edit post" />
      <div className="flex flex-wrap items-center justify-between gap-3">
        {post.published ? (
          <Link href={`/resources/${post.slug}`} target="_blank" className="flex items-center gap-1.5 text-sm font-semibold text-amaranth-500 hover:underline">
            <ExternalLink className="h-4 w-4" /> View on website
          </Link>
        ) : (
          <span className="text-sm text-ink-500">Draft: not visible on the website yet.</span>
        )}
        <DeleteButton action={deletePost} id={post.id} label="Delete post" confirmText="Delete this post? This cannot be undone." />
      </div>
      <PostForm post={post} categories={postCategories} />
    </div>
  );
}
