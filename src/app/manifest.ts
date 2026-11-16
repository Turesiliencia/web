import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// For a phone's home screen: the lotus on navy (public/icon-192.png and
// -512.png, with room around it for round masks). The site stays a website
// there ("browser"), not an app.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Asociación ${site.name}`,
    short_name: site.name,
    lang: "es",
    start_url: "/",
    display: "browser",
    background_color: "#f5f7fa",
    theme_color: "#081630",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
