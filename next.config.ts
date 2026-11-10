import type { NextConfig } from "next";
import { site } from "./src/content/site";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  // src/app/global-not-found.tsx: one 404 page for both root layouts.
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      {
        // The project's first address still serves the site: send it to the domain.
        source: "/:path*",
        has: [{ type: "host", value: "turesiliencia.vercel.app" }],
        destination: `${site.url}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
