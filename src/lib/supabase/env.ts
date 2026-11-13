export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "";

/** False on machines without the Supabase env vars; the site then falls back to its built-in content. */
export const supabaseConfigured = Boolean(supabaseUrl && supabaseKey);
