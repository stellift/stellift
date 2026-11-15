export const slugs = {
  "pt-BR": "calculadora-de-margem-e-markup",
  en: "margin-markup-calculator",
};

export function fromPrice(cost: number, price: number) {
  const profit = price - cost;
  return {
    profit,
    margin: price === 0 ? null : (profit / price) * 100,
    markup: cost === 0 ? null : (profit / cost) * 100,
  };
}

export function priceForMargin(cost: number, marginPercent: number) {
  return marginPercent >= 100 ? null : cost / (1 - marginPercent / 100);
}

export function priceForMarkup(cost: number, markupPercent: number) {
  return cost * (1 + markupPercent / 100);
}
