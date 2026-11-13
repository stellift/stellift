import Image from "next/image";
import Slate from "@/app/[lang]/_components/slate";
import {
  GoogleLogo,
  MozillaLogo,
  ServeCommandLogo,
  WooviLogo,
} from "@/app/[lang]/_components/brand-logos";
import type { Dictionary } from "@/lib/i18n/types";

type Client = Dictionary["clients"][number];

export default function Clients({
  dict,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  index: string;
  eyebrow: string;
}) {
  const engines = dict.clients.filter((client) => client.note);
  const rest = dict.clients.filter((client) => !client.note);

  return (
    <section
      id="clients"
      aria-labelledby="clients-title"
      data-tone="canvas"
      className="scene border-b border-line"
    >
      <div className="shell">
        <Slate
          id="clients-title"
          index={index}
          label={eyebrow}
          title={dict.ui.clients.title}
        />

        <ul className="reveal mt-14 border-t border-line">
          {engines.map((client) => (
            <li key={client.name} className="group border-b border-line">
              <div className="row-link grid items-center gap-x-10 gap-y-5 py-9 sm:py-12 lg:grid-cols-12">
                <div className="row-shift flex h-9 items-center lg:col-span-3 lg:pl-6">
                  <ClientLogo client={client} size="lg" />
                  <span className="sr-only">{client.name}</span>
                </div>

                <p className="row-shift font-serif text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-ink lg:col-span-9">
                  {client.note}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="reveal mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
          {rest.map((client) => (
            <li key={client.name} className="flex h-7 items-center opacity-70">
              <ClientLogo client={client} size="sm" />
              <span className="sr-only">{client.name}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-ink-faint">
          {dict.ui.clients.footnote}
        </p>
      </div>
    </section>
  );
}

function ClientLogo({ client, size }: { client: Client; size: "sm" | "lg" }) {
  const h = size === "lg" ? "h-8" : "h-6";

  switch (client.logo) {
    case "google":
      return <GoogleLogo className={`${h} w-auto max-w-full`} />;
    case "mozilla":
      return <MozillaLogo className={`${h} w-auto max-w-full text-ink`} />;
    case "woovi":
      return <WooviLogo className={`${h} w-auto max-w-full text-ink`} />;
    case "servecommand":
      return (
        <span aria-hidden className="flex items-center gap-2">
          <ServeCommandLogo className="size-6 shrink-0" />
          <span className="text-base font-semibold tracking-tight text-ink">
            {client.name}
          </span>
        </span>
      );
    case "floprobux":
      return (
        <>
          <Image
            src="/logos/floprobux-light.webp"
            alt=""
            width={560}
            height={213}
            className={`${h} w-auto dark:hidden`}
          />
          <Image
            src="/logos/floprobux.webp"
            alt=""
            width={560}
            height={213}
            className={`hidden ${h} w-auto dark:block`}
          />
        </>
      );
    default:
      return null;
  }
}
