import type { Dictionary, ToolCopy } from "@/lib/i18n/types";

export type CalculatorProps = {
  copy: ToolCopy;
  shared: Pick<Dictionary["tools"], "units" | "rangeJoin" | "copyLabel" | "copiedLabel">;
  locale: string;
  currency: string;
};
