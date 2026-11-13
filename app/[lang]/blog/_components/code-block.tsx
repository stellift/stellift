import { isValidElement, type ReactNode } from "react";
import CopyCode from "@/app/[lang]/blog/_components/copy-code";
import { highlight, languageLabel } from "@/lib/code";

type CodeProps = { className?: string; children?: ReactNode };

function read(node: ReactNode) {
  if (!isValidElement<CodeProps>(node)) return null;

  const { className, children } = node.props;
  if (typeof children !== "string") return null;

  const match = /language-([\w-]+)/.exec(className ?? "");
  return { code: children.replace(/\n+$/, ""), name: match?.[1] ?? "" };
}

export default async function CodeBlock({
  children,
  copy,
  copied,
}: {
  children?: ReactNode;
  copy: string;
  copied: string;
}) {
  const parsed = read(children);
  if (!parsed) return <pre>{children}</pre>;

  const html = await highlight(parsed.code, parsed.name);
  const label = parsed.name ? languageLabel(parsed.name) : null;
  const numbered = parsed.code.includes("\n");

  return (
    <figure className="code-block">
      <figcaption className="code-head">
        {label ? <span className="code-lang">{label}</span> : null}
        <span aria-hidden className="h-px flex-1 bg-line" />
        <CopyCode code={parsed.code} label={copy} done={copied} />
      </figcaption>

      {html ? (
        <div
          className="code-body"
          data-numbered={numbered ? "true" : undefined}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <div className="code-body">
          <pre>
            <code>{parsed.code}</code>
          </pre>
        </div>
      )}
    </figure>
  );
}
