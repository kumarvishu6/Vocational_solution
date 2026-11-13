import { TeamForm } from "@/components/admin/forms";
import { PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";

export default async function NewTeamMemberPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("team_members").select("sort").order("sort", { ascending: false }).limit(1);
  const nextSort = (data?.[0]?.sort ?? 0) + 1;

  return (
    <div className="space-y-6">
      <PageHeader title="Add person" />
      <TeamForm nextSort={nextSort} />
    </div>
  );
}
