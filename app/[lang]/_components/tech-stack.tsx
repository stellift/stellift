import { parseStack, stackSlugs, techIcons } from "@/lib/tech";

export function TechSprite({
  stacks,
}: {
  stacks: ReadonlyArray<string | undefined>;
}) {
  const slugs = stackSlugs(stacks);

  return (
    <svg aria-hidden className="hidden">
      {slugs.map((slug) => (
        <symbol
          key={slug}
          id={`tech-${slug}`}
          viewBox={techIcons[slug].viewBox}
        >
          {techIcons[slug].paths.map((d) => (
            <path key={d.slice(0, 24)} d={d} />
          ))}
        </symbol>
      ))}
    </svg>
  );
}

export default function TechStack({ stack }: { stack: string }) {
  const items = parseStack(stack);

  return (
    <ul className="tech">
      {items.map((tech) => (
        <li key={tech.label} className="tech-item" title={tech.label}>
          {tech.slug ? (
            <>
              <svg
                fill="currentColor"
                aria-hidden
                className="size-5"
              >
                <use href={`#tech-${tech.slug}`} />
              </svg>
              <span className="sr-only">{tech.label}</span>
            </>
          ) : (
            <span className="tech-label">{tech.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
