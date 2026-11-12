import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/app/[lang]/_components/section-heading";
import { toolIds, toolPath } from "@/app/[lang]/[slug]/_tools/config";
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
    <section id="tools" aria-labelledby="tools-title" className="border-b border-line">
      <div className="shell py-20 sm:py-28">
        <SectionHeading
          id="tools-title"
          index={index}
          eyebrow={eyebrow}
          title={dict.tools.title}
        >
          {dict.tools.lead}
        </SectionHeading>

        <ul className="grid-ruled mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {toolIds.map((id, i) => (
            <li key={id} className="cell cell-link group">
              <span aria-hidden className="cell-mark" />
              <Link href={toolPath(lang, id)} className="flex h-full flex-col p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl leading-tight text-ink">
                    {dict.tools.items[id].name}
                  </h3>
                  <span className="index shrink-0 text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
                  {dict.tools.items[id].tagline}
                </p>

                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {dict.tools.cta}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
