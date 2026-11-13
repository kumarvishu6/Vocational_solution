import { AdminNav } from "@/components/admin/admin-nav";
import { signOut } from "@/app/admin/actions";
import { requireAdmin } from "@/lib/admin";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const { supabase, user, isAdmin } = await requireAdmin();

  if (!isAdmin) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-sm ring-1 ring-navy-900/10">
          <h1 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy-900">No admin access</h1>
          <p className="mt-3 text-sm text-ink-500">
            {user.email} is signed in but isn&apos;t on the admin list. Ask the site manager to add this email.
          </p>
          <form action={signOut} className="mt-6">
            <button type="submit" className="h-11 rounded-md bg-navy-900 px-6 text-sm font-semibold text-white">
              Sign out
            </button>
          </form>
        </div>
      </main>
    );
  }

  const { count } = await supabase.from("inquiries").select("id", { count: "exact", head: true }).eq("status", "new");

  return (
    <div className="lg:flex">
      <AdminNav email={user.email ?? ""} newCount={count ?? 0} />
      <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-10">{children}</main>
    </div>
  );
}
