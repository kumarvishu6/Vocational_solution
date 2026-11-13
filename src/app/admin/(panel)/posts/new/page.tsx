import { PostForm } from "@/components/admin/forms";
import { PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";
import { postCategories } from "@/lib/content";

export default async function NewPostPage() {
  await requireAdmin();
  return (
    <div className="space-y-6">
      <PageHeader title="New post" description="Save as a draft first if you're not ready to publish." />
      <PostForm categories={postCategories} />
    </div>
  );
}
