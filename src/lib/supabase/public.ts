import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "./env";

/** Cookie-free client for public reads, so pages can still be statically rendered. */
export function createPublicClient() {
  return createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });
}
