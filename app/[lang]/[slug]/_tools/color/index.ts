export const slugs = {
  "pt-BR": "conversor-de-cores",
  en: "color-converter",
};

export type Rgba = { r: number; g: number; b: number; a: number };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function channel(text: string, scale: number) {
  return text.endsWith("%") ? (Number.parseFloat(text) / 100) * scale : Number.parseFloat(text);
}

function alpha(text: string | undefined) {
  if (text === undefined) return 1;
  return clamp(text.endsWith("%") ? Number.parseFloat(text) / 100 : Number.parseFloat(text), 0, 1);
}

function hslToRgb(h: number, s: number, l: number) {
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return { r: f(0) * 255, g: f(8) * 255, b: f(4) * 255 };
}

export function parseColor(input: string): Rgba | null {
  const text = input.trim().toLowerCase();
  const hex = text.match(/^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/);
  if (hex) {
    let h = hex[1];
    if (h.length <= 4) h = [...h].map((c) => c + c).join("");
    const n = (i: number) => Number.parseInt(h.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
  }
  const fn = text.match(/^(rgba?|hsla?)\((.*)\)$/);
  if (!fn) return null;
  const parts = fn[2].split(/[\s,/]+/).filter(Boolean);
  if (parts.length < 3 || parts.length > 4) return null;
  if (parts.some((part) => !/^-?\d*\.?\d+(%|deg)?$/.test(part))) return null;
  if (fn[1].startsWith("rgb")) {
    const [r, g, b] = parts.slice(0, 3).map((part) => clamp(channel(part, 255), 0, 255));
    return { r, g, b, a: alpha(parts[3]) };
  }
  const h = ((Number.parseFloat(parts[0]) % 360) + 360) % 360;
  const s = clamp(Number.parseFloat(parts[1]) / 100, 0, 1);
  const l = clamp(Number.parseFloat(parts[2]) / 100, 0, 1);
  return { ...hslToRgb(h, s, l), a: alpha(parts[3]) };
}

const round = (value: number, places = 0) => {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
};

export function toHex({ r, g, b, a }: Rgba) {
  const two = (value: number) => Math.round(value).toString(16).padStart(2, "0");
  return `#${two(r)}${two(g)}${two(b)}${a < 1 ? two(a * 255) : ""}`.toUpperCase();
}

export function toRgb({ r, g, b, a }: Rgba) {
  const base = `${round(r)} ${round(g)} ${round(b)}`;
  return a < 1 ? `rgb(${base} / ${round(a, 2)})` : `rgb(${base})`;
}

export function toHsl({ r, g, b, a }: Rgba) {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  let s = 0;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h = (h * 60 + 360) % 360;
  }
  const base = `${round(h)} ${round(s * 100)}% ${round(l * 100)}%`;
  return a < 1 ? `hsl(${base} / ${round(a, 2)})` : `hsl(${base})`;
}

function luminance({ r, g, b }: Rgba) {
  const linear = (value: number) => {
    const c = Math.round(value) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

export function contrast(a: Rgba, b: Rgba) {
  const [high, low] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (high + 0.05) / (low + 0.05);
}
