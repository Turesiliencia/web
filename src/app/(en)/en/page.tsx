import { HomePage } from "@/components/HomePage";
import { homeMetadata } from "@/content/metadata";

export const metadata = homeMetadata("en");

export default function Home() {
  return <HomePage locale="en" />;
}
