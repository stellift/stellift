export const slugs = {
  "pt-BR": "gerador-de-slug",
  en: "slug-generator",
};

export function slugify(text: string, separator: "-" | "_") {
  return text
    .normalize("NFD")
    .replace(/\p{Mn}/gu, "")
    .replace(/ß/g, "ss")
    .replace(/[æÆ]/g, "ae")
    .replace(/[øØ]/g, "o")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, separator)
    .replace(new RegExp(`^\\${separator}+|\\${separator}+$`, "g"), "");
}
