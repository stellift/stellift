"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import TechStack from "@/app/[lang]/_components/tech-stack";
import ProjectDialog from "@/app/[lang]/_components/project-dialog";
import type { PortfolioCopy } from "@/lib/i18n/slices";

const MORPH = "project-shot";

function slugOf(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function morphReady() {
  return (
    typeof document !== "undefined" &&
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function cardShot(name: string) {
  return document.querySelector<HTMLElement>(
    `[data-shot="${CSS.escape(slugOf(name))}"] img`,
  );
}

export default function PortfolioReel({ dict }: { dict: PortfolioCopy }) {
  const [active, setActive] = useState("all");
  const [niche, setNiche] = useState("all");
  const [open, setOpen] = useState<string | null>(null);
  const [shot, setShot] = useState(0);
  const [plain, setPlain] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const linked = useRef(false);

  const matches = useCallback(
    (platform: string, field: string) =>
      dict.portfolio.filter(
        (project) =>
          (platform === "all" || project.tags?.includes(platform)) &&
          (field === "all" || project.niches?.includes(field)),
      ),
    [dict.portfolio],
  );

  const projects = matches(active, niche);
  const opened = dict.portfolio.find((project) => project.name === open) ?? null;
  const openedIndex = opened ? dict.portfolio.indexOf(opened) : 0;

  const groups = [
    {
      title: dict.ui.portfolio.platformTitle,
      label: dict.ui.portfolio.filterLabel,
      filters: dict.ui.portfolio.filters,
      value: active,
      pick: setActive,
      count: (id: string) => matches(id, niche).length,
    },
    {
      title: dict.ui.portfolio.nicheTitle,
      label: dict.ui.portfolio.nicheFilterLabel,
      filters: dict.ui.portfolio.nicheFilters,
      value: niche,
      pick: setNiche,
      count: (id: string) => matches(active, id).length,
    },
  ];

  useLayoutEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const show = useCallback(
    (name: string | null, sync: boolean) => {
      const morph = morphReady();
      setPlain(!morph);
      const paint = () => flushSync(() => setOpen(name));

      if (sync) {
        const url = new URL(window.location.href);
        if (name) url.searchParams.set("p", slugOf(name));
        else url.searchParams.delete("p");
        window.history.replaceState(window.history.state, "", url);
      }

      if (!morph) {
        paint();
        return;
      }

      const source = name ? cardShot(name) : open ? cardShot(open) : null;
      if (source) source.style.viewTransitionName = MORPH;
      const run = document.startViewTransition(paint);
      void run.finished.finally(() => {
        if (source) source.style.viewTransitionName = "";
      });
    },
    [open],
  );

  const openProject = useCallback(
    (name: string) => {
      setShot(0);
      show(name, true);
    },
    [show],
  );

  const closeProject = useCallback(() => {
    show(null, true);
  }, [show]);

  useEffect(() => {
    if (linked.current) return;
    linked.current = true;
    const wanted = new URLSearchParams(window.location.search).get("p");
    if (!wanted) return;
    const found = dict.portfolio.find(
      (project) => slugOf(project.name) === wanted,
    );
    if (!found) return;
    const frame = window.requestAnimationFrame(() => show(found.name, false));
    return () => window.cancelAnimationFrame(frame);
  }, [dict.portfolio, show]);

  const changeShot = useCallback((next: number) => {
    if (!morphReady()) {
      setShot(next);
      return;
    }
    document.startViewTransition(() => flushSync(() => setShot(next)));
  }, []);

  return (
    <>
      <div className="shell mt-10 space-y-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="eyebrow w-24 shrink-0 text-ink-faint">
              {group.title}
            </span>
            <div
              role="group"
              aria-label={group.label}
              className="flex flex-wrap gap-2"
            >
              {[
                { id: "all", label: dict.ui.portfolio.allLabel },
                ...group.filters,
              ].map((filter) => {
                const on = filter.id === group.value;
                const total = group.count(filter.id);
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => group.pick(filter.id)}
                    aria-pressed={on}
                    disabled={!on && total === 0}
                    className={`eyebrow border px-3.5 py-2.5 transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                      on
                        ? "border-ink bg-ink text-canvas"
                        : "border-line text-ink-muted enabled:hover:border-line-strong enabled:hover:text-ink"
                    }`}
                  >
                    {filter.label}
                    <span className={`ml-2 ${on ? "opacity-60" : "text-ink-faint"}`}>
                      {total}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div
        className="reel-track mt-10"
        style={{ "--frames": projects.length } as CSSProperties}
      >
        <div className="reel-pin">
          <div className="reel-wrap w-full pb-5">
            <ul className="reel border-y border-line">
              {projects.map((project, i) => (
                <li key={project.name} className="frame group">
                  <button
                    type="button"
                    onClick={() => openProject(project.name)}
                    aria-label={`${project.name}: ${dict.ui.portfolio.openLabel}`}
                    data-shot={slugOf(project.name)}
                    className="mount block cursor-pointer p-0"
                  >
                    {project.shot ? (
                      <Image
                        src={project.shot}
                        alt=""
                        fill
                        priority={i < 2}
                        quality={92}
                        sizes="(min-width: 1024px) 560px, 78vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      />
                    ) : null}

                    <span className="shot-cue">
                      <Maximize2 className="size-3.5" aria-hidden />
                      {dict.ui.portfolio.openLabel}
                    </span>
                  </button>

                  <div className="flex flex-col px-5 pb-5 pt-6">
                    <div className="flex items-baseline gap-4">
                      <span className="index shrink-0 translate-y-[-0.35rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-[2.125rem] leading-none text-ink">
                        {project.name}
                      </h3>
                    </div>

                    <p className="eyebrow mt-3.5">{project.role}</p>

                    <p className="mt-4 text-pretty text-[0.8125rem] leading-[1.65] text-ink-muted">
                      {project.text}
                    </p>

                    {project.stack ? (
                      <div className="mt-6 border-t border-line pt-4">
                        <TechStack stack={project.stack} />
                      </div>
                    ) : null}

                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <button
                        type="button"
                        onClick={() => openProject(project.name)}
                        className="link text-sm font-medium"
                      >
                        {dict.ui.portfolio.openLabel}
                      </button>

                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-ink-faint transition-colors hover:text-ink"
                        >
                          {dict.ui.portfolio.cta}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ProjectDialog
        dict={dict}
        project={opened}
        index={openedIndex}
        shot={shot}
        plain={plain}
        onShot={changeShot}
        onClose={closeProject}
        dialogRef={dialogRef}
      />
    </>
  );
}
