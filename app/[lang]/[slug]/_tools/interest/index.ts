export const slugs = {
  "pt-BR": "calculadora-de-juros-compostos",
  en: "compound-interest-calculator",
};

export function compound(
  principal: number,
  monthly: number,
  ratePercent: number,
  rateIsYearly: boolean,
  months: number,
) {
  const rate = rateIsYearly ? (1 + ratePercent / 100) ** (1 / 12) - 1 : ratePercent / 100;
  const rows: { month: number; invested: number; balance: number }[] = [];
  let balance = principal;
  for (let month = 1; month <= months; month++) {
    balance = balance * (1 + rate) + monthly;
    if (month % 12 === 0 || month === months) {
      rows.push({ month, invested: principal + monthly * month, balance });
    }
  }
  const invested = principal + monthly * months;
  return { balance, invested, interest: balance - invested, monthlyRate: rate * 100, rows };
}
