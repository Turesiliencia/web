import Image from "next/image";
import { book } from "@/content/book";
import { home } from "@/content/home";
import { site, type Locale } from "@/content/site";
import { LogoEmblem } from "./Logo";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader, sectionHref } from "./SiteHeader";
import styles from "./HomePage.module.css";
import cover from "@/assets/sobrevivir-no-es-reconstruirse.jpg";

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

function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(`${subject} · ${site.name}`)}`;
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = home[locale];
  const { sections } = t;

  return (
    <div className={styles.page}>
      <SiteHeader locale={locale} />

      <main>
        <section className={styles.hero}>
          <div className={styles.mark}>
            <LogoEmblem className={styles.emblem} />
          </div>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h1 className={styles.headline}>
            <span>{t.headline[0]}</span> <span>{t.headline[1]}</span>
          </h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <p className={styles.lede}>{t.lede}</p>
          <ul className={styles.ctas}>
            <li>
              <a className={styles.primary} href={sectionHref(locale, "about")}>
                {t.cta.about}
              </a>
            </li>
            <li>
              <a className={styles.secondary} href={sectionHref(locale, "book")}>
                {t.cta.book}
              </a>
            </li>
          </ul>
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

        <section
          id={sections.about.id}
          className={styles.about}
          aria-labelledby="about-title"
        >
          <div className={styles.aboutIntro}>
            <div>
              <p className={styles.label}>{t.about.label}</p>
              <h2 id="about-title" className={styles.title}>
                {t.about.title}
              </h2>
              {t.about.body.map((paragraph) => (
                <p key={paragraph} className={styles.body}>
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className={styles.pillars}>
              {t.about.pillars.map((pillar) => (
                <div key={pillar.name}>
                  <dt>{pillar.name}</dt>
                  <dd>{pillar.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.fields}>
            <h3 className={styles.label}>{t.about.fields.label}</h3>
            <p className={styles.fieldsIntro}>{t.about.fields.intro}</p>
            <ol>
              {t.about.fields.items.map((field, index) => (
                <li key={field.name}>
                  <span className={styles.number} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4>{field.name}</h4>
                  <p>{field.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id={sections.areas.id}
          className={styles.areas}
          aria-labelledby="areas-title"
        >
          <div className={styles.sectionHead}>
            <p className={styles.label}>{t.areas.label}</p>
            <h2 id="areas-title" className={styles.title}>
              {t.areas.title}
            </h2>
            <p className={styles.body}>{t.areas.intro}</p>
          </div>
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
                <a
                  className={styles.areaAction}
                  href={
                    "subject" in area.action
                      ? mailto(area.action.subject)
                      : sectionHref(locale, area.action.section)
                  }
                >
                  {area.action.label}
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section
          id={sections.book.id}
          className={styles.book}
          aria-labelledby="book"
        >
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

        <section
          id={sections.contact.id}
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <p className={styles.label}>{t.contact.label}</p>
          <h2 id="contact-title">{t.contact.title}</h2>
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

      <SiteFooter locale={locale} />
    </div>
  );
}
