'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

const DOT_SIZE = 18;
const EDGE_MARGIN = 4;
const FLEE_RADIUS = 90;
const WANDER_INTERVAL = 2200;
const SETTLE_DELAY = 900;

type Point = { x: number; y: number };

export default function RoamingDot({
  containerRef,
  lineRefs,
  originRef,
}: {
  containerRef: RefObject<HTMLElement | null>;
  lineRefs: RefObject<HTMLElement | null>[];
  originRef?: RefObject<HTMLElement | null>;
}) {
  const [pos, setPos] = useState<Point | null>(null);
  const posRef = useRef<Point>({ x: 0, y: 0 });

  const moveTo = (x: number, y: number) => {
    posRef.current = { x, y };
    setPos({ x, y });
  };

  // Bounding boxes of the actual letters (not the full-width container),
  // relative to the container — so the dot only ever lands on top of text.
  const getLineRects = () => {
    const container = containerRef.current;
    if (!container) return [];
    const contRect = container.getBoundingClientRect();
    return lineRefs
      .map((ref) => ref.current?.getBoundingClientRect())
      .filter((r): r is DOMRect => !!r && r.width > 0)
      .map((r) => ({
        left: r.left - contRect.left,
        top: r.top - contRect.top,
        width: r.width,
        height: r.height,
      }));
  };

  const randomPointOnLetters = (avoid?: Point) => {
    const rects = getLineRects();
    if (rects.length === 0) return null;

    const pick = () => {
      const rect = rects[Math.floor(Math.random() * rects.length)];
      const w = Math.max(rect.width - EDGE_MARGIN * 2 - DOT_SIZE, 0);
      const h = Math.max(rect.height - EDGE_MARGIN * 2 - DOT_SIZE, 0);
      return {
        x: rect.left + EDGE_MARGIN + Math.random() * w,
        y: rect.top + EDGE_MARGIN + Math.random() * h,
      };
    };

    let next = pick();
    if (avoid) {
      let attempts = 0;
      while (
        Math.hypot(next.x - avoid.x, next.y - avoid.y) < FLEE_RADIUS &&
        attempts < 8
      ) {
        next = pick();
        attempts++;
      }
    }
    return next;
  };

  const wanderAwayFrom = (avoid?: Point) => {
    const next = randomPointOnLetters(avoid);
    if (next) moveTo(next.x, next.y);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let interval: ReturnType<typeof setInterval> | undefined;

    const settle = setTimeout(() => {
      const contRect = container.getBoundingClientRect();
      const origin = originRef?.current;
      if (origin) {
        const iRect = origin.getBoundingClientRect();
        moveTo(
          iRect.left - contRect.left + iRect.width / 2 - DOT_SIZE / 2,
          iRect.top - contRect.top - DOT_SIZE * 0.65
        );
      } else {
        wanderAwayFrom();
      }

      interval = setInterval(() => wanderAwayFrom(), WANDER_INTERVAL);
    }, SETTLE_DELAY);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const dist = Math.hypot(
        posRef.current.x + DOT_SIZE / 2 - mx,
        posRef.current.y + DOT_SIZE / 2 - my
      );
      if (dist < FLEE_RADIUS) {
        wanderAwayFrom({ x: mx, y: my });
        if (interval) clearInterval(interval);
        interval = setInterval(() => wanderAwayFrom(), WANDER_INTERVAL);
      }
    };

    // Listens on window, not the container: the dot deliberately pokes
    // above the container's box (to sit like a real tittle above the
    // letter), so a container-scoped listener would miss the cursor
    // arriving from directly above.
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(settle);
      if (interval) clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, originRef]);

  if (!pos) return null;

  return (
    <span
      aria-hidden='true'
      className='pointer-events-none absolute top-0 left-0 h-[clamp(10px,1.6vw,18px)] w-[clamp(10px,1.6vw,18px)] rounded-full bg-accent transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]'
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}
