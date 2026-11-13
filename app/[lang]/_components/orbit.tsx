const outer = "M 20,450 A 430,205 0 1,1 880,450 A 430,205 0 1,1 20,450";
const inner = "M 150,450 A 300,140 0 1,1 750,450 A 300,140 0 1,1 150,450";

export default function Orbit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 900" aria-hidden className={className} fill="none">
      <path
        d={outer}
        transform="rotate(-18 450 450)"
        stroke="var(--color-line)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={inner}
        transform="rotate(14 450 450)"
        stroke="var(--color-line)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="3 7"
      />
    </svg>
  );
}
