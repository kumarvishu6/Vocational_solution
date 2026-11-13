import type { NextConfig } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const nextConfig: NextConfig = {
  images: {
    // Photos the admin uploads live in the Supabase "media" bucket.
    remotePatterns: supabaseUrl ? [new URL(`${supabaseUrl}/storage/v1/object/public/**`)] : [],
  },
  redirects() {
    return [{ source: "/shop", destination: "/fees", permanent: true }];
  },
};

export default nextConfig;
