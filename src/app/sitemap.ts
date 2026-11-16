import type { MetadataRoute } from "next";
import { locales, site } from "@/content/site";

// The home page in each language, each naming the other. No dates: reading
// the clock fails prerendering with cacheComponents.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, new URL(site.paths[locale], site.url).href]),
  );
  return locales.map((locale) => ({
    url: languages[locale],
    alternates: { languages },
  }));
}
