export const slugs = {
  "pt-BR": "imagem-para-base64",
  en: "image-to-base64",
};

export function readAsDataUrl(file: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function snippets(dataUrl: string, alt: string) {
  return {
    dataUrl,
    base64: dataUrl.slice(dataUrl.indexOf(",") + 1),
    img: `<img src="${dataUrl}" alt="${alt.replace(/"/g, "&quot;")}">`,
    css: `background-image: url("${dataUrl}");`,
  };
}
