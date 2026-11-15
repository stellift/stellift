export const slugs = {
  "pt-BR": "gerador-de-uuid",
  en: "uuid-generator",
};

function hex(bytes: Uint8Array) {
  const h = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

export function uuidV4() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  return hex(bytes);
}

let lastTime = -1;
let lastCounter = 0;

export function uuidV7(now: number = Date.now()) {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  let time = now;
  let counter = ((bytes[6] & 0x07) << 8) | bytes[7];
  if (time <= lastTime) {
    time = lastTime;
    counter = lastCounter + 1;
    if (counter > 0xfff) {
      time += 1;
      counter = 0;
    }
  }
  lastTime = time;
  lastCounter = counter;
  for (let i = 5; i >= 0; i--) {
    bytes[i] = time % 256;
    time = Math.floor(time / 256);
  }
  bytes[6] = 0x70 | (counter >> 8);
  bytes[7] = counter & 0xff;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  return hex(bytes);
}
