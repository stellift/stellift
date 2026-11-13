import type { ComponentType } from "react";
import { locales, type Locale } from "@/lib/i18n/config";

export type PostContent = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  body: () => Promise<{ default: ComponentType }>;
};

export type Post = {
  id: string;
  date: string;
  updated?: string;
  content: Partial<Record<Locale, PostContent>>;
};

export const posts: readonly Post[] = [];

export const blogSlug: Record<Locale, string> = { "pt-BR": "blog", en: "blog" };

export function blogPath(lang: Locale) {
  return `/${lang}/${blogSlug[lang]}`;
}

export function feedPath(lang: Locale) {
  return `${blogPath(lang)}/rss.xml`;
}

export function postPath(lang: Locale, slug: string) {
  return `${blogPath(lang)}/${slug}`;
}

export type Entry = { post: Post; content: PostContent };

export function entries(lang: Locale): Entry[] {
  return posts
    .flatMap((post) => {
      const content = post.content[lang];
      return content ? [{ post, content }] : [];
    })
    .sort((a, b) => b.post.date.localeCompare(a.post.date));
}

export function findEntry(lang: Locale, slug: string): Entry | null {
  return entries(lang).find((entry) => entry.content.slug === slug) ?? null;
}

export function postParams() {
  return locales.flatMap((lang) =>
    entries(lang).map((entry) => ({ lang, post: entry.content.slug })),
  );
}

export function postAlternates(post: Post) {
  const available = locales.filter((lang) => post.content[lang]);

  return Object.fromEntries([
    ...available.map((lang) => [
      lang,
      postPath(lang, post.content[lang]!.slug),
    ]),
    ...(post.content["pt-BR"]
      ? [["x-default", postPath("pt-BR", post.content["pt-BR"].slug)]]
      : []),
  ]);
}
