import Link from "next/link";
import JsonLd from "@/app/[lang]/_components/json-ld";
import Star from "@/app/[lang]/_components/star";
import {
  calculatorIds,
  catalogPath,
  toolPath,
  utilityIds,
} from "@/app/[lang]/[slug]/_tools/config";
import { siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";

export default async function Catalog({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  const ids = [...calculatorIds, ...utilityIds];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: dict.tools.metaTitle,
          description: dict.tools.metaDescription,
          url: `${siteUrl}${catalogPath(lang)}`,
          inLanguage: dict.htmlLang,
          isPartOf: { "@id": `${siteUrl}/#website` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: ids.map((id, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: dict.tools.items[id].name,
              url: `${siteUrl}${toolPath(lang, id)}`,
            })),
          },
        }}
      />

      <section className="border-b border-line">
        <div className="shell py-16 sm:py-24">
          <div className="mt-10 flex items-center gap-4">
            <span className="index">{String(ids.length).padStart(2, "0")}</span>
            <span className="eyebrow">{dict.tools.allLabel}</span>
            <span aria-hidden className="h-px flex-1 bg-line" />
            <Star className="size-2.5 shrink-0 text-line-strong" />
          </div>

          <h1 className="mt-7 max-w-3xl text-balance font-serif text-[2.25rem] leading-[1.05] text-ink sm:text-[3.25rem]">
            {dict.tools.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            {dict.tools.lead}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="shell py-16 sm:py-20">
          <ul className="border-t border-line">
            {calculatorIds.map((id, i) => (
              <li key={id} className="border-b border-line">
                <Link
                  href={toolPath(lang, id)}
                  className="row-link group grid items-baseline gap-x-10 gap-y-3 py-5 lg:grid-cols-12"
                >
                  <span className="index row-shift lg:col-span-1 lg:pl-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h2 className="row-shift font-serif text-2xl leading-tight text-ink lg:col-span-5 lg:text-3xl">
                    {dict.tools.items[id].name}
                  </h2>

                  <p className="text-pretty text-sm leading-relaxed text-ink-muted lg:col-span-6 lg:pr-6">
                    {dict.tools.items[id].tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-16 font-serif text-2xl leading-tight text-ink lg:text-3xl">
            {dict.tools.utilitiesTitle}
          </h2>
          <ul className="grid-ruled mt-6 sm:grid-cols-2 lg:grid-cols-4">
            {utilityIds.map((id) => (
              <li key={id} className="cell cell-link group">
                <span aria-hidden className="cell-mark" />
                <Link href={toolPath(lang, id)} className="block h-full p-6">
                  <span className="block font-serif text-lg leading-tight text-ink">
                    {dict.tools.items[id].name}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-muted">
                    {dict.tools.items[id].tagline}
                  </span>
                </Link>
              </li>
            ))}
            {Array.from({ length: (4 - (utilityIds.length % 4)) % 4 }, (_, i) => (
              <li key={`wide-${i}`} aria-hidden className="hidden bg-canvas lg:block" />
            ))}
            {Array.from({ length: (2 - (utilityIds.length % 2)) % 2 }, (_, i) => (
              <li key={`medium-${i}`} aria-hidden className="hidden bg-canvas sm:block lg:hidden" />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
