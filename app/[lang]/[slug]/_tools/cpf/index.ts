export const slugs = {
  "pt-BR": "gerador-de-cpf",
  en: "cpf-generator",
};

function checkDigit(digits: number[]) {
  const weightStart = digits.length + 1;
  const sum = digits.reduce((total, digit, i) => total + digit * (weightStart - i), 0);
  const rest = sum % 11;
  return rest < 2 ? 0 : 11 - rest;
}

export function formatCpf(digits: string) {
  return digits.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

export function generateCpf(random: () => number = Math.random) {
  let base: number[];
  do {
    base = Array.from({ length: 9 }, () => Math.floor(random() * 10));
  } while (base.every((digit) => digit === base[0]));
  const first = checkDigit(base);
  const second = checkDigit([...base, first]);
  return [...base, first, second].join("");
}

export function isValidCpf(input: string) {
  const digits = input.replace(/[.\-\s]/g, "");
  if (!/^\d{11}$/.test(digits)) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false;
  const numbers = [...digits].map(Number);
  const first = checkDigit(numbers.slice(0, 9));
  const second = checkDigit(numbers.slice(0, 10));
  return first === numbers[9] && second === numbers[10];
}
