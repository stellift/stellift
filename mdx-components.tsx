import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";

function Anchor({ href = "", ...rest }: ComponentPropsWithoutRef<"a">) {
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className="link"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    />
  );
}

const components: MDXComponents = { a: Anchor };

export function useMDXComponents(): MDXComponents {
  return components;
}
