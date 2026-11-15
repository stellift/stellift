export const slugs = {
  "pt-BR": "contador-de-caracteres",
  en: "character-counter",
};

export function countText(text: string, locale: string) {
  const graphemes = [...new Intl.Segmenter(locale, { granularity: "grapheme" }).segment(text)];
  const words = [...new Intl.Segmenter(locale, { granularity: "word" }).segment(text)].filter(
    (segment) => segment.isWordLike,
  ).length;
  return {
    characters: graphemes.length,
    noSpaces: graphemes.filter((g) => !/^\s+$/.test(g.segment)).length,
    words,
    lines: text === "" ? 0 : text.split(/\r\n|\r|\n/).length,
    bytes: new TextEncoder().encode(text).length,
  };
}
