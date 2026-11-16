import type { Metadata, Viewport } from "next";
import { home } from "./home";
import { site, type Locale } from "./site";

// Light and dark, as in src/app/theme.css.
export const viewport: Viewport = {
  themeColor: [
    // The header is navy in both themes.
    { media: "(prefers-color-scheme: light)", color: "#081630" },
    { media: "(prefers-color-scheme: dark)", color: "#081630" },
  ],
  colorScheme: "light dark",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  // Site under construction: remove at launch. Links are still followed, so
  // that search engines reach the founder's site through this one.
  robots: { index: false, follow: true },
};

// public/social-card-es.jpg and -en.jpg: the hero in each language, the lotus
// medallion over the eyebrow, the headline and the subtitle.
function socialCard(locale: Locale) {
  const t = home[locale];
  return {
    url: `/social-card-${locale}.jpg`,
    width: 1200,
    height: 630,
    alt: `${t.eyebrow}: ${t.headline[0]}, ${t.headline[1].toLowerCase()}`,
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const { title, description } = home[locale].meta;

  return {
    title,
    description,
    alternates: {
      canonical: site.paths[locale],
      languages: { ...site.paths, "x-default": site.paths.es },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: site.paths[locale],
      locale: locale === "es" ? "es_ES" : "en_GB",
      alternateLocale: locale === "es" ? "en_GB" : "es_ES",
      images: [socialCard(locale)],
    },
    twitter: { card: "summary_large_image", images: [socialCard(locale)] },
  };
}
