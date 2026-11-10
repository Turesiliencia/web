import type { Locale } from "./site";

// The book keeps its Spanish title in both languages.
export const book = {
  title: "Sobrevivir no es reconstruirse",
  author: "Deissy Olarte",
  // The Amazon store for each page's readers: Spain for Spanish, the UK for
  // English. Both go to the paperback. The buy button only shows while a link
  // is set.
  amazonUrl: {
    es: "https://www.amazon.es/dp/B0HQ1SSMKB",
    en: "https://www.amazon.co.uk/dp/B0HQ1SSMKB",
  } as Record<Locale, string | null>,
};
