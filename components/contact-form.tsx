"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ChevronIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n/types";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const fieldBase =
  "w-full rounded-[14px] border border-line bg-surface px-4 py-3 text-[16px] text-ink placeholder:text-ink-3 transition-colors duration-150 outline-none";

function fieldClass(error?: string) {
  return error
    ? `${fieldBase} border-alert bg-white`
    : `${fieldBase} focus:border-link focus:bg-white`;
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
      <div className="h-full rounded-panel border border-line bg-paper p-8 shadow-panel">
        <p>
          <span className="inline-flex rounded-full bg-green/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink">
            {t.readyBadge}
          </span>
        </p>
        <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.65] text-ink-2">
          {t.readyText}
        </p>
        <pre className="mt-6 max-h-48 overflow-auto whitespace-pre-wrap rounded-card border border-line bg-surface p-5 text-[14px] leading-[1.6] text-ink">
          {composed.body}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={composed.mailto}
            className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-6 text-[15px] font-semibold text-white shadow-card transition-colors duration-150 hover:bg-ink"
          >
            {t.openEmail}
          </a>
          <button
            type="button"
            onClick={copyMessage}
            className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-paper px-6 text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-canvas"
          >
            {copied ? t.copied : t.copy}
          </button>
          <button
            type="button"
            onClick={() => {
              setComposed(null);
              setErrors({});
            }}
            className="text-[14px] font-medium text-link underline underline-offset-4 hover:text-navy"
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
      className="h-full rounded-panel border border-line bg-paper p-8 shadow-panel"
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
        <label htmlFor="message" className="mb-2 block text-[14px] font-semibold text-ink">
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
          <p id="message-error" className="mt-2 text-[14px] text-alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-full bg-navy px-7 text-[15px] font-semibold text-white shadow-card transition-colors duration-150 hover:bg-ink sm:w-auto"
      >
        {t.submit}
        <ChevronIcon className="h-3.5 w-3.5" />
      </button>

      <p className="mt-4 max-w-[46ch] text-[13px] leading-[1.6] text-ink-3">
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
      <label htmlFor={name} className="mb-2 block text-[14px] font-semibold text-ink">
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
        <p id={errorId} className="mt-2 text-[14px] text-alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}