import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Calculator from "@/components/tools/calculator";
import { isLocale, locales, siteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";
import { toolFromSlug, toolIds, toolPath, toolSlugs } from "@/lib/tools/config";

const currencies: Record<string, string> = { "pt-BR": "BRL", en: "USD" };

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    toolIds.map((id) => ({ lang, slug: toolSlugs[lang][id] })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const id = toolFromSlug(lang, slug);
  if (!id) return {};
  const dict = await getDictionary(lang);
  const copy = dict.tools.items[id];

  return {
    metadataBase: new URL(siteUrl),
    title: copy.metaTitle,
    description: copy.metaDescription,
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
      canonical: toolPath(lang, id),
      languages: Object.fromEntries([
        ...locales.map((l) => [l, toolPath(l, id)]),
        ["x-default", toolPath("pt-BR", id)],
      ]),
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      type: "website",
      url: toolPath(lang, id),
      siteName: dict.site.name,
      locale: dict.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
    },
  };
}

export default async function ToolPage({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const id = toolFromSlug(lang, slug);
  if (!id) notFound();

  const dict = await getDictionary(lang);
  const copy = dict.tools.items[id];
  const others = toolIds.filter((other) => other !== id);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: copy.name,
    description: copy.metaDescription,
    url: `${siteUrl}${toolPath(lang, id)}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: dict.htmlLang,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: currencies[lang] },
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden />
            {dict.tools.backLabel}
          </Link>

          <h1 className="mt-8 max-w-3xl text-balance font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {copy.name}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            {copy.intro}
          </p>

          <div className="mt-12">
            <Calculator id={id} dict={dict} currency={currencies[lang]} />
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-muted">
            {copy.note}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="font-serif text-2xl text-ink">{dict.tools.allLabel}</h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {others.map((other) => (
              <li key={other}>
                <Link href={toolPath(lang, other)} className="cell block h-full p-6">
                  <h3 className="font-serif text-xl text-ink">
                    {dict.tools.items[other].name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {dict.tools.items[other].tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
