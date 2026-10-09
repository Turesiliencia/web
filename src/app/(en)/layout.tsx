import { baseMetadata } from "@/content/metadata";
import { fontVariables } from "../fonts";
import "../globals.css";

export { viewport } from "@/content/metadata";
export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
