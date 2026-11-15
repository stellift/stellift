import { decodeBase64 } from "@/app/[lang]/[slug]/_tools/base64";

export const slugs = {
  "pt-BR": "decodificador-de-jwt",
  en: "jwt-decoder",
};

export type DecodedJwt = {
  header: unknown;
  payload: unknown;
  times: { claim: "iat" | "nbf" | "exp"; date: Date }[];
};

export function decodeJwt(token: string): DecodedJwt | null {
  const parts = token.trim().split(".");
  if (parts.length !== 3 || parts.some((part, i) => i < 2 && part === "")) return null;
  try {
    const header = JSON.parse(decodeBase64(parts[0]));
    const payload = JSON.parse(decodeBase64(parts[1]));
    const times = (["iat", "nbf", "exp"] as const)
      .filter((claim) => typeof payload?.[claim] === "number")
      .map((claim) => ({ claim, date: new Date(payload[claim] * 1000) }));
    return { header, payload, times };
  } catch {
    return null;
  }
}
