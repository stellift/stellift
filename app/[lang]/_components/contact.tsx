import { Code2, Mail, Users, type LucideIcon } from "lucide-react";
import SectionHeading from "@/app/[lang]/_components/section-heading";
import ContactForm from "@/app/[lang]/_components/contact-form";
import type { ChannelKind, Dictionary } from "@/lib/i18n/types";

const icons: Record<ChannelKind, LucideIcon> = {
  email: Mail,
  linkedin: Users,
  code: Code2,
};

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          id="contact-title"
          title={dict.ui.contact.title}
        >
          {dict.contact.lead}
        </SectionHeading>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <ul className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line lg:col-span-5">
            {dict.contact.channels.map((channel) => {
              const Icon = icons[channel.kind];
              const external = channel.kind !== "email";
              return (
                <li key={channel.kind} className="cell flex-1">
                  <a
                    href={channel.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-full items-start gap-3 p-6"
                  >
                    <Icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                    <span className="min-w-0">
                      <span className="field-label block uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-1 block break-words text-sm text-ink">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="lg:col-span-7">
            <ContactForm dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
