import { techIcons } from "@/lib/tech";

export const dynamic = "force-static";

export function GET() {
  const symbols = Object.entries(techIcons)
    .map(
      ([slug, icon]) =>
        `<symbol id="tech-${slug}" viewBox="${icon.viewBox}">${icon.paths
          .map((d) => `<path d="${d}"/>`)
          .join("")}</symbol>`,
    )
    .join("");

  return new Response(`<svg xmlns="http://www.w3.org/2000/svg">${symbols}</svg>`, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, stale-while-revalidate=86400",
    },
  });
}
