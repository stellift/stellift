import JsonLd from "@/app/[lang]/_components/json-ld";
import { siteUrl } from "@/lib/i18n/config";
import { acceleratorsPath } from "@/app/[lang]/[slug]/_lists/accelerators/metadata";
import {
  entryCount,
  metaDescription,
  sections,
  sourceNote,
  sourceRepo,
  title,
} from "@/app/[lang]/[slug]/_lists/accelerators/data";

export default async function Accelerators() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: title,
          description: metaDescription,
          url: `${siteUrl}${acceleratorsPath()}`,
          inLanguage: "pt-BR",
          numberOfItems: entryCount,
          itemListElement: sections.flatMap((section) =>
            section.entries.map((entry) => ({
              "@type": "ListItem",
              name: entry.name,
              ...(entry.url ? { url: entry.url } : {}),
            })),
          ),
        }}
      />

      <section className="border-b border-line">
        <div className="shell py-16 sm:py-24">
          <h1 className="mt-8 max-w-3xl text-balance font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-faint">
            {sourceNote}
          </p>

          <nav aria-label="Seções" className="mt-10 flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.title}
                href={`#${anchor(section.title)}`}
                className="border border-line px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink hover:text-ink"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.title}
          id={anchor(section.title)}
          aria-labelledby={`${anchor(section.title)}-title`}
          className="border-b border-line"
        >
          <div className="shell py-14">
            <h2
              id={`${anchor(section.title)}-title`}
              className="font-serif text-2xl text-ink sm:text-3xl"
            >
              {section.title}
            </h2>
            {section.intro ? (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {section.intro}
              </p>
            ) : null}

            <ul className="grid-ruled mt-8">
              {section.entries.map((entry) => (
                <li key={entry.name} className="cell cell-link grid gap-x-8 gap-y-2 p-6 lg:grid-cols-12">
                  <h3 className="font-semibold text-ink lg:col-span-3">
                    {entry.url ? (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        {entry.name}
                      </a>
                    ) : (
                      entry.name
                    )}
                  </h3>

                  {entry.cells.map((cell, index) => (
                    <p
                      key={`${entry.name}-${index}`}
                      className={
                        index === 0 && entry.cells.length > 1
                          ? "text-sm leading-relaxed text-ink-muted lg:col-span-3"
                          : "text-sm leading-relaxed text-ink-muted lg:col-span-6"
                      }
                    >
                      {cell}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="border-b border-line">
        <div className="shell py-14">
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
            {entryCount} entradas. A lista é aberta e vive em{" "}
            <a
              href={sourceRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline"
            >
              um repositório público
            </a>{" "}
            sob licença CC0. Faltou alguém? Abra um pull request.
          </p>
        </div>
      </section>
    </>
  );
}

function anchor(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
