"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import { GoogleLogo, MozillaLogo, WooviLogo } from "@/components/brand-logos";
import { ChevronIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n/types";

const GAP = 20;
const INTERVAL = 4500;
const QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

const getReducedMotion = () => window.matchMedia(QUERY).matches;

export default function Clients({ dict }: { dict: Dictionary }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [tick, setTick] = useState(0);
  const [hasScroll, setHasScroll] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
    setHasScroll(el.scrollWidth > el.clientWidth + 4);
  }, []);

  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );

  const step = useCallback(
    (direction: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>("li");
      if (!card) return;
      const max = el.scrollWidth - el.clientWidth;
      const cardW = card.offsetWidth + GAP;
      let next = el.scrollLeft + direction * cardW;
      if (direction === 1) {
        next = el.scrollLeft >= max - 2 ? 0 : Math.min(next, max);
      } else {
        next = el.scrollLeft <= 2 ? max : Math.max(next, 0);
      }
      el.scrollTo({
        left: next,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [reduceMotion],
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  useEffect(() => {
    if (!playing || reduceMotion || !hasScroll) return;
    const id = setInterval(() => step(1), INTERVAL);
    return () => clearInterval(id);
  }, [playing, reduceMotion, hasScroll, tick, step]);

  const go = (direction: 1 | -1) => {
    step(direction);
    setTick((t) => t + 1);
  };

  return (
    <section id="clients" aria-labelledby="clients-title" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            id="clients-title"
            label={dict.ui.clients.label}
            title={dict.ui.clients.title}
          />

          <div
            className={`shrink-0 items-center gap-3 pb-1 ${
              hasScroll ? "hidden sm:flex" : "hidden"
            }`}
          >
            {!reduceMotion ? (
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                aria-label={
                  playing ? dict.ui.clients.pause : dict.ui.clients.play
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-card transition-colors duration-150 hover:bg-surface"
              >
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>
            ) : null}

            <button
              type="button"
              onClick={() => go(-1)}
              disabled={atStart}
              aria-label={dict.ui.clients.previous}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-card transition-colors duration-150 hover:bg-surface disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={atEnd}
              aria-label={dict.ui.clients.next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-card transition-colors duration-150 hover:bg-surface disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 pt-2 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {dict.clients.map((client) => (
            <li
              key={client.name}
              className="w-[15.5rem] shrink-0 snap-start lg:w-auto"
            >
              <div className="flex h-full min-h-[11rem] flex-col items-center justify-center gap-5 rounded-card border border-line bg-paper px-6 py-8 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-panel">
                <div className="flex h-12 w-full items-center justify-center">
                  <ClientLogo client={client} />
                </div>

                <p className="sr-only">{client.name}</p>

                {client.note ? (
                  <p className="text-center text-[13px] leading-[1.5] text-ink-2">
                    {client.note}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[13px] text-ink-3 sm:hidden">
          {dict.ui.clients.hint}
        </p>

        <p className="mt-10 max-w-[70ch] text-[12px] leading-[1.6] text-ink-3">
          {dict.ui.clients.footnote}
        </p>
      </div>
    </section>
  );
}

function ClientLogo({
  client,
}: {
  client: Dictionary["clients"][number];
}) {
  switch (client.logo) {
    case "google":
      return <GoogleLogo className="h-9 w-auto max-w-full" />;
    case "mozilla":
      return <MozillaLogo className="h-9 w-auto max-w-full text-ink" />;
    case "woovi":
      return <WooviLogo className="h-10 w-auto max-w-full text-ink" />;
    case "floprobux":
      return (
        <span className="flex items-center gap-2.5">
          <Image
            src="/logos/floprobux-icon.webp"
            alt=""
            width={192}
            height={179}
            className="h-9 w-auto"
          />
          <Wordmark name={client.name} />
        </span>
      );
    default:
      return <Wordmark name={client.name} />;
  }
}

function Wordmark({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      className="text-[1.25rem] font-semibold leading-none tracking-[-0.02em] text-ink"
    >
      {name}
    </span>
  );
}

function PauseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
    >
      <path d="M9 5v14M15 5v14" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
      <path d="M7 4.5 19 12 7 19.5z" />
    </svg>
  );
}
