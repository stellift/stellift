import SectionHeading from "@/components/section-heading";
import { ChevronIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n/types";

export default function Portfolio({ dict }: { dict: Dictionary }) {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="portfolio-title" title={dict.ui.portfolio.title} />

        <ul className="mt-14 border-t border-line">
          {dict.portfolio.map((project) => (
            <li key={project.name}>
              <article className="spec-body group relative grid gap-x-10 gap-y-4 py-10 sm:py-12 lg:grid-cols-12">
                <span
                  aria-hidden
                  className="spec-rule absolute inset-x-0 bottom-0 h-px bg-line"
                />

                <h3 className="font-display text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-ink lg:col-span-4 lg:text-[2.25rem]">
                  {project.name}
                </h3>

                <div className="lg:col-span-6">
                  <p className="max-w-[62ch] text-[17px] leading-[1.7] text-ink-2">
                    {project.text}
                  </p>
                  {project.stack ? (
                    <p className="mt-5 max-w-[62ch] text-[14px] leading-[1.6] text-ink-3">
                      {project.stack}
                    </p>
                  ) : null}
                </div>

                {project.href ? (
                  <p className="lg:col-span-2 lg:justify-self-end">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold text-ink transition-colors duration-150 hover:text-link"
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
