import { parseStack } from "@/lib/tech";

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
                <use href={`/tech.svg#tech-${tech.slug}`} />
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
