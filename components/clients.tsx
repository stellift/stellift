import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { GoogleLogo, MozillaLogo, WooviLogo } from "@/components/brand-logos";
import type { Dictionary } from "@/lib/i18n/types";

export default function Clients({ dict }: { dict: Dictionary }) {
  return (
    <section id="clients" aria-labelledby="clients-title" className="border-b-2 border-rule">
      <div className="mx-auto max-w-[96rem] px-5 pt-14 sm:px-8 sm:pt-20">
        <SectionHeading id="clients-title" title={dict.ui.clients.title} />
      </div>

      {/* Células de largura fixa em malha: a célula encolhe, o campo não reflui. */}
      <ul className="mt-10 field border-t-2 border-rule sm:mt-14">
        {dict.clients.map((client) => (
          <li
            key={client.name}
            className="col-span-6 flex min-h-[13rem] flex-col justify-between border-b-2 border-rule p-5 even:border-r-0 sm:p-6 lg:col-span-3 lg:border-r-2 lg:even:border-r-2 lg:[&:nth-child(4n)]:border-r-0 [&:nth-child(odd)]:border-r-2"
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-ink-3">
              {client.name}
            </p>

            <div className="flex h-12 items-center">
              <ClientLogo client={client} />
            </div>

            <p className="min-h-[2.5rem] text-[13px] leading-[1.45] text-ink-2">
              {client.note}
            </p>
          </li>
        ))}
      </ul>

      <p className="mx-auto max-w-[96rem] px-5 py-6 text-[12px] leading-[1.6] text-ink-3 sm:px-8">
        {dict.ui.clients.footnote}
      </p>
    </section>
  );
}

function ClientLogo({ client }: { client: Dictionary["clients"][number] }) {
  switch (client.logo) {
    case "google":
      return <GoogleLogo className="h-7 w-auto max-w-full" />;
    case "mozilla":
      return <MozillaLogo className="h-7 w-auto max-w-full text-ink" />;
    case "woovi":
      return <WooviLogo className="h-7 w-auto max-w-full text-ink" />;
    case "floprobux":
      return (
        <Image
          src="/logos/floprobux-icon.webp"
          alt=""
          width={192}
          height={179}
          className="h-9 w-auto"
        />
      );
    default:
      return null;
  }
}
