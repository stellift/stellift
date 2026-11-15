export const slugs = {
  "pt-BR": "conversor-de-bases-numericas",
  en: "number-base-converter",
};

export const bases = [2, 8, 10, 16] as const;

export type Base = (typeof bases)[number];

const prefixes: Record<Base, RegExp> = {
  2: /^0b/i,
  8: /^0o/i,
  10: /^$/,
  16: /^0x/i,
};

const digits: Record<Base, RegExp> = {
  2: /^[01]+$/,
  8: /^[0-7]+$/,
  10: /^\d+$/,
  16: /^[0-9a-f]+$/i,
};

const zero = BigInt(0);

export function parseInBase(input: string, base: Base) {
  let text = input.trim().replace(/[\s_]/g, "");
  const negative = text.startsWith("-");
  if (negative) text = text.slice(1);
  text = text.replace(prefixes[base], "");
  if (!digits[base].test(text)) return null;
  let value = zero;
  const big = BigInt(base);
  for (const char of text.toLowerCase()) value = value * big + BigInt(Number.parseInt(char, 16));
  return negative ? -value : value;
}

export function formatInBase(value: bigint, base: Base) {
  const negative = value < zero;
  const text = (negative ? -value : value).toString(base);
  return (negative ? "-" : "") + (base === 16 ? text.toUpperCase() : text);
}
