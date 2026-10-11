import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import { channelIcons } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n/types";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 lg:grid-cols-12">
        <div className="rounded-panel border border-line bg-paper p-8 shadow-panel lg:col-span-5">
          <SectionHeading
            id="contact-title"
            title={dict.ui.contact.title}
          />
          <p className="mt-5 text-[16px] leading-[1.65] text-ink-2">
            {dict.contact.lead}
          </p>

          <dl className="mt-8 space-y-4">
            {dict.contact.channels.map((channel) => {
              const Icon = channelIcons[channel.kind];
              const external = channel.kind !== "email";
              return (
                <div key={channel.kind} className="flex items-center gap-3">
                  <dt className="flex w-24 shrink-0 items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-3">
                    <Icon className="h-4 w-4 text-ink" />
                    {channel.label}
                  </dt>
                  <dd className="min-w-0">
                    <a
                      href={channel.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="break-words text-[15px] font-medium text-link hover:underline"
                    >
                      {channel.value}
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <ContactForm dict={dict} />
        </div>
      </div>
    </section>
  );
}
