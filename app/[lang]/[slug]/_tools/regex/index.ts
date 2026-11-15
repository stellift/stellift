export const slugs = {
  "pt-BR": "testador-de-regex",
  en: "regex-tester",
};

export type RegexMatch = { index: number; text: string; groups: (string | undefined)[] };

export type RegexResult =
  | { ok: true; matches: RegexMatch[]; replaced: string; truncated: boolean }
  | { ok: false; error: string };

const limit = 1000;

export function runRegex(
  pattern: string,
  flags: string,
  text: string,
  replacement: string,
): RegexResult {
  let regex: RegExp;
  try {
    regex = new RegExp(pattern, flags.includes("g") ? flags : `${flags}g`);
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
  const matches: RegexMatch[] = [];
  let truncated = false;
  for (const match of text.matchAll(regex)) {
    if (matches.length === limit) {
      truncated = true;
      break;
    }
    matches.push({ index: match.index, text: match[0], groups: match.slice(1) });
    if (!flags.includes("g")) break;
  }
  const single = new RegExp(pattern, flags);
  return { ok: true, matches, replaced: text.replace(single, replacement), truncated };
}

export function segments(text: string, matches: RegexMatch[]) {
  const parts: { text: string; match: boolean }[] = [];
  let cursor = 0;
  for (const match of matches) {
    if (match.text === "") continue;
    if (match.index > cursor) parts.push({ text: text.slice(cursor, match.index), match: false });
    parts.push({ text: match.text, match: true });
    cursor = match.index + match.text.length;
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor), match: false });
  return parts;
}
