import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/app/[lang]/_components/section-heading";
import type { Dictionary } from "@/lib/i18n/types";

type Project = Dictionary["portfolio"][number];

export default function Portfolio({
  dict,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  index: string;
  eyebrow: string;
}) {
  const [feature, ...rest] = dict.portfolio;
  const wide = (3 - (rest.length % 3)) % 3;
  const medium = (2 - (rest.length % 2)) % 2;

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="border-b border-line">
      <div className="shell py-20 sm:py-28">
        <SectionHeading
          id="portfolio-title"
          index={index}
          eyebrow={eyebrow}
          title={dict.ui.portfolio.title}
        />

        {feature ? (
          <article className="mt-12 grid border border-line lg:grid-cols-12">
            <div className="relative aspect-[16/10] border-b border-line bg-surface lg:col-span-7 lg:aspect-auto lg:min-h-[28rem] lg:border-b-0 lg:border-r">
              {feature.shot ? (
                <Image
                  src={feature.shot}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top"
                />
              ) : null}
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-5">
              <p className="index text-ink-faint">01</p>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {feature.name}
              </h3>

              <p className="eyebrow mt-3">{feature.role}</p>

              <p className="mt-5 text-pretty text-base leading-relaxed text-ink-muted">
                {feature.text}
              </p>

              {feature.stack ? (
                <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-ink-faint">
                  {feature.stack}
                </p>
              ) : null}

              {feature.href ? (
                <a
                  href={feature.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {dict.ui.portfolio.cta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : null}
            </div>
          </article>
        ) : null}

        <ul
          className={`grid-ruled sm:grid-cols-2 lg:grid-cols-3 ${
            feature ? "border-t-0" : "mt-12"
          }`}
        >
          {rest.map((project, i) => (
            <Card
              key={project.name}
              project={project}
              number={String(i + 2).padStart(2, "0")}
              cta={dict.ui.portfolio.cta}
            />
          ))}

          {Array.from({ length: wide }, (_, i) => (
            <li key={`wide-${i}`} aria-hidden className="hidden bg-canvas lg:block" />
          ))}
          {Array.from({ length: medium }, (_, i) => (
            <li
              key={`medium-${i}`}
              aria-hidden
              className="hidden bg-canvas sm:block lg:hidden"
            />
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-faint">
          {dict.ui.portfolio.footnote}
        </p>
      </div>
    </section>
  );
}

function Card({
  project,
  number,
  cta,
}: {
  project: Project;
  number: string;
  cta: string;
}) {
  return (
    <li className="cell cell-link group flex flex-col">
      <span aria-hidden className="cell-mark z-10" />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
        {project.shot ? (
          <Image
            src={project.shot}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl leading-tight text-ink">
            {project.name}
          </h3>
          <span className="index shrink-0 text-ink-faint">{number}</span>
        </div>

        <p className="eyebrow mt-3">{project.role}</p>

        <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
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
            className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            {cta}
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        ) : null}
      </div>
    </li>
  );
}
