import Link from "next/link";
import Slate from "@/app/[lang]/_components/slate";
import { calculatorIds, toolPath, utilityIds } from "@/app/[lang]/[slug]/_tools/config";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function ToolsSection({
  dict,
  lang,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  lang: Locale;
  index: string;
  eyebrow: string;
}) {
  return (
    <section
      id="tools"
      aria-labelledby="tools-title"
      data-tone="canvas"
      className="scene border-b border-line"
    >
      <div className="shell">
        <Slate
          id="tools-title"
          index={index}
          label={eyebrow}
          title={dict.tools.title}
        >
          {dict.tools.lead}
        </Slate>

        <ul className="reveal mt-10 border-t border-line">
          {calculatorIds.map((id, i) => (
            <li key={id} className="border-b border-line">
              <Link
                href={toolPath(lang, id)}
                className="row-link group grid items-baseline gap-x-10 gap-y-3 py-5 lg:grid-cols-12"
              >
                <span className="index row-shift lg:col-span-1 lg:pl-6">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="row-shift font-serif text-2xl leading-tight text-ink lg:col-span-5 lg:text-3xl">
                  {dict.tools.items[id].name}
                </h3>

                <p className="text-pretty text-sm leading-relaxed text-ink-muted lg:col-span-6 lg:pr-6">
                  {dict.tools.items[id].tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="reveal mt-16 font-serif text-2xl leading-tight text-ink lg:text-3xl">
          {dict.tools.utilitiesTitle}
        </h3>
        <ul className="reveal grid-ruled mt-6 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}
