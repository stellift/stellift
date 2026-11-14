import Link from "next/link";
import { lang } from "next/root-params";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";

export default async function NotFound() {
  const current = await lang();
  const locale = isLocale(current) ? current : defaultLocale;
  const dict = await getDictionary(locale);
  const copy = dict.ui.notFound;

  return (
    <section className="border-b border-line">
      <div className="shell py-24 sm:py-32">
        <p className="index">404</p>
        <h1 className="mt-6 max-w-2xl text-balance font-serif text-[2.5rem] leading-[1.05] text-ink sm:text-[3.5rem]">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{copy.text}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={`/${locale}`} className="btn btn-primary">
            {copy.home}
          </Link>
          <a href={`/${locale}#contact`} className="btn btn-outline">
            {copy.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
