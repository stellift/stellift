export const slugs = {
  "pt-BR": "ordenar-e-remover-linhas-duplicadas",
  en: "sort-and-dedupe-lines",
};

export type Order = "keep" | "asc" | "desc" | "reverse";

export type LineOptions = {
  trim: boolean;
  dropEmpty: boolean;
  dedupe: boolean;
  ignoreCase: boolean;
  order: Order;
};

export function processLines(text: string, options: LineOptions, locale: string) {
  let lines = text === "" ? [] : text.split(/\r\n|\r|\n/);
  if (options.trim) lines = lines.map((line) => line.trim());
  if (options.dropEmpty) lines = lines.filter((line) => line.trim() !== "");
  if (options.dedupe) {
    const seen = new Set<string>();
    lines = lines.filter((line) => {
      const key = options.ignoreCase ? line.toLocaleLowerCase(locale) : line;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  const collator = new Intl.Collator(locale, {
    numeric: true,
    sensitivity: options.ignoreCase ? "base" : "variant",
  });
  if (options.order === "asc") lines = [...lines].sort(collator.compare);
  if (options.order === "desc") lines = [...lines].sort((a, b) => collator.compare(b, a));
  if (options.order === "reverse") lines = [...lines].reverse();
  return lines;
}
