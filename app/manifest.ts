import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "stellift",
    short_name: "stellift",
    description: "Software sob medida para web, mobile e cloud.",
    start_url: "/",
    display: "browser",
    background_color: "#06080b",
    theme_color: "#06080b",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
