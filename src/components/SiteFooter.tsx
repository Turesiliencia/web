import Link from "next/link";
import { home } from "@/content/home";
import { site, type Locale } from "@/content/site";
import { LogoEmblem, LogoWordmark } from "./Logo";
import { LanguageSwitch, navOrder, sectionHref } from "./SiteHeader";
import styles from "./SiteFooter.module.css";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = home[locale];

  return (
    <footer className={`${styles.footer} dark`}>
      <div className={styles.inner}>
        <div className={styles.about}>
          <Link href={site.paths[locale]} className={styles.brand}>
            <LogoEmblem className={styles.emblem} />
            <LogoWordmark className={styles.wordmark} title={site.name} />
          </Link>
          <p className={styles.tagline}>{t.footer.tagline}</p>
          <p className={styles.kind}>{t.footer.kind}</p>
        </div>

        <nav aria-labelledby="footer-explore" className={styles.column}>
          <h2 id="footer-explore">{t.footer.explore}</h2>
          <ul>
            {navOrder.map((key) => (
              <li key={key}>
                <a href={sectionHref(locale, key)}>{t.sections[key].nav}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h2>{t.footer.follow}</h2>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                Instagram {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h2>{t.footer.language}</h2>
          <LanguageSwitch locale={locale} />
        </div>
      </div>

      <p className={styles.legal}>© 2026 {site.name}</p>
    </footer>
  );
}
