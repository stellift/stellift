export const slugs = {
  "pt-BR": "cronometro-online",
  en: "online-stopwatch",
};

export function formatElapsed(ms: number, showHundredths = true) {
  const total = Math.max(0, Math.floor(ms / 10));
  const hundredths = total % 100;
  const seconds = Math.floor(total / 100) % 60;
  const minutes = Math.floor(total / 6000) % 60;
  const hours = Math.floor(total / 360000);
  const pad = (n: number) => String(n).padStart(2, "0");
  const main = `${hours ? `${hours}:` : ""}${pad(minutes)}:${pad(seconds)}`;
  return showHundredths ? `${main}.${pad(hundredths)}` : main;
}
