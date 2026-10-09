import type { Metadata, Viewport } from "next";
import { home } from "./home";
import { site, type Locale } from "./site";

export const viewport: Viewport = {
  themeColor: "#050d1f",
  colorScheme: "dark",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  // Site under construction: remove at launch.
  robots: { index: false, follow: false },
};

// public/social-card.png: ring, emblem and wordmark, as in the hero.
const socialCard = {
  url: "/social-card.png",
  width: 1200,
  height: 630,
  alt: site.name,
};

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
      images: [socialCard],
    },
    twitter: { card: "summary_large_image", images: [socialCard] },
  };
}
