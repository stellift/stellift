import Wordmark from "@/app/[lang]/_components/wordmark";
import type { Dictionary } from "@/lib/i18n/types";

export default function Intro({ dict }: { dict: Dictionary }) {
  return (
    <div aria-hidden className="intro">
      <Wordmark name={dict.site.name} size="lg" />
      <div className="intro-fill mt-5 h-px w-28 bg-accent" />
    </div>
  );
}
