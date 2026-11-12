import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Slate from "@/app/[lang]/_components/slate";
import type { Dictionary } from "@/lib/i18n/types";

export default function Portfolio({
  dict,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  index: string;
  eyebrow: string;
}) {
  const projects = dict.portfolio;
  const total = String(projects.length).padStart(2, "0");

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      data-tone="canvas"
      className="border-b border-line"
    >
      <div className="shell pt-24 sm:pt-28">
        <Slate
          id="portfolio-title"
          index={index}
          label={eyebrow}
          title={dict.ui.portfolio.title}
        />
      </div>

      <div className="reel-track mt-12">
        <div className="reel-pin">
          <div className="reel-wrap w-full pb-5">
            <ul className="reel border-y border-line">
              {projects.map((project, i) => (
                <li key={project.name} className="frame group">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
                    {project.shot ? (
                      <Image
                        src={project.shot}
                        alt=""
                        fill
                        priority={i < 2}
                        quality={92}
                        sizes="(min-width: 1024px) 560px, 78vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="slate">
                      <span className="index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden className="h-px flex-1 bg-line" />
                      <span className="index text-ink-faint">{total}</span>
                    </div>

                    <h3 className="mt-5 font-serif text-2xl leading-tight text-ink">
                      {project.name}
                    </h3>

                    <p className="eyebrow mt-2.5">{project.role}</p>

                    <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
                      {project.text}
                    </p>

                    {project.stack ? (
                      <p className="mt-5 border-t border-line pt-3.5 text-xs leading-relaxed text-ink-faint">
                        {project.stack}
                      </p>
                    ) : null}

                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        {dict.ui.portfolio.cta}
                        <ArrowUpRight
                          className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="shell pb-16">
        <p className="max-w-2xl text-xs leading-relaxed text-ink-faint">
          {dict.ui.portfolio.footnote}
        </p>
      </div>
    </section>
  );
}
