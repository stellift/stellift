export const markLight =
  "M115,0L145,160L115,190ZM230,190L145,220L115,190ZM115,300L85,220L115,190ZM0,190L85,160L115,190Z";

export const markDark =
  "M115,0L115,190L85,160ZM230,190L115,190L145,160ZM115,300L115,190L145,220ZM0,190L115,190L85,220Z";

export const markTileLight =
  "M230,80L260,240L230,270ZM345,270L260,300L230,270ZM230,380L200,300L230,270ZM115,270L200,240L230,270Z";

export const markTileDark =
  "M230,80L230,270L200,240ZM345,270L230,270L260,240ZM230,380L230,270L260,300ZM115,270L230,270L200,300Z";

export const markViewBox = "0 0 230 300";

export default function LogoMark({
  className,
  variant = "tile",
}: {
  className?: string;
  variant?: "tile" | "mono";
}) {
  if (variant === "tile") {
    return (
      <svg viewBox="0 0 460 460" aria-hidden className={className}>
        <rect width="460" height="460" rx="96" fill="#4eaefd" />
        <path fill="#ffffff" d={markTileLight} />
        <path fill="#d6eafe" d={markTileDark} />
      </svg>
    );
  }

  return (
    <svg viewBox={markViewBox} aria-hidden className={className}>
      <path fill="currentColor" d={markLight} />
      <path fill="currentColor" fillOpacity={0.68} d={markDark} />
    </svg>
  );
}
