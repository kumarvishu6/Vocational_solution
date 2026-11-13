import { notFound } from "next/navigation";
import { deleteTeamMember } from "@/app/admin/actions";
import { DeleteButton } from "@/components/admin/controls";
import { TeamForm, type TeamRow } from "@/components/admin/forms";
import { PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";

export default async function EditTeamMemberPage({ params }: PageProps<"/admin/team/[id]">) {
  const { supabase } = await requireAdmin();
  const { id } = await params;
  const { data } = await supabase.from("team_members").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const member = data as TeamRow;

  return (
    <div className="space-y-6">
      <PageHeader title={`Edit ${member.name}`} />
      <div className="flex justify-end">
        <DeleteButton
          action={deleteTeamMember}
          id={member.id}
          label="Remove from team"
          confirmText={`Remove ${member.name} from the Team page? This cannot be undone.`}
        />
      </div>
      <TeamForm member={member} nextSort={member.sort} />
    </div>
  );
}
