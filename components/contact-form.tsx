"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const fieldBase = "input text-[16px]";

function fieldClass(error?: string) {
  return error
    ? `${fieldBase} border-danger`
    : fieldBase;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [errors, setErrors] = useState<Errors>({});
  const [composed, setComposed] = useState<{
    mailto: string;
    body: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const t = dict.ui.form;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCopied(false);

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = t.nameError;
    if (!emailPattern.test(email)) nextErrors.email = t.emailError;
    if (message.length < 12) nextErrors.message = t.messageError;

    setErrors(nextErrors);

    const firstInvalid = (["name", "email", "message"] as Field[]).find(
      (field) => nextErrors[field],
    );
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          `[name="${firstInvalid}"]`,
        )
        ?.focus();
      return;
    }

    const body = `${t.bodyName}: ${name}\n${t.bodyEmail}: ${email}\n\n${t.bodyMessage}:\n${message}`;
    const subject = encodeURIComponent(`${t.subject}: ${name}`);
    setComposed({
      mailto: `mailto:${dict.site.email}?subject=${subject}&body=${encodeURIComponent(body)}`,
      body,
    });
  }

  async function copyMessage() {
    if (!composed) return;
    try {
      await navigator.clipboard.writeText(composed.body);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (composed) {
    return (
      <div className="panel h-full p-6 sm:p-8">
        <p>
          <span className="inline-flex rounded-md bg-accent-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {t.readyBadge}
          </span>
        </p>
        <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-ink-muted">
          {t.readyText}
        </p>
        <pre className="mt-6 max-h-48 overflow-auto whitespace-pre-wrap rounded-md border border-line bg-canvas p-5 text-sm leading-relaxed text-ink">
          {composed.body}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={composed.mailto}
            className="btn btn-primary"
          >
            {t.openEmail}
          </a>
          <button
            type="button"
            onClick={copyMessage}
            className="btn btn-ghost"
          >
            {copied ? t.copied : t.copy}
          </button>
          <button
            type="button"
            onClick={() => {
              setComposed(null);
              setErrors({});
            }}
            className="text-sm font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline"
          >
            {t.edit}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="panel h-full p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          name="name"
          label={t.nameLabel}
          placeholder={t.namePlaceholder}
          autoComplete="name"
          error={errors.name}
        />
        <Field
          name="email"
          type="email"
          label={t.emailLabel}
          placeholder={t.emailPlaceholder}
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="field-label mb-2 block uppercase">
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder={t.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass(errors.message)} resize-none`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-danger">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-7 w-full sm:w-auto"
      >
        {t.submit}
        <ArrowRight className="size-4" aria-hidden />
      </button>

      <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
        {t.note}
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  error,
}: {
  name: Field;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  error?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="field-label mb-2 block uppercase">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={fieldClass(error)}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}