import { EpisodeForm } from "@/components/admin/forms";
import { PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";

export default async function NewEpisodePage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("podcast_episodes").select("number").order("number", { ascending: false }).limit(1);
  const nextNumber = (data?.[0]?.number ?? 0) + 1;

  return (
    <div className="space-y-6">
      <PageHeader title="New episode" />
      <EpisodeForm nextNumber={nextNumber} />
    </div>
  );
}
