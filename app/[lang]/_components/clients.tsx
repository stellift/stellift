import Image from "next/image";
import SectionHeading from "@/app/[lang]/_components/section-heading";
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
  const count = dict.clients.length;
  const wide = (5 - (count % 5)) % 5;
  const medium = (2 - (count % 2)) % 2;

  return (
    <section id="clients" aria-labelledby="clients-title" className="border-b border-line">
      <div className="shell py-20 sm:py-28">
        <SectionHeading
          id="clients-title"
          index={index}
          eyebrow={eyebrow}
          title={dict.ui.clients.title}
        />

        <ul className="grid-ruled reveal mt-14 sm:grid-cols-2 lg:grid-cols-5">
          {dict.clients.map((client) => (
            <li key={client.name} className="cell flex flex-col justify-between gap-6 p-7">
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

          {Array.from({ length: wide }, (_, i) => (
            <li key={`wide-${i}`} aria-hidden className="hidden bg-canvas lg:block" />
          ))}
          {Array.from({ length: medium }, (_, i) => (
            <li
              key={`medium-${i}`}
              aria-hidden
              className="hidden bg-canvas sm:block lg:hidden"
            />
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-faint">
          {dict.ui.clients.footnote}
        </p>
      </div>
    </section>
  );
}

function ClientLogo({ client }: { client: Dictionary["clients"][number] }) {
  switch (client.logo) {
    case "google":
      return <GoogleLogo className="h-5 w-auto max-w-full" />;
    case "mozilla":
      return <MozillaLogo className="h-5 w-auto max-w-full text-ink" />;
    case "woovi":
      return <WooviLogo className="h-7 w-auto max-w-full text-ink" />;
    case "servecommand":
      return (
        <span aria-hidden className="flex items-center gap-2">
          <ServeCommandLogo className="size-7 shrink-0" />
          <span className="truncate text-base font-semibold tracking-tight text-ink">
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
            className="h-7 w-auto dark:hidden"
          />
          <Image
            src="/logos/floprobux.webp"
            alt=""
            width={560}
            height={213}
            className="hidden h-7 w-auto dark:block"
          />
        </>
      );
    default:
      return null;
  }
}
