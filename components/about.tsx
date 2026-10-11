import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n/types";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-title" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 rounded-panel border border-line bg-paper p-8 shadow-panel sm:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="about-title"
              label={dict.ui.about.label}
              title={dict.ui.about.title}
            />
          </div>

          <p className="text-[1.0625rem] leading-[1.7] text-ink-2 lg:col-span-7">
            {dict.about.text}
          </p>
        </div>
      </div>
    </section>
  );
}
