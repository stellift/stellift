import type { ComponentType } from "react";
import Automation from "@/app/[lang]/[slug]/_tools/automation/calculator";
import Base64 from "@/app/[lang]/[slug]/_tools/base64/calculator";
import Cnpj from "@/app/[lang]/[slug]/_tools/cnpj/calculator";
import Counter from "@/app/[lang]/[slug]/_tools/counter/calculator";
import Cpf from "@/app/[lang]/[slug]/_tools/cpf/calculator";
import DowntimeCost from "@/app/[lang]/[slug]/_tools/downtime-cost/calculator";
import Estimate from "@/app/[lang]/[slug]/_tools/estimate/calculator";
import HourlyCost from "@/app/[lang]/[slug]/_tools/hourly-cost/calculator";
import Json from "@/app/[lang]/[slug]/_tools/json/calculator";
import Password from "@/app/[lang]/[slug]/_tools/password/calculator";
import Sla from "@/app/[lang]/[slug]/_tools/sla/calculator";
import TeamCost from "@/app/[lang]/[slug]/_tools/team-cost/calculator";
import Uuid from "@/app/[lang]/[slug]/_tools/uuid/calculator";
import Case from "@/app/[lang]/[slug]/_tools/case/calculator";
import Hash from "@/app/[lang]/[slug]/_tools/hash/calculator";
import Jwt from "@/app/[lang]/[slug]/_tools/jwt/calculator";
import Lorem from "@/app/[lang]/[slug]/_tools/lorem/calculator";
import Timestamp from "@/app/[lang]/[slug]/_tools/timestamp/calculator";
import Url from "@/app/[lang]/[slug]/_tools/url/calculator";
import Regex from "@/app/[lang]/[slug]/_tools/regex/calculator";
import NumberBase from "@/app/[lang]/[slug]/_tools/base/calculator";
import QrCode from "@/app/[lang]/[slug]/_tools/qrcode/calculator";
import Color from "@/app/[lang]/[slug]/_tools/color/calculator";
import Diff from "@/app/[lang]/[slug]/_tools/diff/calculator";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";
import type { ToolId } from "@/app/[lang]/[slug]/_tools/config";

export const calculators: Record<ToolId, ComponentType<CalculatorProps>> = {
  sla: Sla,
  "downtime-cost": DowntimeCost,
  "hourly-cost": HourlyCost,
  "team-cost": TeamCost,
  estimate: Estimate,
  automation: Automation,
  cpf: Cpf,
  cnpj: Cnpj,
  password: Password,
  uuid: Uuid,
  base64: Base64,
  json: Json,
  counter: Counter,
  hash: Hash,
  url: Url,
  timestamp: Timestamp,
  jwt: Jwt,
  case: Case,
  lorem: Lorem,
  regex: Regex,
  base: NumberBase,
  qrcode: QrCode,
  color: Color,
  diff: Diff,
};
