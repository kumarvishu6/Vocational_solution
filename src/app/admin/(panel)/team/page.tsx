import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import type { TeamRow } from "@/components/admin/forms";
import { EmptyState, PageHeader } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/admin";

export default async function AdminTeamPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("team_members").select("*").order("sort");
  const team = (data ?? []) as TeamRow[];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Team"
        description="People on the Team page. The first person in the list is featured at the top and on the About page."
        action={{ href: "/admin/team/new", label: "Add person" }}
      />
      {team.length === 0 ? (
        <EmptyState title="No team members" text="Add the first person to show them on the Team page." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((m) => (
            <Link
              key={m.id}
              href={`/admin/team/${m.id}`}
              className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-navy-900/10 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-navy-900">
                {m.photo_url ? (
                  <Image src={m.photo_url} alt="" fill sizes="64px" className="object-cover object-top" />
                ) : (
                  <span className="font-heading absolute inset-0 flex items-center justify-center text-xl font-bold text-gold-300">
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-navy-900">{m.name}</p>
                <p className="truncate text-xs text-ink-500">{m.role}</p>
              </div>
              <Pencil className="h-4 w-4 shrink-0 text-ink-300" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
