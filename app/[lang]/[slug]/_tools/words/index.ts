export const slugs = {
  "pt-BR": "valor-por-extenso",
  en: "number-to-words",
};

const ptUnits = [
  "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
  "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove",
];
const ptTens = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
const ptHundreds = [
  "", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos",
  "oitocentos", "novecentos",
];
const ptScales: [string, string][] = [
  ["", ""],
  ["mil", "mil"],
  ["milhão", "milhões"],
  ["bilhão", "bilhões"],
  ["trilhão", "trilhões"],
  ["quatrilhão", "quatrilhões"],
];

function ptBelowThousand(n: number) {
  if (n === 100) return "cem";
  const parts: string[] = [];
  const h = Math.floor(n / 100);
  const rest = n % 100;
  if (h) parts.push(ptHundreds[h]);
  if (rest) {
    if (rest < 20) parts.push(ptUnits[rest]);
    else {
      const t = Math.floor(rest / 10);
      const u = rest % 10;
      parts.push(u ? `${ptTens[t]} e ${ptUnits[u]}` : ptTens[t]);
    }
  }
  return parts.join(" e ");
}

function groupsOf(n: bigint) {
  const groups: number[] = [];
  const thousand = BigInt(1000);
  let value = n;
  do {
    groups.push(Number(value % thousand));
    value /= thousand;
  } while (value > BigInt(0));
  return groups;
}

export function ptInteger(n: bigint) {
  if (n === BigInt(0)) return "zero";
  const groups = groupsOf(n);
  if (groups.length > ptScales.length) return null;
  const pieces: { text: string; value: number }[] = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    const g = groups[i];
    if (!g) continue;
    let text: string;
    if (i === 0) text = ptBelowThousand(g);
    else if (i === 1) text = g === 1 ? "mil" : `${ptBelowThousand(g)} mil`;
    else text = `${ptBelowThousand(g)} ${g === 1 ? ptScales[i][0] : ptScales[i][1]}`;
    pieces.push({ text, value: g });
  }
  return pieces
    .map((piece, i) => {
      if (i === 0) return piece.text;
      const last = i === pieces.length - 1;
      const joiner = last && (piece.value < 100 || piece.value % 100 === 0) ? " e " : " ";
      return joiner + piece.text;
    })
    .join("");
}

const enUnits = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
];
const enTens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const enScales = ["", "thousand", "million", "billion", "trillion", "quadrillion"];

function enBelowThousand(n: number) {
  const parts: string[] = [];
  const h = Math.floor(n / 100);
  const rest = n % 100;
  if (h) parts.push(`${enUnits[h]} hundred`);
  if (rest) {
    if (rest < 20) parts.push(enUnits[rest]);
    else {
      const t = Math.floor(rest / 10);
      const u = rest % 10;
      parts.push(u ? `${enTens[t]}-${enUnits[u]}` : enTens[t]);
    }
  }
  return parts.join(" ");
}

export function enInteger(n: bigint) {
  if (n === BigInt(0)) return "zero";
  const groups = groupsOf(n);
  if (groups.length > enScales.length) return null;
  const pieces: string[] = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    if (!groups[i]) continue;
    pieces.push(i ? `${enBelowThousand(groups[i])} ${enScales[i]}` : enBelowThousand(groups[i]));
  }
  return pieces.join(" ");
}

export function parseAmount(input: string) {
  const clean = input.trim().replace(/\s/g, "").replace(/^R\$|^\$/, "");
  if (clean === "") return null;
  let normalized: string;
  if (/^\d{1,3}(\.\d{3})+(,\d{1,2})?$/.test(clean) || /^\d+,\d{1,2}$/.test(clean)) {
    normalized = clean.replace(/\./g, "").replace(",", ".");
  } else if (/^\d{1,3}(,\d{3})+(\.\d{1,2})?$/.test(clean)) {
    normalized = clean.replace(/,/g, "");
  } else if (/^\d+(\.\d{1,2})?$/.test(clean)) {
    normalized = clean;
  } else {
    return null;
  }
  const [whole, fraction = ""] = normalized.split(".");
  return { whole: BigInt(whole), cents: Number(fraction.padEnd(2, "0")), fraction };
}

export function amountInWords(input: string, locale: "pt-BR" | "en", currency: boolean) {
  const amount = parseAmount(input);
  if (!amount) return null;
  const { whole, cents } = amount;
  const integer = locale === "pt-BR" ? ptInteger(whole) : enInteger(whole);
  if (integer === null) return null;
  if (!currency) {
    if (/^0*$/.test(amount.fraction)) return integer;
    const zeros = amount.fraction.match(/^0*/)?.[0].length ?? 0;
    const said = (n: bigint) => (locale === "pt-BR" ? ptInteger(n) : enInteger(n));
    const rest = said(BigInt(amount.fraction.replace(/0+$/, "") || "0"));
    const fractionWords = "zero ".repeat(zeros) + rest;
    return `${integer} ${locale === "pt-BR" ? "vírgula" : "point"} ${fractionWords}`;
  }
  const one = whole === BigInt(1);
  const parts: string[] = [];
  if (locale === "pt-BR") {
    if (whole > BigInt(0)) {
      const de = /(ão|ões)$/.test(integer) ? " de" : "";
      parts.push(`${integer}${de} ${one ? "real" : "reais"}`);
    }
    if (cents) parts.push(`${ptInteger(BigInt(cents))} ${cents === 1 ? "centavo" : "centavos"}`);
    return parts.length ? parts.join(" e ") : "zero real";
  }
  if (whole > BigInt(0)) parts.push(`${integer} ${one ? "dollar" : "dollars"}`);
  if (cents) parts.push(`${enInteger(BigInt(cents))} ${cents === 1 ? "cent" : "cents"}`);
  return parts.length ? parts.join(" and ") : "zero dollars";
}
