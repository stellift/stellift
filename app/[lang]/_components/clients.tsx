import Image from "next/image";
import Slate from "@/app/[lang]/_components/slate";
import {
  GoogleLogo,
  MozillaLogo,
  ServeCommandLogo,
  WooviLogo,
} from "@/app/[lang]/_components/brand-logos";
import type { Dictionary } from "@/lib/i18n/types";

export default function Clients({
  dict,
  index,
  eyebrow,
}: {
  dict: Dictionary;
  index: string;
  eyebrow: string;
}) {
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

        <ul className="reveal mt-16 flex flex-wrap border-l border-t border-line">
          {dict.clients.map((client) => (
            <li
              key={client.name}
              className="flex flex-1 basis-56 flex-col justify-between gap-10 border-b border-r border-line p-8 sm:gap-16 sm:p-10"
            >
              <div className="flex h-10 items-center">
                <ClientLogo client={client} />
                <span className="sr-only">{client.name}</span>
              </div>
              {client.note ? (
                <p className="text-sm leading-relaxed text-ink-muted">
                  {client.note}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ink-faint">
          {dict.ui.clients.footnote}
        </p>
      </div>
    </section>
  );
}

function ClientLogo({ client }: { client: Dictionary["clients"][number] }) {
  switch (client.logo) {
    case "google":
      return <GoogleLogo className="h-6 w-auto max-w-full" />;
    case "mozilla":
      return <MozillaLogo className="h-6 w-auto max-w-full text-ink" />;
    case "woovi":
      return <WooviLogo className="h-8 w-auto max-w-full text-ink" />;
    case "servecommand":
      return (
        <span aria-hidden className="flex items-center gap-2">
          <ServeCommandLogo className="size-8 shrink-0" />
          <span className="truncate text-lg font-semibold tracking-tight text-ink">
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
            className="h-8 w-auto dark:hidden"
          />
          <Image
            src="/logos/floprobux.webp"
            alt=""
            width={560}
            height={213}
            className="hidden h-8 w-auto dark:block"
          />
        </>
      );
    default:
      return null;
  }
}
