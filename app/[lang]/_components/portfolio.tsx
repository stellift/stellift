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
      <div className="shell pt-28 sm:pt-36">
        <Slate
          id="portfolio-title"
          index={index}
          label={eyebrow}
          title={dict.ui.portfolio.title}
        />
      </div>

      <div className="reel-track mt-14">
        <div className="reel-pin">
          <div className="reel-wrap w-full pb-6">
            <ul className="reel border-y border-line">
              {projects.map((project, i) => (
                <li key={project.name} className="frame group">
                  {project.shot ? (
                    <Image
                      src={project.shot}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 62vw, 86vw"
                      className="object-cover object-top"
                    />
                  ) : null}

                  <div className="relative m-4 border border-line bg-canvas/90 p-6 backdrop-blur-md sm:m-7 sm:max-w-md sm:p-8">
                    <div className="slate">
                      <span className="index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden className="h-px flex-1 bg-line" />
                      <span className="index text-ink-faint">{total}</span>
                    </div>

                    <h3 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                      {project.name}
                    </h3>

                    <p className="eyebrow mt-3">{project.role}</p>

                    <p className="mt-4 text-pretty text-sm leading-relaxed text-ink-muted">
                      {project.text}
                    </p>

                    {project.stack ? (
                      <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-ink-faint">
                        {project.stack}
                      </p>
                    ) : null}

                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        {dict.ui.portfolio.cta}
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="shell pb-20">
        <p className="max-w-2xl text-xs leading-relaxed text-ink-faint">
          {dict.ui.portfolio.footnote}
        </p>
      </div>
    </section>
  );
}
