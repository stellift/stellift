import "server-only";
import { notFound } from "next/navigation";
import { isLocale } from "./config";
import type { Dictionary } from "./types";

const dictionaries = {
  "pt-BR": () => import("./pt-BR").then((m) => m.ptBR),
  en: () => import("./en").then((m) => m.en),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (!isLocale(locale)) notFound();
  return dictionaries[locale]();
}

export function altLanguages(path = "") {
  return {
    "pt-BR": `/pt-BR${path}`,
    en: `/en${path}`,
    "x-default": `/pt-BR${path}`,
  };
}
