"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin, slugify } from "@/lib/admin";

export type FormState = { error?: string; saved?: boolean };

const text = (form: FormData, key: string) => String(form.get(key) ?? "").trim();
const optional = (form: FormData, key: string) => text(form, key) || null;

/** Every save regenerates the public pages so changes show straight away. */
function refreshSite() {
  revalidatePath("/", "layout");
}

async function adminClient() {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) throw new Error("This account is not an admin.");
  return supabase;
}

export async function signOut() {
  const { supabase } = await requireAdmin();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

// --- Blog posts --------------------------------------------------------------

export async function savePost(_: FormState, form: FormData): Promise<FormState> {
  const supabase = await adminClient();
  const id = text(form, "id");
  const title = text(form, "title");
  if (!title) return { error: "Please add a title." };

  const row = {
    title,
    slug: slugify(text(form, "slug") || title),
    category: text(form, "category") || "Articles",
    excerpt: text(form, "excerpt"),
    body: text(form, "body"),
    cover_url: optional(form, "cover_url"),
    published: form.get("published") === "on",
    published_at: text(form, "published_at") ? new Date(text(form, "published_at")).toISOString() : new Date().toISOString(),
  };

  const { error } = id
    ? await supabase.from("posts").update(row).eq("id", id)
    : await supabase.from("posts").insert(row);
  if (error) return { error: error.code === "23505" ? "Another post already uses that web address." : error.message };

  refreshSite();
  redirect("/admin/posts");
}

export async function deletePost(form: FormData) {
  const supabase = await adminClient();
  await supabase.from("posts").delete().eq("id", text(form, "id"));
  refreshSite();
  redirect("/admin/posts");
}

// --- Podcast episodes --------------------------------------------------------

export async function saveEpisode(_: FormState, form: FormData): Promise<FormState> {
  const supabase = await adminClient();
  const id = text(form, "id");
  const title = text(form, "title");
  const number = Number(text(form, "number"));
  if (!title) return { error: "Please add a title." };
  if (!Number.isInteger(number) || number < 1) return { error: "Episode number must be 1 or higher." };

  const row = {
    number,
    title,
    description: text(form, "description"),
    duration: optional(form, "duration"),
    listen_url: optional(form, "listen_url"),
    published: form.get("published") === "on",
    published_at: text(form, "published_at") ? new Date(text(form, "published_at")).toISOString() : new Date().toISOString(),
  };

  const { error } = id
    ? await supabase.from("podcast_episodes").update(row).eq("id", id)
    : await supabase.from("podcast_episodes").insert(row);
  if (error) return { error: error.message };

  refreshSite();
  redirect("/admin/podcast");
}

export async function deleteEpisode(form: FormData) {
  const supabase = await adminClient();
  await supabase.from("podcast_episodes").delete().eq("id", text(form, "id"));
  refreshSite();
  redirect("/admin/podcast");
}

// --- Fees (products) ---------------------------------------------------------

export async function saveProduct(_: FormState, form: FormData): Promise<FormState> {
  const supabase = await adminClient();
  const id = text(form, "id");
  const name = text(form, "name");
  if (!name) return { error: "Please add a name." };

  const priceText = text(form, "price").replace(/[$,]/g, "");
  const price = priceText === "" ? null : Number(priceText);
  if (price !== null && (!Number.isFinite(price) || price < 0)) return { error: "Price must be a number, or empty for 'contact for pricing'." };

  const row = {
    name,
    category: text(form, "category"),
    detail: optional(form, "detail"),
    price,
    sort: Number(text(form, "sort")) || 0,
    active: form.get("active") === "on",
  };

  const { error } = id
    ? await supabase.from("products").update(row).eq("id", id)
    : await supabase.from("products").insert({ ...row, id: `${slugify(name)}-${Date.now().toString(36)}` });
  if (error) return { error: error.message };

  refreshSite();
  return { saved: true };
}

export async function deleteProduct(form: FormData) {
  const supabase = await adminClient();
  await supabase.from("products").delete().eq("id", text(form, "id"));
  refreshSite();
  revalidatePath("/admin/fees");
}

// --- Team --------------------------------------------------------------------

export async function saveTeamMember(_: FormState, form: FormData): Promise<FormState> {
  const supabase = await adminClient();
  const id = text(form, "id");
  const name = text(form, "name");
  if (!name) return { error: "Please add a name." };

  const row = {
    name,
    slug: slugify(text(form, "slug") || name),
    credentials: text(form, "credentials"),
    role: text(form, "role"),
    summary: text(form, "summary"),
    bio: text(form, "bio")
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
    photo_url: optional(form, "photo_url"),
    sort: Number(text(form, "sort")) || 0,
  };

  const { error } = id
    ? await supabase.from("team_members").update(row).eq("id", id)
    : await supabase.from("team_members").insert(row);
  if (error) return { error: error.code === "23505" ? "Another team member already uses that web address." : error.message };

  refreshSite();
  redirect("/admin/team");
}

export async function deleteTeamMember(form: FormData) {
  const supabase = await adminClient();
  await supabase.from("team_members").delete().eq("id", text(form, "id"));
  refreshSite();
  redirect("/admin/team");
}

// --- Inbox -------------------------------------------------------------------

export async function setInquiryStatus(form: FormData) {
  const supabase = await adminClient();
  const status = text(form, "status");
  if (!["new", "in_progress", "done"].includes(status)) return;
  await supabase.from("inquiries").update({ status }).eq("id", text(form, "id"));
  revalidatePath("/admin", "layout");
}

export async function deleteInquiry(form: FormData) {
  const supabase = await adminClient();
  await supabase.from("inquiries").delete().eq("id", text(form, "id"));
  revalidatePath("/admin", "layout");
}
