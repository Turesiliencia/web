import { book } from "./book";
import { home } from "./home";
import { site, type Locale } from "./site";

// Structured data (schema.org, as JSON-LD) for the home page: the site, the
// association and the founder's book. The founder and the book carry the ids
// her own site gives them (turesiliencia.com), so search engines can tell
// they are the same person and book on both sites.
const at = (path: string) => new URL(path, site.url).href;
const founderId = new URL("/#person", site.founder.url).href;
const bookId = new URL("/#libro", site.founder.url).href;
export const organizationId = at("/#organization");

export function homeStructuredData(locale: Locale) {
  const t = home[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": at("/#website"),
        url: at("/"),
        name: site.name,
        inLanguage: ["es", "en"],
        publisher: { "@id": organizationId },
      },
      {
        "@type": "NGO",
        "@id": organizationId,
        name: t.eyebrow,
        alternateName: site.name,
        url: at("/"),
        logo: at("/apple-icon.png"),
        description: t.meta.description,
        email: `mailto:${site.email}`,
        sameAs: [site.instagram.url],
        founder: { "@type": "Person", "@id": founderId, name: site.founder.name, url: site.founder.url },
      },
      {
        "@type": "Book",
        "@id": bookId,
        name: book.title,
        inLanguage: "es",
        author: { "@type": "Person", "@id": founderId, name: book.author },
        ...(book.amazonUrl[locale] ? { sameAs: [book.amazonUrl[locale]] } : {}),
      },
    ],
  };
}
