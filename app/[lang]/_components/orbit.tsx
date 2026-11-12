const outer = "M 20,450 A 430,205 0 1,1 880,450 A 430,205 0 1,1 20,450";
const inner = "M 150,450 A 300,140 0 1,1 750,450 A 300,140 0 1,1 150,450";

export default function Orbit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 900" aria-hidden className={className} fill="none">
      <g transform="rotate(-18 450 450)">
        <path
          d={outer}
          stroke="var(--color-line)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <g
          className="orbiter"
          style={{ offsetPath: `path("${outer}")`, ["--orbit-duration" as string]: "34s" }}
        >
          <circle r="3" fill="var(--color-accent)" />
        </g>
      </g>

      <g transform="rotate(14 450 450)">
        <path
          d={inner}
          stroke="var(--color-line)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="3 7"
        />
        <g
          className="orbiter"
          style={{ offsetPath: `path("${inner}")`, ["--orbit-duration" as string]: "21s" }}
        >
          <circle r="2" fill="var(--color-line-strong)" />
        </g>
      </g>

      <circle
        cx="450"
        cy="450"
        r="3"
        fill="var(--color-ink-faint)"
      />
      <circle
        cx="450"
        cy="450"
        r="26"
        stroke="var(--color-line)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
