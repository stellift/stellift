import Slate from "@/app/[lang]/_components/slate";
import PortfolioReel from "@/app/[lang]/_components/portfolio-reel";
import { TechSprite } from "@/app/[lang]/_components/tech-stack";
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

      <TechSprite stacks={dict.portfolio.map((project) => project.stack)} />

      <PortfolioReel dict={dict} />

      <div className="shell pb-16">
        <p className="max-w-2xl text-xs leading-relaxed text-ink-faint">
          {dict.ui.portfolio.footnote}
        </p>
      </div>
    </section>
  );
}
