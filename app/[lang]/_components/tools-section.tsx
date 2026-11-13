import Link from "next/link";
import Slate from "@/app/[lang]/_components/slate";
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
          {toolIds.map((id, i) => (
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
      </div>
    </section>
  );
}
