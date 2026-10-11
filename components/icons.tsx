import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    "aria-hidden": true,
    ...props,
  };
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="4.5" width="19" height="15" />
      <path d="m3.5 7.5 7.3 4.7a2 2 0 0 0 2.4 0l7.3-4.7" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 9.5V17" />
      <path d="M7 6.4v.01" />
      <path d="M11.5 17v-4.2a2.3 2.3 0 0 1 4.6 0V17" />
      <path d="M11.5 9.5V17" />
      <rect x="3" y="3" width="18" height="18" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </svg>
  );
}
const chevronRotation = {
  right: "",
  left: "rotate-180",
  down: "rotate-90",
  up: "-rotate-90",
} as const;

export function ChevronIcon({
  direction = "right",
  ...props
}: IconProps & { direction?: keyof typeof chevronRotation }) {
  return (
    <svg
      {...base(props)}
      viewBox="0 0 16 16"
      strokeWidth={2}
      className={`${props.className ?? ""} ${chevronRotation[direction]}`.trim()}
    >
      <path d="m5.5 2.5 5.5 5.5-5.5 5.5" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 16 16" strokeWidth={2.25}>
      <path d="m3 8.5 3.5 3.5L13 4.5" />
    </svg>
  );
}

export const channelIcons = {
  email: MailIcon,
  linkedin: LinkedInIcon,
  code: CodeIcon,
} as const;