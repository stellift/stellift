export const slugs = {
  "pt-BR": "comparar-textos",
  en: "text-diff",
};

export type DiffLine = { type: "same" | "added" | "removed"; text: string };

export const maxLines = 3000;

export function diffLines(before: string, after: string, ignoreSpace: boolean): DiffLine[] | null {
  const a = before === "" ? [] : before.split(/\r\n|\r|\n/);
  const b = after === "" ? [] : after.split(/\r\n|\r|\n/);
  if (a.length > maxLines || b.length > maxLines) return null;
  const key = (line: string) => (ignoreSpace ? line.trim().replace(/\s+/g, " ") : line);
  const ka = a.map(key);
  const kb = b.map(key);
  const n = a.length;
  const m = b.length;
  const width = m + 1;
  const table = new Uint16Array((n + 1) * width);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      table[i * width + j] =
        ka[i] === kb[j]
          ? table[(i + 1) * width + j + 1] + 1
          : Math.max(table[(i + 1) * width + j], table[i * width + j + 1]);
    }
  }
  const lines: DiffLine[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (ka[i] === kb[j]) {
      lines.push({ type: "same", text: b[j] });
      i++;
      j++;
    } else if (table[(i + 1) * width + j] >= table[i * width + j + 1]) {
      lines.push({ type: "removed", text: a[i++] });
    } else {
      lines.push({ type: "added", text: b[j++] });
    }
  }
  while (i < n) lines.push({ type: "removed", text: a[i++] });
  while (j < m) lines.push({ type: "added", text: b[j++] });
  return lines;
}
