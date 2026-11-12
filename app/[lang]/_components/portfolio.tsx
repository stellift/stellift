"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/app/[lang]/_components/section-heading";
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
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("[data-project]");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const next = Number(
            (entry.target as HTMLElement).dataset.project ?? 0,
          );
          setActive(next);
        }
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="border-b border-line">
      <div className="shell py-20 sm:py-28">
        <SectionHeading
          id="portfolio-title"
          index={index}
          eyebrow={eyebrow}
          title={dict.ui.portfolio.title}
        />

        <div className="reveal mt-14 border border-line lg:grid lg:grid-cols-12">
          <div
            aria-hidden
            className="relative hidden border-r border-line lg:col-span-7 lg:block"
          >
            <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden bg-surface">
              {projects.map((project, i) =>
                project.shot ? (
                  <Image
                    key={project.name}
                    src={project.shot}
                    alt=""
                    fill
                    sizes="58vw"
                    className={`object-cover object-top transition-opacity duration-700 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ) : null,
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-4 border-t border-line bg-canvas px-7 py-4">
                <span className="index">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow">{projects[active]?.role}</span>
                <span className="h-px flex-1 bg-line" />
                <span className="index text-ink-faint">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          <div ref={listRef} className="lg:col-span-5">
            {projects.map((project, i) => (
              <article
                key={project.name}
                data-project={i}
                className="flex flex-col justify-center border-b border-line last:border-b-0 lg:min-h-[58svh]"
              >
                {project.shot ? (
                  <div className="relative aspect-[16/10] border-b border-line bg-surface lg:hidden">
                    <Image
                      src={project.shot}
                      alt=""
                      fill
                      sizes="100vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : null}

                <div className="p-7 sm:p-9">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden
                      className={`h-px flex-1 transition-colors duration-500 ${
                        active === i ? "bg-accent" : "bg-line"
                      }`}
                    />
                  </div>

                  <h3 className="mt-6 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                    {project.name}
                  </h3>

                  <p className="eyebrow mt-3">{project.role}</p>

                  <p className="mt-5 text-pretty text-sm leading-relaxed text-ink-muted">
                    {project.text}
                  </p>

                  {project.stack ? (
                    <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-ink-faint">
                      {project.stack}
                    </p>
                  ) : null}

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      {dict.ui.portfolio.cta}
                      <ArrowUpRight
                        className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-faint">
          {dict.ui.portfolio.footnote}
        </p>
      </div>
    </section>
  );
}
