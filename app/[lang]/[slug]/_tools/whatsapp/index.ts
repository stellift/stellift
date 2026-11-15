export const slugs = {
  "pt-BR": "gerador-de-link-whatsapp",
  en: "whatsapp-link-generator",
};

export function whatsappLink(country: string, phone: string, message: string) {
  const text = message.trim() === "" ? "" : `?text=${encodeURIComponent(message)}`;
  if (phone.replace(/\D/g, "") === "") return text ? `https://wa.me/${text}` : null;
  const digits = `${country}${phone}`.replace(/\D/g, "").replace(/^0+/, "");
  if (digits.length < 8 || digits.length > 15) return null;
  return `https://wa.me/${digits}${text}`;
}
