"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function scrambledFrame(value: string, revealCount: number) {
  return value
    .split("")
    .map((char, i) => {
      if (i < revealCount || !/[A-Za-z0-9]/.test(char)) return char;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join("");
}

function maskedFrame(value: string) {
  return value.replace(/[A-Za-z0-9]/g, "•");
}

export function StatReveal({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => maskedFrame(value));
  const [barOn, setBarOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let startTimeout: ReturnType<typeof setTimeout> | undefined;
    let frameInterval: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        startTimeout = setTimeout(() => {
          setBarOn(true);
          const frames = 16;
          let frame = 0;
          frameInterval = setInterval(() => {
            frame += 1;
            const revealCount = Math.ceil((frame / frames) * value.length);
            setDisplay(scrambledFrame(value, revealCount));
            if (frame >= frames) {
              clearInterval(frameInterval);
              setDisplay(value);
            }
          }, 35);
        }, delay);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(startTimeout);
      clearInterval(frameInterval);
    };
  }, [value, delay]);

  return (
    <span ref={ref} className="inline-flex flex-col gap-1.5">
      <span className="font-mono-case text-2xl text-noir-950 sm:text-3xl">
        {display}
      </span>
      <span className="h-[2px] w-full overflow-hidden rounded-full bg-noir-950/10">
        <span
          className="block h-full bg-amaranth-500 transition-[width] duration-[600ms] ease-out"
          style={{ width: barOn ? "100%" : "0%" }}
        />
      </span>
    </span>
  );
}
