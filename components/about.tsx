import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/lib/i18n/types";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b-2 border-rule">
      <div className="mx-auto max-w-[96rem] px-5 pt-14 sm:px-8 sm:pt-20">
        <SectionHeading id="about-title" code="04" title={dict.ui.about.title} />
      </div>

      {/* A declaração é posta num setor preenchido: carrega a região inteira. */}
      <div className="mt-10 bg-navy sm:mt-14">
        <div className="mx-auto max-w-[96rem] px-5 py-14 sm:px-8 sm:py-20">
          <p className="max-w-[30ch] font-sans text-[1.75rem] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-white sm:text-[2.25rem] lg:max-w-[28ch] lg:text-[2.75rem]">
            {dict.about.text}
          </p>
        </div>
      </div>
    </section>
  );
}
