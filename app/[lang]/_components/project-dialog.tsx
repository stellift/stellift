"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import TechStack from "@/app/[lang]/_components/tech-stack";
import type { Dictionary } from "@/lib/i18n/types";

type Project = Dictionary["portfolio"][number];

export default function ProjectDialog({
  dict,
  project,
  index,
  shot,
  plain,
  onShot,
  onClose,
  dialogRef,
}: {
  dict: Dictionary;
  project: Project | null;
  index: number;
  shot: number;
  plain: boolean;
  onShot: (next: number) => void;
  onClose: () => void;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const gallery = project?.detail?.gallery ?? [];
  const total = gallery.length;

  useEffect(() => {
    if (!project || total < 2) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onShot((shot + 1) % total);
      if (event.key === "ArrowLeft") onShot((shot - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, shot, total, onShot]);

  const current = gallery[shot];
  const copy = dict.ui.portfolio;

  return (
    <dialog
      ref={dialogRef}
      className="sheet"
      data-plain={plain ? "true" : undefined}
      aria-label={
        project ? `${project.name}: ${copy.dialogLabel}` : copy.dialogLabel
      }
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {project ? (
        <>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={copy.closeLabel}
            className="absolute right-0 top-0 z-30 flex size-12 items-center justify-center border-b border-l border-line bg-canvas text-ink-muted transition-colors hover:text-ink"
          >
            <X className="size-4" aria-hidden />
          </button>

          <div className="sheet-body">
            <div className="grid lg:grid-cols-12">
              <div className="relative lg:sticky lg:top-0 lg:col-span-8 lg:self-start">
                <div className="relative aspect-[1440/677] bg-surface">
                  {current ? (
                    <Image
                      key={current.src}
                      src={current.src}
                      alt={current.caption}
                      fill
                      sizes="(min-width: 1024px) 68vw, 94vw"
                      quality={92}
                      className="shot-morph object-cover"
                    />
                  ) : project.shot ? (
                    <Image
                      src={project.shot}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 68vw, 94vw"
                      quality={92}
                      className="shot-morph object-cover"
                    />
                  ) : null}

                  {total > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => onShot((shot - 1 + total) % total)}
                        aria-label={copy.prevLabel}
                        className="pill absolute left-3 top-1/2 -translate-y-1/2"
                      >
                        <ArrowLeft className="size-4" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => onShot((shot + 1) % total)}
                        aria-label={copy.nextLabel}
                        className="pill absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <ArrowRight className="size-4" aria-hidden />
                      </button>
                    </>
                  ) : null}
                </div>

                {current ? (
                  <p className="border-t border-line px-6 py-4 text-xs leading-relaxed text-ink-faint">
                    <span className="text-ink-muted">
                      {String(shot + 1).padStart(2, "0")}
                      <span aria-hidden> / </span>
                      {String(total).padStart(2, "0")}
                    </span>{" "}
                    {current.caption}
                  </p>
                ) : null}

                {total > 1 ? (
                  <ul
                    aria-label={copy.galleryLabel}
                    className="flex gap-2 overflow-x-auto border-t border-line p-3"
                  >
                    {gallery.map((frame, i) => (
                      <li key={frame.src}>
                        <button
                          type="button"
                          onClick={() => onShot(i)}
                          aria-current={i === shot ? "true" : undefined}
                          aria-label={frame.caption}
                          className={`relative block h-10 w-20 overflow-hidden border transition-colors ${
                            i === shot
                              ? "border-accent"
                              : "border-line opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={frame.src}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="sheet-stagger flex flex-col gap-7 border-t border-line p-7 sm:p-8 lg:col-span-4 lg:border-l lg:border-t-0">
                <div style={{ "--d": 0 } as CSSProperties}>
                  <span className="index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,2.75rem)] leading-[0.98] tracking-[-0.02em] text-ink">
                    {project.name}
                  </h2>
                  <p className="eyebrow mt-3">{project.role}</p>
                </div>

                <p
                  style={{ "--d": 70 } as CSSProperties}
                  className="text-pretty text-sm leading-relaxed text-ink-muted"
                >
                  {project.detail?.summary ?? project.text}
                </p>

                {project.detail?.facts.length ? (
                  <dl
                    style={{ "--d": 140 } as CSSProperties}
                    className="grid-ruled grid-cols-2"
                  >
                    {project.detail.facts.map((fact) => (
                      <div key={fact.label} className="cell p-4">
                        <dt className="eyebrow">{fact.label}</dt>
                        <dd className="mt-2 text-sm leading-snug text-ink">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {project.detail?.highlights.length ? (
                  <ul
                    style={{ "--d": 210 } as CSSProperties}
                    className="flex flex-col gap-5 border-t border-line pt-6"
                  >
                    {project.detail.highlights.map((item) => (
                      <li key={item.title}>
                        <h3 className="text-[0.9375rem] font-medium leading-snug text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-muted">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {project.stack ? (
                  <div
                    style={{ "--d": 280 } as CSSProperties}
                    className="border-t border-line pt-6"
                  >
                    <TechStack stack={project.stack} />
                  </div>
                ) : null}

                <div
                  style={{ "--d": 350 } as CSSProperties}
                  className="flex flex-wrap items-center gap-x-6 gap-y-3"
                >
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      {project.detail?.ctaLabel ?? copy.cta}
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {copy.closeLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </dialog>
  );
}
