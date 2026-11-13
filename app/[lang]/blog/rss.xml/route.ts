import {
  blogPath,
  entries,
  feedPath,
  postPath,
} from "@/app/[lang]/blog/_content/posts";
import { isLocale, locales, siteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET(
  _request: Request,
  { params }: RouteContext<"/[lang]/blog/rss.xml">,
) {
  const { lang } = await params;
  if (!isLocale(lang)) return new Response("Not found", { status: 404 });

  const dict = await getDictionary(lang);
  const list = entries(lang);

  const items = list
    .map(({ post, content }) => {
      const url = `${siteUrl}${postPath(lang, content.slug)}`;
      return [
        "    <item>",
        `      <title>${escape(content.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${escape(content.description)}</description>`,
        `      <category>${escape(content.topic)}</category>`,
        `      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escape(`${dict.blog.title} | ${dict.site.name}`)}</title>`,
    `    <link>${siteUrl}${blogPath(lang)}</link>`,
    `    <description>${escape(dict.blog.metaDescription)}</description>`,
    `    <language>${dict.htmlLang}</language>`,
    `    <atom:link href="${siteUrl}${feedPath(lang)}" rel="self" type="application/rss+xml" />`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
