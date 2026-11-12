import Wordmark from "@/app/[lang]/_components/wordmark";
import type { Dictionary } from "@/lib/i18n/types";

export default function Intro({ dict }: { dict: Dictionary }) {
  return (
    <div aria-hidden className="intro">
      <div className="flex justify-end">
        <span className="intro-count index text-sm text-ink-faint" />
      </div>

      <div className="flex justify-center">
        <Wordmark name={dict.site.name} size="lg" />
      </div>

      <div className="h-px w-full bg-line">
        <div className="intro-fill h-px w-full bg-accent" />
      </div>
    </div>
  );
}
