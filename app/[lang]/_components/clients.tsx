import Image from "next/image";
import Slate from "@/app/[lang]/_components/slate";
import {
  GoogleLogo,
  HaskellLogo,
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
  const featured = dict.clients.filter((client) => client.featured);
  const rest = dict.clients.filter((client) => !client.featured);

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

        <ul className="reveal mt-14 grid-ruled sm:grid-cols-3">
          {featured.map((client) => (
            <li
              key={client.name}
              className="cell flex flex-col gap-7 p-8 sm:p-10"
            >
              <span className="flex h-9 items-center">
                <ClientLogo client={client} size="lg" />
                <span className="sr-only">{client.name}</span>
              </span>

              <p className="max-w-[32ch] text-pretty text-sm leading-relaxed text-ink-muted">
                {client.note}
              </p>
            </li>
          ))}
        </ul>

        <ul className="reveal mt-12 flex flex-wrap items-start gap-x-14 gap-y-8">
          {rest.map((client) => (
            <li key={client.name} className="flex flex-col gap-2.5">
              <span className="flex h-7 items-center opacity-70">
                <ClientLogo client={client} size="sm" />
                <span className="sr-only">{client.name}</span>
              </span>

              {client.note ? (
                <span className="text-xs leading-relaxed text-ink-faint">
                  {client.note}
                </span>
              ) : null}
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
    case "haskell":
      return (
        <HaskellLogo
          className={`${size === "lg" ? "h-11" : "h-8"} w-auto max-w-full text-ink`}
        />
      );
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
