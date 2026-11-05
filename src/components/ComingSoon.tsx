import Image from "next/image";
import Link from "next/link";
import { book } from "@/content/book";
import { home } from "@/content/home";
import { locales, site, type Locale } from "@/content/site";
import { LogoEmblem, LogoWordmark } from "./Logo";
import styles from "./ComingSoon.module.css";
import cover from "@/assets/sobrevivir-no-es-reconstruirse.jpg";

const languageNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

// Sets each mention of the book's title in italics, in Spanish.
function withTitle(text: string) {
  return text.split(book.title).flatMap((part, index) =>
    index === 0
      ? [part]
      : [
          <cite key={index} lang="es">
            {book.title}
          </cite>,
          part,
        ],
  );
}

export function ComingSoon({ locale }: { locale: Locale }) {
  const t = home[locale];

  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <nav aria-label={t.languageNav}>
          <ul className={styles.languages}>
            {locales.map((code) => (
              <li key={code}>
                <Link
                  href={site.paths[code]}
                  hrefLang={code}
                  lang={code}
                  aria-current={code === locale ? "page" : undefined}
                >
                  <span aria-hidden="true">{code.toUpperCase()}</span>
                  <span className={styles.visuallyHidden}>
                    {languageNames[code]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.mark}>
            <LogoEmblem className={styles.emblem} />
          </div>
          <LogoWordmark className={styles.wordmark} title={site.name} />
          <p className={styles.status}>{t.status}</p>
          <h1 className={styles.headline}>
            <span>{t.headline[0]}</span> <span>{t.headline[1]}</span>
          </h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <p className={styles.lede}>{t.lede}</p>
        </section>

        <section className={styles.concept} aria-labelledby="concept">
          <h2 id="concept" className={styles.label}>
            {t.concept.label}
          </h2>
          <figure className={styles.quote}>
            <blockquote>
              <p>{t.concept.quote}</p>
            </blockquote>
            <figcaption>{t.concept.attribution}</figcaption>
          </figure>
          <p className={styles.conceptBody}>{t.concept.body}</p>
        </section>

        <section className={styles.areas} aria-labelledby="areas">
          <h2 id="areas" className={styles.label}>
            {t.areas.label}
          </h2>
          <ol className={styles.grid}>
            {t.areas.items.map((area, index) => (
              <li key={area.name} className={styles.area}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{area.name}</h3>
                <p>{area.description}</p>
                {area.firstTitle && (
                  <p className={styles.firstTitle}>
                    <span>{area.firstTitle.label}</span>
                    <cite lang="es">{area.firstTitle.work}</cite>
                    {area.firstTitle.by} {area.firstTitle.author}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.book} aria-labelledby="book">
          <div className={styles.bookInner}>
            <Image
              className={styles.cover}
              src={cover}
              alt={t.book.coverAlt}
              sizes="(min-width: 52rem) 20rem, 16rem"
              placeholder="blur"
            />
            <div className={styles.bookText}>
              <h2 id="book" className={styles.label}>
                {t.book.label}
              </h2>
              <p className={styles.bookTitle}>
                <cite lang="es">{book.title}</cite>
                <span>
                  {t.book.by} {book.author}
                </span>
              </p>
              {t.book.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.bookBody}>
                  {withTitle(paragraph)}
                </p>
              ))}
              {t.book.note && <p className={styles.bookNote}>{t.book.note}</p>}
              {book.amazonUrl[locale] && (
                <a
                  className={`${styles.primary} ${styles.buy}`}
                  href={book.amazonUrl[locale]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.book.buy}
                </a>
              )}
            </div>
          </div>
        </section>

        <section className={styles.contact} aria-labelledby="contact">
          <h2 id="contact">{t.contact.title}</h2>
          <p>{t.contact.body}</p>
          <ul className={styles.actions}>
            <li>
              <a className={styles.primary} href={`mailto:${site.email}`}>
                {t.contact.email}
                <span>{site.email}</span>
              </a>
            </li>
            <li>
              <a
                className={styles.secondary}
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.instagram}
                <span>{site.instagram.handle}</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          © 2026 {site.name} <span aria-hidden="true">·</span> {t.footer}
        </p>
      </footer>
    </div>
  );
}
