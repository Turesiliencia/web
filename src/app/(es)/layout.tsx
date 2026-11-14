import { baseMetadata } from "@/content/metadata";
import { fontVariables } from "../fonts";
import { ThemeScript } from "@/components/ThemeScript";
import "../globals.css";

export { viewport } from "@/content/metadata";
export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontVariables} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
