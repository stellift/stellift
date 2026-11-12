import { Code2, Mail, Users, ArrowUpRight, type LucideIcon } from "lucide-react";
import Slate from "@/app/[lang]/_components/slate";
import ContactForm from "@/app/[lang]/_components/contact-form";
import type { ChannelKind, Dictionary } from "@/lib/i18n/types";

const icons: Record<ChannelKind, LucideIcon> = {
  email: Mail,
  linkedin: Users,
  code: Code2,
};

export default function Contact({
  dict,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  index: string;
  eyebrow: string;
}) {
  return (
    <section id="contact" aria-labelledby="contact-title" data-tone="canvas" className="scene">
      <div className="shell">
        <Slate
          id="contact-title"
          index={index}
          label={eyebrow}
          title={dict.ui.contact.title}
        >
          {dict.contact.lead}
        </Slate>

        <div className="reveal mt-14 grid gap-px border border-line bg-line lg:grid-cols-12">
          <ul className="grid gap-px bg-line sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {dict.contact.channels.map((channel) => {
              const Icon = icons[channel.kind];
              const external = channel.kind !== "email";
              return (
                <li key={channel.kind} className="cell cell-link group flex-1">
                  <span aria-hidden className="cell-mark" />
                  <a
                    href={channel.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-full flex-col justify-between gap-8 p-8"
                  >
                    <Icon className="size-5 shrink-0 text-accent" aria-hidden />
                    <span className="min-w-0">
                      <span className="eyebrow block">{channel.label}</span>
                      <span className="mt-2.5 flex items-center gap-1.5 break-words text-sm text-ink">
                        {channel.value}
                        <ArrowUpRight
                          className="size-3.5 shrink-0 text-ink-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="cell lg:col-span-7">
            <ContactForm dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
