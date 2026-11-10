import Link from "next/link";
import { notFound } from "@/content/not-found";
import { site } from "@/content/site";
import { LogoEmblem } from "./Logo";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  const { es, en } = notFound;

  return (
    <div className={styles.page}>
      <SiteHeader locale="es" />

      <main className={styles.main}>
        <div className={styles.mark}>
          <LogoEmblem className={styles.emblem} />
        </div>
        <p className={styles.label}>{notFound.label}</p>
        <h1 className={styles.heading}>{es.heading}</h1>
        <p className={styles.body}>{es.body}</p>
        <Link className={styles.home} href={site.paths.es}>
          {es.home}
        </Link>
        <p className={styles.english} lang="en">
          <strong>{en.heading}</strong> {en.body}{" "}
          <Link href={site.paths.en} hrefLang="en">
            {en.home}
            <span aria-hidden="true"> →</span>
          </Link>
        </p>
      </main>

      <SiteFooter locale="es" />
    </div>
  );
}
