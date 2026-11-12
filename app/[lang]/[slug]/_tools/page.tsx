import Link from "next/link";
import { calculators } from "@/app/[lang]/[slug]/_tools/registry";
import JsonLd from "@/app/[lang]/_components/json-ld";
import Star from "@/app/[lang]/_components/star";
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
  const toolsLabel =
    dict.nav.find((item) => item.href === "#tools")?.label ?? dict.tools.allLabel;

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
        <div className="shell py-16 sm:py-24">
          <div className="mt-10 flex items-center gap-4">
            <span className="index">{String(toolIds.indexOf(id) + 1).padStart(2, "0")}</span>
            <span className="eyebrow">{toolsLabel}</span>
            <span aria-hidden className="h-px flex-1 bg-line" />
            <Star className="size-2.5 shrink-0 text-line-strong" />
          </div>

          <h1 className="mt-7 max-w-3xl text-balance font-serif text-[2.25rem] leading-[1.05] text-ink sm:text-[3.25rem]">
            {copy.name}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            {copy.intro}
          </p>

          <div className="mt-12">
            <Calculator dict={dict} currency={currencies[lang]} />
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-faint">
            {copy.note}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="shell py-16">
          <h2 className="font-serif text-3xl leading-tight text-ink">
            {dict.tools.allLabel}
          </h2>
          <ul className="grid-ruled mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other} className="cell cell-link group">
                <span aria-hidden className="cell-mark" />
                <Link href={toolPath(lang, other)} className="block h-full p-7">
                  <h3 className="font-serif text-xl leading-tight text-ink">
                    {dict.tools.items[other].name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {dict.tools.items[other].tagline}
                  </p>
                </Link>
              </li>
            ))}
            {Array.from({ length: (3 - (others.length % 3)) % 3 }, (_, i) => (
              <li key={`wide-${i}`} aria-hidden className="hidden bg-canvas lg:block" />
            ))}
            {Array.from({ length: (2 - (others.length % 2)) % 2 }, (_, i) => (
              <li
                key={`medium-${i}`}
                aria-hidden
                className="hidden bg-canvas sm:block lg:hidden"
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
