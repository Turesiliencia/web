export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const site = {
  name: "TuResiliencia",
  // Written by hand: canonical URLs, hreflang and social cards are built from it.
  url: "https://turesiliencia.vercel.app",
  email: "turesiliencia.com@gmail.com",
  instagram: {
    handle: "@turesiliencia_",
    url: "https://www.instagram.com/turesiliencia_",
  },
  paths: { es: "/", en: "/en" } satisfies Record<Locale, string>,
};
