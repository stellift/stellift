import SectionHeading from "@/components/section-heading";
import { ChevronIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n/types";

export default function Portfolio({ dict }: { dict: Dictionary }) {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="portfolio-title"
          label={dict.ui.portfolio.label}
          title={dict.ui.portfolio.title}
        />

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.portfolio.map((project) => (
            <li key={project.name} className="h-full">
              <article className="flex h-full flex-col rounded-card border border-line bg-paper p-7 shadow-card">
                <h3 className="font-display text-[1.5rem] font-medium leading-tight tracking-[-0.01em] text-ink">
                  {project.name}
                </h3>

                <p className="mt-4 flex-1 text-[15px] leading-[1.65] text-ink-2">
                  {project.text}
                </p>

                {project.stack ? (
                  <p className="mt-5 text-[14px] leading-[1.5] text-ink-3">
                    {project.stack}
                  </p>
                ) : null}

                {project.href ? (
                  <p className="mt-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors duration-150 hover:text-link"
                    >
                      {dict.ui.portfolio.cta}
                      <ChevronIcon className="h-3.5 w-3.5" />
                    </a>
                  </p>
                ) : null}
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[70ch] text-[12px] leading-[1.6] text-ink-3">
          {dict.ui.portfolio.footnote}
        </p>
      </div>
    </section>
  );
}
