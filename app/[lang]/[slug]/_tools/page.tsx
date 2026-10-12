import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { calculators } from "@/app/[lang]/[slug]/_tools/registry";
import JsonLd from "@/app/[lang]/_components/json-ld";
import { siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";
import { toolIds, toolPath, type ToolId } from "@/app/[lang]/[slug]/_tools/config";
import { currencies } from "@/app/[lang]/[slug]/_tools/metadata";

export default async function ToolPage({
  lang,
  id,
}: {
  lang: Locale;
  id: ToolId;
}) {
  const dict = await getDictionary(lang);
  const copy = dict.tools.items[id];
  const others = toolIds.filter((other) => other !== id);
  const Calculator = calculators[id];

  return (
    <>
      <JsonLd
        data={{
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
        }}
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
            <Calculator dict={dict} currency={currencies[lang]} />
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-muted">
            {copy.note}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="font-serif text-2xl text-ink">{dict.tools.allLabel}</h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
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
            {Array.from({ length: (3 - (others.length % 3)) % 3 }, (_, i) => (
              <li key={`wide-${i}`} aria-hidden className="cell hidden lg:block" />
            ))}
            {Array.from({ length: (2 - (others.length % 2)) % 2 }, (_, i) => (
              <li
                key={`medium-${i}`}
                aria-hidden
                className="cell hidden sm:block lg:hidden"
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
