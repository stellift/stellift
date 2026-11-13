import type { MDXContent } from "mdx/types";
import { locales, type Locale } from "@/lib/i18n/config";

export type PostContent = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  body: () => Promise<{ default: MDXContent }>;
};

export type Post = {
  id: string;
  date: string;
  updated?: string;
  draft?: boolean;
  content: Partial<Record<Locale, PostContent>>;
};

export const posts: readonly Post[] = [
  {
    id: "amostra",
    date: "2026-11-13",
    draft: true,
    content: {
      "pt-BR": {
        slug: "amostra-de-codigo",
        title: "Amostra de código",
        description:
          "Página de teste do estilo de bloco de código: cores, numeração de linha e botão de copiar.",
        topic: "Interno",
        body: () => import("./amostra/pt-BR.mdx"),
      },
      en: {
        slug: "code-sample",
        title: "Code sample",
        description:
          "Test page for the code block style: colors, line numbers and the copy button.",
        topic: "Internal",
        body: () => import("./amostra/en.mdx"),
      },
    },
  },
];

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

export function publicEntries(lang: Locale): Entry[] {
  return entries(lang).filter(({ post }) => !post.draft);
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
