export const slugs = {
  "pt-BR": "gerador-de-senha",
  en: "password-generator",
};

export const characterSets = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789",
  symbols: "!@#$%&*()-_=+[]{};:,.?/",
};

export type CharacterSet = keyof typeof characterSets;

function randomIndex(size: number) {
  const limit = Math.floor(0x100000000 / size) * size;
  const buffer = new Uint32Array(1);
  do {
    crypto.getRandomValues(buffer);
  } while (buffer[0] >= limit);
  return buffer[0] % size;
}

export function generatePassword(length: number, sets: CharacterSet[]) {
  if (sets.length === 0) return "";
  const size = Math.max(length, sets.length);
  const pool = sets.map((set) => characterSets[set]).join("");
  for (;;) {
    const chars = Array.from({ length: size }, () => pool[randomIndex(pool.length)]);
    const password = chars.join("");
    if (sets.every((set) => chars.some((char) => characterSets[set].includes(char)))) {
      return password;
    }
  }
}
