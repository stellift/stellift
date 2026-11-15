export const slugs = {
  "pt-BR": "formatador-de-json",
  en: "json-formatter",
};

export type JsonResult = { ok: true; text: string } | { ok: false; error: string };

export function formatJson(input: string, indent: number | null): JsonResult {
  try {
    const parsed = JSON.parse(input);
    return { ok: true, text: JSON.stringify(parsed, null, indent ?? undefined) };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}
