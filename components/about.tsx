import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n/types";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-title" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 border-y border-line py-14 sm:py-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading id="about-title" title={dict.ui.about.title} />
          </div>

          <p className="max-w-[46ch] font-display text-[1.5rem] font-normal leading-[1.45] tracking-[-0.01em] text-ink sm:text-[1.75rem] lg:col-span-8">
            {dict.about.text}
          </p>
        </div>
      </div>
    </section>
  );
}
