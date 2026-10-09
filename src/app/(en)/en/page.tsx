import { ComingSoon } from "@/components/ComingSoon";
import { homeMetadata } from "@/content/metadata";

export const metadata = homeMetadata("en");

export default function Home() {
  return <ComingSoon locale="en" />;
}
