import { notFound } from "next/navigation";
import { deleteEpisode } from "@/app/admin/actions";
import { DeleteButton } from "@/components/admin/controls";
import { EpisodeForm } from "@/components/admin/forms";
import { PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";
import type { Episode } from "@/lib/content";

export default async function EditEpisodePage({ params }: PageProps<"/admin/podcast/[id]">) {
  const { supabase } = await requireAdmin();
  const { id } = await params;
  const { data } = await supabase.from("podcast_episodes").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const episode = data as Episode;

  return (
    <div className="space-y-6">
      <PageHeader title="Edit episode" />
      <div className="flex justify-end">
        <DeleteButton action={deleteEpisode} id={episode.id} label="Delete episode" confirmText="Delete this episode? This cannot be undone." />
      </div>
      <EpisodeForm episode={episode} nextNumber={episode.number} />
    </div>
  );
}
