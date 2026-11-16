import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Everything may be crawled. While the site is under construction its pages
// say noindex themselves (baseMetadata in src/content/metadata.ts), which
// crawlers can only read if robots.txt lets them in.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).href,
  };
}
