import qrcode from "qrcode-generator";

export const slugs = {
  "pt-BR": "gerador-de-qr-code",
  en: "qr-code-generator",
};

export type Level = "L" | "M" | "Q" | "H";

qrcode.stringToBytes = (text: string) => Array.from(new TextEncoder().encode(text));

export function qrMatrix(text: string, level: Level) {
  const code = qrcode(0, level);
  code.addData(text, "Byte");
  code.make();
  const size = code.getModuleCount();
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, col) => code.isDark(row, col)),
  );
}

export function qrPath(matrix: boolean[][], margin: number) {
  let path = "";
  matrix.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      if (!row[x]) {
        x++;
        continue;
      }
      const start = x;
      while (x < row.length && row[x]) x++;
      path += `M${start + margin} ${y + margin}h${x - start}v1h${start - x}z`;
    }
  });
  return path;
}

export function qrSvg(matrix: boolean[][], margin = 4, dark = "#000000", light = "#ffffff") {
  const size = matrix.length + margin * 2;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges">` +
    `<rect width="${size}" height="${size}" fill="${light}"/>` +
    `<path d="${qrPath(matrix, margin)}" fill="${dark}"/></svg>`
  );
}
