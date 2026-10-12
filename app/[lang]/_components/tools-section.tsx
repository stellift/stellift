import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { toolIds, toolPath } from "@/app/[lang]/[slug]/_tools/config";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function ToolsSection({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <section id="tools" aria-labelledby="tools-title" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <header className="max-w-2xl">
          <h2
            id="tools-title"
            className="text-balance font-serif text-3xl leading-tight text-ink sm:text-[40px]"
          >
            {dict.tools.title}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted">
            {dict.tools.lead}
          </p>
        </header>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {toolIds.map((id) => (
            <li key={id}>
              <Link href={toolPath(lang, id)} className="cell flex h-full flex-col p-6">
                <h3 className="font-serif text-xl text-ink">
                  {dict.tools.items[id].name}
                </h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
                  {dict.tools.items[id].tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {dict.tools.cta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
