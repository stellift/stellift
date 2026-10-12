import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import About from "@/components/about";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import JsonLd from "@/components/json-ld";
import Services from "@/components/services";
import ToolsSection from "@/components/tools-section";
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
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
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
        name: `${dict.site.name} · ${dict.site.tagline}`,
        description: dict.site.metaDescription,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": organizationId },
        inLanguage: dict.htmlLang,
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <Hero dict={dict} />
      <Services dict={dict} />
      <Clients dict={dict} />
      <Portfolio dict={dict} />
      <ToolsSection dict={dict} lang={locale} />
      <About dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
