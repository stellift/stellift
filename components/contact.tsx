import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import type { Dictionary } from "@/lib/i18n/types";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="mx-auto max-w-[96rem] px-5 pt-14 sm:px-8 sm:pt-20">
        <SectionHeading id="contact-title" title={dict.ui.contact.title} />
      </div>

      <div className="mx-auto field max-w-[96rem] gap-x-4">
        <div className="col-span-12 px-5 py-10 sm:px-8 lg:col-span-5 lg:pl-5">
          <p className="max-w-[34ch] text-[1.0625rem] leading-[1.55] text-ink">
            {dict.contact.lead}
          </p>

          <dl className="mt-10 border-t-2 border-rule">
            {dict.contact.channels.map((channel) => (
              <div
                key={channel.kind}
                className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b-2 border-rule py-4"
              >
                <dt className="w-24 shrink-0 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-3">
                  {channel.label}
                </dt>
                <dd className="min-w-0">
                  <a
                    href={channel.href}
                    {...(channel.kind !== "email"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="break-words text-[15px] font-bold text-ink underline decoration-red decoration-2 underline-offset-4 transition-colors duration-100 hover:text-red"
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ContactForm dict={dict} />
        </div>
      </div>
    </section>
  );
}
