import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/app/[lang]/_components/json-ld";
import CodeBlock from "@/app/[lang]/blog/_components/code-block";
import Star from "@/app/[lang]/_components/star";
import {
  blogPath,
  entries,
  feedPath,
  findEntry,
  postAlternates,
  postParams,
  postPath,
} from "@/app/[lang]/blog/_content/posts";
import { isLocale, siteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";

export function generateStaticParams() {
  return postParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[post]">): Promise<Metadata> {
  const { lang, post: slug } = await params;
  if (!isLocale(lang)) return {};

  const entry = findEntry(lang, slug);
  if (!entry) return {};

  const dict = await getDictionary(lang);
  const path = postPath(lang, entry.content.slug);

  return {
    metadataBase: new URL(siteUrl),
    title: `${entry.content.title} | ${dict.site.name}`,
    description: entry.content.description,
    robots: entry.post.draft
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: {
      canonical: path,
      languages: postAlternates(entry.post),
    },
    openGraph: {
      title: entry.content.title,
      description: entry.content.description,
      type: "article",
      url: path,
      siteName: dict.site.name,
      locale: dict.ogLocale,
      publishedTime: entry.post.date,
      ...(entry.post.updated ? { modifiedTime: entry.post.updated } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: entry.content.title,
      description: entry.content.description,
    },
  };
}

export default async function PostPage({
  params,
}: PageProps<"/[lang]/blog/[post]">) {
  const { lang, post: slug } = await params;
  if (!isLocale(lang)) notFound();

  const entry = findEntry(lang, slug);
  if (!entry) notFound();

  const dict = await getDictionary(lang);
  const { default: Body } = await entry.content.body();
  const components = {
    pre: (props: { children?: ReactNode }) => (
      <CodeBlock
        copy={dict.blog.copyLabel}
        copied={dict.blog.copiedLabel}
        {...props}
      />
    ),
  };
  const others = entries(lang).filter(({ post }) => post.id !== entry.post.id);
  const dates = new Intl.DateTimeFormat(lang, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const published = dates.format(new Date(`${entry.post.date}T12:00:00Z`));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: entry.content.title,
          description: entry.content.description,
          url: `${siteUrl}${postPath(lang, entry.content.slug)}`,
          mainEntityOfPage: `${siteUrl}${postPath(lang, entry.content.slug)}`,
          datePublished: entry.post.date,
          dateModified: entry.post.updated ?? entry.post.date,
          inLanguage: dict.htmlLang,
          articleSection: entry.content.topic,
          author: { "@id": `${siteUrl}/#organization` },
          publisher: { "@id": `${siteUrl}/#organization` },
          isPartOf: {
            "@type": "Blog",
            name: dict.blog.title,
            url: `${siteUrl}${blogPath(lang)}`,
          },
        }}
      />

      <article>
        <header className="border-b border-line">
          <div className="shell py-16 sm:py-24">
            <div className="mt-10 flex items-center gap-4">
              <span className="eyebrow text-accent">{entry.content.topic}</span>
              {entry.post.draft ? (
                <span className="eyebrow">{dict.blog.draftLabel}</span>
              ) : null}
              <span aria-hidden className="h-px flex-1 bg-line" />
              <Star className="size-2.5 shrink-0 text-line-strong" />
            </div>

            <h1 className="mt-7 max-w-[34ch] text-balance font-serif text-[2.25rem] leading-[1.04] tracking-[-0.02em] text-ink sm:text-[3.25rem]">
              {entry.content.title}
            </h1>

            <p className="mt-7 max-w-[46rem] text-pretty text-lg leading-relaxed text-ink-muted">
              {entry.content.description}
            </p>
          </div>
        </header>

        <div className="border-b border-line">
          <div className="shell grid gap-y-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-x-10">
            <aside className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <div className="border-t border-line pt-5 lg:sticky lg:top-[calc(var(--stage-top)+2.5rem)]">
                <dl className="space-y-5">
                  <div>
                    <dt className="eyebrow">{dict.blog.publishedLabel}</dt>
                    <dd className="mt-2 text-sm text-ink">
                      <time dateTime={entry.post.date}>{published}</time>
                    </dd>
                  </div>

                  {entry.post.updated ? (
                    <div>
                      <dt className="eyebrow">{dict.blog.updatedLabel}</dt>
                      <dd className="mt-2 text-sm text-ink">
                        <time dateTime={entry.post.updated}>
                          {dates.format(
                            new Date(`${entry.post.updated}T12:00:00Z`),
                          )}
                        </time>
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link href={blogPath(lang)} className="link text-sm">
                    {dict.blog.backLabel}
                  </Link>
                  <a href={feedPath(lang)} className="link text-sm">
                    {dict.blog.feedLabel}
                  </a>
                </div>
              </div>
            </aside>

            <div className="prose lg:col-span-7 lg:row-start-1">
              <Body components={components} />
            </div>
          </div>
        </div>
      </article>

      {others.length ? (
        <section
          aria-labelledby="post-more"
          className="border-b border-line"
        >
          <div className="shell py-16">
            <div className="flex flex-wrap items-baseline justify-between gap-6">
              <h2
                id="post-more"
                className="font-serif text-3xl leading-tight text-ink"
              >
                {dict.blog.moreLabel}
              </h2>
              <Link href={blogPath(lang)} className="link text-sm font-medium">
                {dict.blog.backLabel}
              </Link>
            </div>

            <ul className="grid-ruled mt-8 sm:grid-cols-2">
              {others.map(({ post, content }) => (
                <li key={post.id} className="cell cell-link group">
                  <span aria-hidden className="cell-mark" />
                  <Link
                    href={postPath(lang, content.slug)}
                    className="block h-full p-7"
                  >
                    <span className="eyebrow">{content.topic}</span>
                    <h3 className="mt-4 font-serif text-xl leading-tight text-ink">
                      {content.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {content.description}
                    </p>
                  </Link>
                </li>
              ))}
              {Array.from(
                { length: (2 - (others.length % 2)) % 2 },
                (_, i) => (
                  <li
                    key={`filler-${i}`}
                    aria-hidden
                    className="hidden bg-canvas sm:block"
                  />
                ),
              )}
            </ul>
          </div>
        </section>
      ) : (
        <section className="border-b border-line">
          <div className="shell py-10">
            <Link href={blogPath(lang)} className="link text-sm font-medium">
              {dict.blog.backLabel}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
