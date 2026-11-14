import type { Metadata } from "next";
import { siteUrl } from "@/lib/i18n/config";
import * as doctors from "@/app/[lang]/[slug]/_pages/doctors/data";

export function doctorsPath() {
  return `/${doctors.locale}/${doctors.slug}`;
}

export function doctorsMetadata(): Metadata {
  const path = doctorsPath();

  return {
    metadataBase: new URL(siteUrl),
    title: doctors.metaTitle,
    description: doctors.metaDescription,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: path,
      languages: { [doctors.locale]: path },
    },
    openGraph: {
      title: doctors.metaTitle,
      description: doctors.metaDescription,
      type: "website",
      url: path,
      siteName: "stellift",
      locale: "pt_BR",
      images: [
        {
          url: "/shots/exemplo-clinica.jpg",
          width: 1280,
          height: 800,
          alt: "Exemplo de landing page de clínica de dermatologia feita pela stellift",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doctors.metaTitle,
      description: doctors.metaDescription,
      images: ["/shots/exemplo-clinica.jpg"],
    },
  };
}
