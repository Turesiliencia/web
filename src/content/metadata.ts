import type { Metadata, Viewport } from "next";
import { book } from "./book";
import { home } from "./home";
import { site, type Locale } from "./site";

// Light and dark, as in src/app/theme.css.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f0e6" },
    { media: "(prefers-color-scheme: dark)", color: "#050d1f" },
  ],
  colorScheme: "light dark",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  // Site under construction: remove at launch.
  robots: { index: false, follow: false },
};

// public/social-card-book.png: logo, the book's title and author, and its cover.
// No words in either language, so both pages share it.
const socialCard = {
  url: "/social-card-book.png",
  width: 1200,
  height: 630,
  alt: `${site.name} · ${book.title}, ${book.author}`,
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
