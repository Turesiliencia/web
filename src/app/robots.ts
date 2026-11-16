import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Everything may be crawled and listed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).href,
  };
}
