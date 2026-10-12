import SectionHeading from "@/app/[lang]/_components/section-heading";
import type { Dictionary } from "@/lib/i18n/types";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          id="about-title"
          title={dict.ui.about.title}
        >
          {dict.about.text}
        </SectionHeading>
      </div>
    </section>
  );
}
