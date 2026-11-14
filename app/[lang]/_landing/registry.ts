import { doctors } from "@/app/[lang]/landing-page-para-medicos/content";
import { dentists } from "@/app/[lang]/landing-page-para-dentistas/content";
import { lawyers } from "@/app/[lang]/landing-page-para-advogados/content";
import { realEstate } from "@/app/[lang]/landing-page-para-imobiliarias/content";
import type { Niche } from "@/app/[lang]/_landing/types";

export const landingLocale = "pt-BR";

export const landings: Niche[] = [doctors, dentists, lawyers, realEstate];

export function landingPath(niche: Niche) {
  return `/${landingLocale}/${niche.slug}`;
}
