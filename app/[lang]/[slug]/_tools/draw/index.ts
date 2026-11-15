export const slugs = {
  "pt-BR": "sorteador-de-numeros-e-nomes",
  en: "random-number-and-name-picker",
};

export function randomBelow(size: number) {
  if (size <= 1) return 0;
  if (size > 0x100000000) throw new RangeError("range too large");
  const limit = Math.floor(0x100000000 / size) * size;
  const buffer = new Uint32Array(1);
  do {
    crypto.getRandomValues(buffer);
  } while (buffer[0] >= limit);
  return buffer[0] % size;
}

export function drawNumbers(min: number, max: number, count: number, unique: boolean) {
  const low = Math.ceil(Math.min(min, max));
  const high = Math.floor(Math.max(min, max));
  const size = high - low + 1;
  if (unique && count > size) return null;
  const picked: number[] = [];
  const seen = new Set<number>();
  while (picked.length < count) {
    const value = low + randomBelow(size);
    if (unique && seen.has(value)) continue;
    seen.add(value);
    picked.push(value);
  }
  return picked;
}

export function drawNames(names: string[], count: number) {
  const pool = [...names];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = randomBelow(i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
