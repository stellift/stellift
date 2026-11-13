import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Slate from "@/app/[lang]/_components/slate";
import TechStack, {
  TechSprite,
} from "@/app/[lang]/_components/tech-stack";
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

      <TechSprite stacks={projects.map((p) => p.stack)} />

      <div className="reel-track mt-12">
        <div className="reel-pin">
          <div className="reel-wrap w-full pb-5">
            <ul className="reel border-y border-line">
              {projects.map((project, i) => (
                <li key={project.name} className="frame group">
                  <div className="mount">
                    {project.shot ? (
                      <Image
                        src={project.shot}
                        alt=""
                        fill
                        priority={i < 2}
                        quality={92}
                        sizes="(min-width: 1024px) 560px, 78vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-col px-5 pb-5 pt-6">
                    <div className="flex items-baseline gap-4">
                      <span className="index shrink-0 translate-y-[-0.35rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-[2.125rem] leading-none text-ink">
                        {project.name}
                      </h3>
                    </div>

                    <p className="eyebrow mt-3.5">{project.role}</p>

                    <p className="mt-4 text-pretty text-[0.8125rem] leading-[1.65] text-ink-muted">
                      {project.text}
                    </p>

                    {project.stack ? (
                      <div className="mt-6 border-t border-line pt-4">
                        <TechStack stack={project.stack} />
                      </div>
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
