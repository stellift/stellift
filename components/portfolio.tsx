import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n/types";

export default function Portfolio({ dict }: { dict: Dictionary }) {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading id="portfolio-title" title={dict.ui.portfolio.title} />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-2">
          {dict.portfolio.map((project) => (
            <li key={project.name} className="cell flex flex-col">
              {project.shot ? (
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-canvas">
                  <Image
                    src={project.shot}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : null}

              <div
                className={`flex flex-1 flex-col p-6 ${
                  project.shot ? "" : "justify-center"
                }`}
              >
                <h3 className="card-title font-serif text-2xl text-ink">
                  {project.name}
                </h3>

                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
                  {project.text}
                </p>

                {project.stack ? (
                  <p className="mt-5 text-xs leading-relaxed text-ink-muted">
                    {project.stack}
                  </p>
                ) : null}

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    {dict.ui.portfolio.cta}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ink-muted">
          {dict.ui.portfolio.footnote}
        </p>
      </div>
    </section>
  );
}
