import type { SVGProps } from "react";

type PlateProps = SVGProps<SVGSVGElement>;

function frame(props: PlateProps) {
  return {
    viewBox: "0 0 160 100",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function PlateWeb(props: PlateProps) {
  return (
    <svg {...frame(props)}>
      <rect x="18" y="22" width="124" height="60" />
      <path d="M18 36h124" />
      <circle cx="26" cy="29" r="1.5" fill="#009c3b" stroke="none" />
      <path d="M32 48h52M32 58h76M32 68h40" stroke="#8a94a3" />
      <path d="M100 48v20M88 58h24" stroke="#009c3b" />
    </svg>
  );
}

export function PlateMobile(props: PlateProps) {
  return (
    <svg {...frame(props)}>
      <rect x="38" y="18" width="40" height="64" rx="6" />
      <path d="M84 30h38v40H84z" />
      <path d="M48 34h20M48 44h20M48 54h12" stroke="#8a94a3" />
      <path d="M92 44h22M92 54h14" stroke="#009c3b" />
      <path d="M52 74h12" stroke="#8a94a3" />
    </svg>
  );
}

export function PlateCloud(props: PlateProps) {
  return (
    <svg {...frame(props)}>
      <rect x="26" y="56" width="108" height="14" rx="3" />
      <rect x="38" y="40" width="84" height="14" rx="3" />
      <rect x="50" y="24" width="60" height="14" rx="3" />
      <circle cx="44" cy="63" r="2" fill="#009c3b" stroke="none" />
      <circle cx="68" cy="47" r="2" fill="#8a94a3" stroke="none" />
      <path d="M118 24v-6h8" stroke="#ffdf00" />
    </svg>
  );
}

export const servicePlates = {
  WEB: PlateWeb,
  MOB: PlateMobile,
  CLD: PlateCloud,
} as const;