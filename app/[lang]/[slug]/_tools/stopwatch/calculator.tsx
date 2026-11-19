"use client";

import { useEffect, useId, useRef, useState } from "react";
import { formatElapsed } from "@/app/[lang]/[slug]/_tools/stopwatch";
import { Choice, labelsOf } from "@/app/[lang]/[slug]/_tools/utility-ui";
import type { CalculatorProps } from "@/app/[lang]/[slug]/_tools/props";

type Mode = "stopwatch" | "timer";

function beep() {
  try {
    const context = new AudioContext();
    [0, 0.35, 0.7].forEach((offset) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = 880;
      gain.gain.setValueAtTime(0.2, context.currentTime + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + offset + 0.3);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(context.currentTime + offset);
      oscillator.stop(context.currentTime + offset + 0.3);
    });
  } catch {}
}

export default function Stopwatch({ copy }: CalculatorProps) {
  const t = labelsOf(copy);
  const id = useId();
  const [mode, setMode] = useState<Mode>("stopwatch");
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [minutes, setMinutes] = useState("5");
  const [seconds, setSeconds] = useState("0");
  const [done, setDone] = useState(false);
  const started = useRef(0);
  const base = useRef(0);
  const duration = (Number(minutes) || 0) * 60000 + (Number(seconds) || 0) * 1000;
  const remaining = Math.max(0, duration - elapsed);

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    const finish = () => {
      cancelAnimationFrame(frame);
      setElapsed(duration);
      setRunning(false);
      setDone(true);
      beep();
    };
    const timeout =
      mode === "timer" ? setTimeout(finish, Math.max(0, duration - base.current)) : undefined;
    const tick = () => {
      setElapsed(base.current + performance.now() - started.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [running, mode, duration]);

  function start() {
    if (mode === "timer" && (duration === 0 || remaining === 0)) return;
    started.current = performance.now();
    base.current = elapsed;
    setDone(false);
    setRunning(true);
  }

  function pause() {
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setElapsed(0);
    setLaps([]);
    setDone(false);
  }

  const modes = [
    { value: "stopwatch", label: t("stopwatch") },
    { value: "timer", label: t("timer") },
  ] as const;
  const shown = mode === "stopwatch" ? formatElapsed(elapsed) : formatElapsed(remaining + (remaining % 1000 ? 1000 - (remaining % 1000) : 0), false);

  return (
    <div className="grid-ruled">
      <div className="cell flex flex-col items-center gap-8 p-7 sm:p-12">
        <Choice
          label={t("mode")}
          options={modes}
          value={mode}
          onChange={(next) => {
            reset();
            setMode(next);
          }}
        />
        {mode === "timer" && !running && elapsed === 0 ? (
          <div className="flex items-end gap-3">
            {[
              { key: "minutes", value: minutes, set: setMinutes },
              { key: "seconds", value: seconds, set: setSeconds },
            ].map((field) => (
              <div key={field.key} className="w-28">
                <label htmlFor={`${id}-${field.key}`} className="field-label mb-2.5">
                  {t(field.key)}
                </label>
                <input
                  id={`${id}-${field.key}`}
                  type="number"
                  min={0}
                  max={field.key === "seconds" ? 59 : 999}
                  value={field.value}
                  onChange={(event) => field.set(event.target.value)}
                  className="input text-center text-[18px] tabular-nums"
                />
              </div>
            ))}
          </div>
        ) : null}
        <p
          role="timer"
          aria-live="off"
          className={`tabular-nums text-6xl tabular-nums leading-none sm:text-8xl ${done ? "text-accent" : "text-ink"}`}
        >
          {shown}
        </p>
        <p aria-live="assertive" className="h-5 text-sm text-accent">
          {done ? t("finished") : ""}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {running ? (
            <button type="button" onClick={pause} className="btn btn-primary">
              {t("pause")}
            </button>
          ) : (
            <button type="button" onClick={start} className="btn btn-primary">
              {elapsed > 0 && !done ? t("resume") : t("start")}
            </button>
          )}
          {mode === "stopwatch" ? (
            <button
              type="button"
              disabled={!running}
              onClick={() => setLaps((prev) => [elapsed, ...prev])}
              className="btn btn-outline disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t("lap")}
            </button>
          ) : null}
          <button type="button" onClick={reset} className="btn btn-outline">
            {t("reset")}
          </button>
        </div>
        {laps.length ? (
          <ol className="w-full max-w-sm tabular-nums text-sm tabular-nums">
            {laps.map((lap, i) => {
              const number = laps.length - i;
              const previous = laps[i + 1] ?? 0;
              return (
                <li key={number} className="flex justify-between gap-4 border-b border-line py-2 text-ink">
                  <span className="text-ink-muted">
                    {t("lapN").replace("{n}", String(number))}
                  </span>
                  <span>+{formatElapsed(lap - previous)}</span>
                  <span>{formatElapsed(lap)}</span>
                </li>
              );
            })}
          </ol>
        ) : null}
      </div>
    </div>
  );
}
