export const slugs = {
  "pt-BR": "conversor-de-maiusculas-e-minusculas",
  en: "case-converter",
};

export const caseIds = [
  "upper",
  "lower",
  "title",
  "sentence",
  "camel",
  "pascal",
  "snake",
  "kebab",
  "constant",
] as const;

export type CaseId = (typeof caseIds)[number];

function words(text: string) {
  return (
    text
      .normalize("NFD")
      .replace(/\p{Mn}/gu, "")
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .match(/[A-Za-z0-9]+/g) ?? []
  ).map((word) => word.toLowerCase());
}

function capitalize(word: string, locale: string) {
  return word.charAt(0).toLocaleUpperCase(locale) + word.slice(1);
}

export function convertCase(text: string, id: CaseId, locale: string) {
  switch (id) {
    case "upper":
      return text.toLocaleUpperCase(locale);
    case "lower":
      return text.toLocaleLowerCase(locale);
    case "title":
      return text
        .toLocaleLowerCase(locale)
        .replace(/(^|[\s(["'-])(\p{L})/gu, (_, before, letter) => before + letter.toLocaleUpperCase(locale));
    case "sentence":
      return text
        .toLocaleLowerCase(locale)
        .replace(/(^\s*|[.!?]\s+)(\p{L})/gu, (_, before, letter) => before + letter.toLocaleUpperCase(locale));
    case "camel":
      return words(text)
        .map((word, i) => (i === 0 ? word : capitalize(word, locale)))
        .join("");
    case "pascal":
      return words(text)
        .map((word) => capitalize(word, locale))
        .join("");
    case "snake":
      return words(text).join("_");
    case "kebab":
      return words(text).join("-");
    case "constant":
      return words(text).join("_").toUpperCase();
  }
}
