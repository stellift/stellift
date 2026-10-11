import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { GoogleLogo, MozillaLogo, WooviLogo } from "@/components/brand-logos";
import type { Dictionary } from "@/lib/i18n/types";

export default function Clients({ dict }: { dict: Dictionary }) {
  return (
    <section id="clients" aria-labelledby="clients-title" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          id="clients-title"
          title={dict.ui.clients.title}
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {dict.clients.map((client) => (
            <li key={client.name} className="cell flex flex-col gap-5 p-6">
              <div className="flex h-9 items-center">
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

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ink-muted">
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
      return <WooviLogo className="h-6 w-auto max-w-full text-ink" />;
    case "floprobux":
      return (
        <>
          <Image
            src="/logos/floprobux-icon.webp"
            alt=""
            width={192}
            height={179}
            className="h-8 w-auto dark:hidden"
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
