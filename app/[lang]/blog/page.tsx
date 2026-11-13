import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/app/[lang]/_components/json-ld";
import Star from "@/app/[lang]/_components/star";
import {
  blogPath,
  entries,
  feedPath,
  postPath,
} from "@/app/[lang]/blog/_content/posts";
import { isLocale, locales, siteUrl } from "@/lib/i18n/config";
import { altLanguages, getDictionary } from "@/lib/i18n/server";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const path = blogPath(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: dict.blog.metaTitle,
    description: dict.blog.metaDescription,
    robots: {
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
      languages: altLanguages("/blog"),
      types: { "application/rss+xml": feedPath(lang) },
    },
    openGraph: {
      title: dict.blog.metaTitle,
      description: dict.blog.metaDescription,
      type: "website",
      url: path,
      siteName: dict.site.name,
      locale: dict.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.blog.metaTitle,
      description: dict.blog.metaDescription,
    },
  };
}

export default async function BlogIndex({
  params,
}: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const list = entries(lang);
  const dates = new Intl.DateTimeFormat(lang, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: dict.blog.title,
          description: dict.blog.metaDescription,
          url: `${siteUrl}${blogPath(lang)}`,
          inLanguage: dict.htmlLang,
          publisher: { "@id": `${siteUrl}/#organization` },
          blogPost: list.map(({ post, content }) => ({
            "@type": "BlogPosting",
            headline: content.title,
            description: content.description,
            url: `${siteUrl}${postPath(lang, content.slug)}`,
            datePublished: post.date,
            ...(post.updated ? { dateModified: post.updated } : {}),
          })),
        }}
      />

      <section className="border-b border-line">
        <div className="shell py-16 sm:py-24">
          <div className="mt-10 flex items-center gap-4">
            <span className="index">
              {String(list.length).padStart(2, "0")}
            </span>
            <span className="eyebrow">{dict.blog.eyebrow}</span>
            <span aria-hidden className="h-px flex-1 bg-line" />
            <Star className="size-2.5 shrink-0 text-line-strong" />
          </div>

          <h1 className="mt-7 max-w-3xl text-balance font-serif text-[2.25rem] leading-[1.05] text-ink sm:text-[3.25rem]">
            {dict.blog.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            {dict.blog.lead}
          </p>

          <a
            href={feedPath(lang)}
            className="link mt-7 inline-block text-sm font-medium"
          >
            {dict.blog.feedLabel}
          </a>
        </div>
      </section>

      <section aria-label={dict.blog.title} className="border-b border-line">
        <div className="shell py-16 sm:py-20">
          {list.length ? (
            <ul className="border-t border-line">
              {list.map(({ post, content }, i) => (
                <li key={post.id} className="border-b border-line">
                  <Link
                    href={postPath(lang, content.slug)}
                    className="row-link group grid items-baseline gap-x-8 gap-y-5 py-10 sm:py-12 lg:grid-cols-12"
                  >
                    <span className="index row-shift lg:col-span-1 lg:pl-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h2 className="row-shift font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.04] tracking-[-0.02em] text-ink lg:col-span-6">
                      {content.title}
                    </h2>

                    <div className="lg:col-span-5 lg:pr-6">
                      <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
                        <time dateTime={post.date}>
                          {dates.format(new Date(`${post.date}T12:00:00Z`))}
                        </time>
                        <span aria-hidden className="h-px w-5 bg-line-strong" />
                        {content.topic}
                      </p>
                      <p className="mt-4 max-w-[52ch] text-pretty text-sm leading-relaxed text-ink-muted">
                        {content.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-xl text-base leading-relaxed text-ink-muted">
              {dict.blog.empty}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
