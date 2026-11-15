export const slugs = {
  "pt-BR": "conversor-csv-para-json",
  en: "csv-to-json-converter",
};

export type Delimiter = "," | ";" | "\t";

export function detectDelimiter(text: string): Delimiter {
  const first = text.split(/\r?\n/, 1)[0] ?? "";
  const counts = ([",", ";", "\t"] as const).map((d) => [d, first.split(d).length] as const);
  return counts.reduce((best, item) => (item[1] > best[1] ? item : best))[0];
}

export function parseCsv(text: string, delimiter: Delimiter) {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"' && field === "") {
      quoted = true;
    } else if (char === delimiter) {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
}

export function csvToJson(text: string, delimiter: Delimiter) {
  const [header, ...rows] = parseCsv(text, delimiter);
  if (!header) return [];
  return rows.map((row) =>
    Object.fromEntries(header.map((key, i) => [key || `column${i + 1}`, row[i] ?? ""])),
  );
}

function cell(value: unknown, delimiter: Delimiter) {
  const text =
    value === null || value === undefined
      ? ""
      : typeof value === "object"
        ? JSON.stringify(value)
        : String(value);
  return /["\r\n]/.test(text) || text.includes(delimiter) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function jsonToCsv(input: string, delimiter: Delimiter) {
  const data = JSON.parse(input);
  const list: unknown[] = Array.isArray(data) ? data : [data];
  if (!list.every((item) => item !== null && typeof item === "object" && !Array.isArray(item))) {
    throw new TypeError("not a list of objects");
  }
  const records = list as Record<string, unknown>[];
  const keys = [...new Set(records.flatMap((item) => Object.keys(item)))];
  return [keys, ...records.map((item) => keys.map((key) => item[key]))]
    .map((row) => row.map((value) => cell(value, delimiter)).join(delimiter))
    .join("\n");
}
