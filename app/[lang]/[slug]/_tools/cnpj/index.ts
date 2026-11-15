export const slugs = {
  "pt-BR": "gerador-de-cnpj",
  en: "cnpj-generator",
};

const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function value(char: string) {
  return char.charCodeAt(0) - 48;
}

function checkDigit(chars: string) {
  let weight = 2;
  let sum = 0;
  for (let i = chars.length - 1; i >= 0; i--) {
    sum += value(chars[i]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  const rest = sum % 11;
  return rest < 2 ? 0 : 11 - rest;
}

export function formatCnpj(raw: string) {
  return raw.replace(
    /^([0-9A-Z]{2})([0-9A-Z]{3})([0-9A-Z]{3})([0-9A-Z]{4})(\d{2})$/,
    "$1.$2.$3/$4-$5",
  );
}

export function cnpjWithDigits(base: string) {
  const first = checkDigit(base);
  const second = checkDigit(base + first);
  return `${base}${first}${second}`;
}

export function generateCnpj(alphanumeric: boolean, random: () => number = Math.random) {
  const pool = alphanumeric ? ALPHANUMERIC : ALPHANUMERIC.slice(0, 10);
  const pick = () => pool[Math.floor(random() * pool.length)];
  let root: string;
  do {
    root = Array.from({ length: 8 }, pick).join("");
  } while (/^(.)\1{7}$/.test(root));
  const branch = alphanumeric ? Array.from({ length: 4 }, pick).join("") : "0001";
  return cnpjWithDigits(root + branch);
}

export function isValidCnpj(input: string) {
  const raw = input.replace(/[.\-/\s]/g, "").toUpperCase();
  if (!/^[0-9A-Z]{12}\d{2}$/.test(raw)) return false;
  if (/^(\d)\1{13}$/.test(raw)) return false;
  return cnpjWithDigits(raw.slice(0, 12)) === raw;
}
