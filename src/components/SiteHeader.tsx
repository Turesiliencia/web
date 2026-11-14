import Link from "next/link";
import { home, type SectionKey } from "@/content/home";
import { locales, site, type Locale } from "@/content/site";
import { LogoEmblem, LogoWordmark } from "./Logo";
import styles from "./SiteHeader.module.css";
import { ThemeToggle } from "./ThemeToggle";

const languageNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const navOrder: SectionKey[] = ["about", "areas", "book", "contact"];

export function sectionHref(locale: Locale, key: SectionKey) {
  return `${site.paths[locale]}#${home[locale].sections[key].id}`;
}

export function LanguageSwitch({ locale }: { locale: Locale }) {
  return (
    <nav aria-label={home[locale].languageNav}>
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
              <span className={styles.visuallyHidden}>{languageNames[code]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = home[locale];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={site.paths[locale]} className={styles.brand}>
          <LogoEmblem className={styles.emblem} />
          <LogoWordmark className={styles.wordmark} title={site.name} />
        </Link>
        <nav aria-label={t.mainNav} className={styles.nav}>
          <ul>
            {navOrder.map((key) => (
              <li key={key}>
                <a href={sectionHref(locale, key)}>{t.sections[key].nav}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.tools}>
          <LanguageSwitch locale={locale} />
          <ThemeToggle label={t.themeToggle} />
        </div>
      </div>
    </header>
  );
}
