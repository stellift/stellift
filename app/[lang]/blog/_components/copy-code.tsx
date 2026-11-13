"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

function fallback(code: string) {
  const field = document.createElement("textarea");
  field.value = code;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();

  let done = false;
  try {
    done = document.execCommand("copy");
  } catch {
    done = false;
  }

  document.body.removeChild(field);
  return done;
}

export default function CopyCode({
  code,
  label,
  done,
}: {
  code: string;
  label: string;
  done: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2400);
    return () => window.clearTimeout(timer);
  }, [copied]);

  function onCopy() {
    navigator.clipboard
      ?.writeText(code)
      .then(() => setCopied(true))
      .catch(() => setCopied(fallback(code)));
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-live="polite"
      className="code-copy"
    >
      {copied ? (
        <Check className="size-3" aria-hidden />
      ) : (
        <Copy className="size-3" aria-hidden />
      )}
      <span>{copied ? done : label}</span>
    </button>
  );
}
