import { createPublicClient } from "@/lib/supabase/public";
import { supabaseConfigured } from "@/lib/supabase/env";
import { shopCategories, team as fallbackTeam, type Product, type TeamMember } from "@/data/vc";

export type ProductCategory = { id: string; title: string; blurb: string; products: Product[] };

export type Post = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  cover_url: string | null;
  published: boolean;
  published_at: string;
};

export type Episode = {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string | null;
  listen_url: string | null;
  published: boolean;
  published_at: string;
};

export const postCategories = ["Articles", "Legal resources", "Industry insights", "Educational materials"];

/** Team members in display order. Falls back to the built-in list if the database is unreachable. */
export async function getTeam(): Promise<TeamMember[]> {
  if (!supabaseConfigured) return fallbackTeam;
  const { data, error } = await createPublicClient()
    .from("team_members")
    .select("slug, name, credentials, role, summary, bio, photo_url")
    .order("sort");
  if (error || !data?.length) return fallbackTeam;
  return data.map((m) => ({
    slug: m.slug,
    name: m.name,
    credentials: m.credentials,
    role: m.role,
    summary: m.summary,
    bio: m.bio ?? [],
    photo: m.photo_url ?? undefined,
  }));
}

/** Active products grouped into the fee categories. */
export async function getProductCategories(): Promise<ProductCategory[]> {
  if (!supabaseConfigured) return shopCategories;
  const { data, error } = await createPublicClient()
    .from("products")
    .select("id, category, name, detail, price")
    .eq("active", true)
    .order("sort");
  if (error || !data) return shopCategories;
  return shopCategories.map((c) => ({
    ...c,
    products: data
      .filter((p) => p.category === c.id)
      .map((p) => ({ id: p.id, name: p.name, detail: p.detail ?? undefined, price: p.price === null ? null : Number(p.price) })),
  }));
}

export async function getProducts(): Promise<Product[]> {
  return (await getProductCategories()).flatMap((c) => c.products);
}

export async function getPosts(): Promise<Post[]> {
  if (!supabaseConfigured) return [];
  const { data } = await createPublicClient()
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  return data ?? [];
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!supabaseConfigured) return null;
  const { data } = await createPublicClient().from("posts").select("*").eq("slug", slug).eq("published", true).maybeSingle();
  return data;
}

export async function getEpisodes(): Promise<Episode[]> {
  if (!supabaseConfigured) return [];
  const { data } = await createPublicClient()
    .from("podcast_episodes")
    .select("*")
    .eq("published", true)
    .order("number", { ascending: false });
  return data ?? [];
}
