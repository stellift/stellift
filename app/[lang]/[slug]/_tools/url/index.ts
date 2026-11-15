export const slugs = {
  "pt-BR": "codificar-e-decodificar-url",
  en: "url-encode-decode",
};

export function encodeUrl(text: string, whole: boolean) {
  return whole ? encodeURI(text) : encodeURIComponent(text);
}

export function decodeUrl(text: string, plusAsSpace: boolean) {
  return decodeURIComponent(plusAsSpace ? text.replace(/\+/g, " ") : text);
}
