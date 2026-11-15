export const slugs = {
  "pt-BR": "codificar-html-entities",
  en: "html-entities-encoder",
};

const basic: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function encodeEntities(text: string, nonAscii: boolean) {
  let out = text.replace(/[&<>"']/g, (char) => basic[char]);
  if (nonAscii) {
    out = Array.from(out, (char) => {
      const code = char.codePointAt(0) ?? 0;
      return code > 126 ? `&#${code};` : char;
    }).join("");
  }
  return out;
}

export function decodeEntities(text: string) {
  const doc = new DOMParser().parseFromString(`<!doctype html><body><textarea>${text.replace(/<\/textarea/gi, "&lt;/textarea")}</textarea>`, "text/html");
  return doc.querySelector("textarea")?.value ?? "";
}
