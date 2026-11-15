export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const site = {
  name: "TuResiliencia",
  // Written by hand: canonical URLs, hreflang and social cards are built from it.
  url: "https://www.turesiliencia.org",
  email: "turesiliencia.com@gmail.com",
  instagram: {
    handle: "@turesiliencia_",
    url: "https://www.instagram.com/turesiliencia_",
  },
  // The founder's own site, in Spanish only, in her first-person voice: the
  // association links to it for personal support, never copies its content.
  founder: {
    name: "Deissy Olarte",
    url: "https://turesiliencia.com",
    host: "turesiliencia.com",
  },
  paths: { es: "/", en: "/en" } satisfies Record<Locale, string>,
};
