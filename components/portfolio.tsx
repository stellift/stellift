import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n/types";

export default function Portfolio({ dict }: { dict: Dictionary }) {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="border-b-2 border-rule">
      <div className="mx-auto max-w-[96rem] px-5 pt-14 sm:px-8 sm:pt-20">
        <SectionHeading id="portfolio-title" code="03" title={dict.ui.portfolio.title} />
      </div>

      <ul>
        {dict.portfolio.map((project) => (
          <li key={project.name} className="border-b-2 border-rule last:border-b-0">
            <article className="mx-auto field max-w-[96rem] gap-x-4 gap-y-5 px-5 py-10 sm:px-8 sm:py-14">
              <h3 className="col-span-12 font-sans text-[2.75rem] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-ink sm:text-[4rem] lg:col-span-5 lg:text-[4.5rem]">
                {project.name}
              </h3>

              <p className="col-span-12 max-w-[56ch] text-[1.0625rem] leading-[1.55] text-ink sm:col-span-8 lg:col-span-4">
                {project.text}
              </p>

              <div className="col-span-12 sm:col-span-4 lg:col-span-3">
                {project.stack ? (
                  <p className="text-[13px] font-medium uppercase leading-[1.5] tracking-[0.06em] text-ink-3">
                    {project.stack}
                  </p>
                ) : null}

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-100 hover:bg-navy"
                  >
                    {dict.ui.portfolio.cta}
                  </a>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>

      <p className="mx-auto max-w-[96rem] px-5 pb-10 pt-6 text-[12px] leading-[1.6] text-ink-3 sm:px-8">
        {dict.ui.portfolio.footnote}
      </p>
    </section>
  );
}
