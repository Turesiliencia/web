import type { Metadata } from "next";
import { NotFoundPage } from "@/components/NotFoundPage";
import { ThemeScript } from "@/components/ThemeScript";
import { notFound } from "@/content/not-found";
import { fontVariables } from "./fonts";
import "./globals.css";

// Any address with no page: the two root layouts can't share a not-found
// page, so this one stands outside them and brings its own fonts and styles.
export { viewport } from "@/content/metadata";
export const metadata: Metadata = { title: notFound.title };

export default function GlobalNotFound() {
  return (
    <html lang="es" className={fontVariables} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <NotFoundPage />
      </body>
    </html>
  );
}
