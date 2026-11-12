import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [{ source: "/shop", destination: "/fees", permanent: true }];
  },
};

export default nextConfig;
