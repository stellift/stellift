import type { ComponentType } from "react";
import Automation from "@/app/[lang]/[slug]/_tools/automation/calculator";
import DowntimeCost from "@/app/[lang]/[slug]/_tools/downtime-cost/calculator";
import Estimate from "@/app/[lang]/[slug]/_tools/estimate/calculator";
import HourlyCost from "@/app/[lang]/[slug]/_tools/hourly-cost/calculator";
import Sla from "@/app/[lang]/[slug]/_tools/sla/calculator";
import TeamCost from "@/app/[lang]/[slug]/_tools/team-cost/calculator";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";
import type { ToolId } from "@/app/[lang]/[slug]/_tools/config";

export const calculators: Record<ToolId, ComponentType<CalculatorProps>> = {
  sla: Sla,
  "downtime-cost": DowntimeCost,
  "hourly-cost": HourlyCost,
  "team-cost": TeamCost,
  estimate: Estimate,
  automation: Automation,
};
