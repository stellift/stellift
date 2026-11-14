import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import Statement from "@/app/[lang]/_components/statement";
import Clients from "@/app/[lang]/_components/clients";
import Contact from "@/app/[lang]/_components/contact";
import Hero from "@/app/[lang]/_components/hero";
import Portfolio from "@/app/[lang]/_components/portfolio";
import JsonLd from "@/app/[lang]/_components/json-ld";
import Mission from "@/app/[lang]/_components/mission";
import Services from "@/app/[lang]/_components/services";
import Talent from "@/app/[lang]/_components/talent";
import ToolsSection from "@/app/[lang]/_components/tools-section";
import { isLocale, locales, siteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/server";

export default async function Home() {
  const locale = await lang();
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  const organizationId = `${siteUrl}/#organization`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: dict.site.name,
        description: dict.site.metaDescription,
        slogan: dict.mission.title,
        url: siteUrl,
        logo: `${siteUrl}/logos/stellift.svg`,
        image: `${siteUrl}/${locale}/opengraph-image`,
        email: dict.site.email,
        sameAs: [dict.site.linkedin, dict.site.github],
        knowsAbout: dict.services.map((service) => service.title),
        makesOffer: dict.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            provider: { "@id": organizationId },
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: dict.site.name,
        description: dict.site.metaDescription,
        publisher: { "@id": organizationId },
        inLanguage: locales,
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/${locale}#webpage`,
        url: `${siteUrl}/${locale}`,
        name: dict.site.metaTitle,
        description: dict.site.metaDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": organizationId },
        inLanguage: dict.htmlLang,
      },
    ],
  };

  const label = (href: string) =>
    dict.nav.find((item) => item.href === href)?.label ?? "";

  return (
    <>
      <JsonLd data={structuredData} />
      <Hero dict={dict} />
      <Clients dict={dict} index="01" eyebrow={label("#clients")} />
      <Services dict={dict} index="02" eyebrow={label("#services")} />
      <Portfolio dict={dict} index="03" eyebrow={label("#portfolio")} />
      <Statement dict={dict} index="04" eyebrow={label("#about")} />
      <ToolsSection
        dict={dict}
        lang={locale}
        index="05"
        eyebrow={label("#tools")}
      />
      <Talent dict={dict} index="06" eyebrow={label("#talent")} />
      <Mission dict={dict} index="07" eyebrow={label("#mission")} />
      <Contact dict={dict} index="08" eyebrow={label("#contact")} />
    </>
  );
}
