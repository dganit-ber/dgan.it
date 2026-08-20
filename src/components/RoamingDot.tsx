'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

const DOT_SIZE = 18;
const EDGE_MARGIN = 4;
const FLEE_RADIUS = 90;

const REST_MS = 750;
const BOUNCE_MS = 1800; // one continuous decaying-bounce timeline, not repeated hops
const ROLL_LEG_MS = 450; // roll is two equal legs (up-and-over, then down-to-rest)
const ROLL_MS = ROLL_LEG_MS * 2;

type Point = { x: number; y: number };
type Phase = 'rest' | 'bounce' | 'roll' | 'blink' | 'fled';

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
  const [phase, setPhase] = useState<Phase>('rest');
  const [snap, setSnap] = useState(false); // true = jump with no transition
  const posRef = useRef<Point>({ x: 0, y: 0 });
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const moveTo = (x: number, y: number) => {
    posRef.current = { x, y };
    setPos({ x, y });
  };

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
        right: r.right - contRect.left,
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
      while (Math.hypot(next.x - avoid.x, next.y - avoid.y) < FLEE_RADIUS && attempts < 8) {
        next = pick();
        attempts++;
      }
    }
    return next;
  };

  const getOriginPoint = (): Point | null => {
    const container = containerRef.current;
    const origin = originRef?.current;
    if (!container || !origin) return null;
    const contRect = container.getBoundingClientRect();
    const iRect = origin.getBoundingClientRect();
    return {
      x: iRect.left - contRect.left + iRect.width / 2 - DOT_SIZE / 2,
      y: iRect.top - contRect.top - DOT_SIZE * 0.4,
    };
  };

  // "After the last letter" of the final line — sits low, like a
  // full stop closing out the name.
  const getEndPoint = (): Point | null => {
    const rects = getLineRects();
    const last = rects[rects.length - 1];
    if (!last) return null;
    return {
      // small legibility gap after the last letter, like a period's usual spacing
      x: last.right + DOT_SIZE * 0.15,
      y: last.top + last.height * 0.62,
    };
  };

  // Arcs up and over the last letter, then down to the spot just past
  // it, settling into a blink there — a two-leg path (not a straight
  // glide) so it reads as rolling across the letter. `dot-roll-spin`
  // (applied in the JSX below) spins it like a wheel for the same
  // stretch, so it visibly rotates rather than just gliding.
  const rollToEndAndBlink = () => {
    const end = getEndPoint();
    const rects = getLineRects();
    const last = rects[rects.length - 1];
    if (!end || !last) return;

    const start = posRef.current;
    const peak = {
      x: last.right - DOT_SIZE * 1.4,
      y: Math.min(start.y, last.top) - DOT_SIZE * 1.6,
    };

    setSnap(false);
    setPhase('roll');
    moveTo(peak.x, peak.y);

    timers.current.push(
      setTimeout(() => {
        moveTo(end.x, end.y);
        timers.current.push(setTimeout(() => setPhase('blink'), ROLL_LEG_MS));
      }, ROLL_LEG_MS)
    );
  };

  const runSequence = () => {
    clearTimers();
    const origin = getOriginPoint();
    if (!origin) return;

    setSnap(true);
    setPhase('rest');
    moveTo(origin.x, origin.y);
    requestAnimationFrame(() => requestAnimationFrame(() => setSnap(false)));

    timers.current.push(
      setTimeout(() => {
        setPhase('bounce');
        timers.current.push(setTimeout(rollToEndAndBlink, BOUNCE_MS));
      }, REST_MS)
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Run once on mount (page loads at the top) and again every time
    // the user scrolls back up to the top of the page.
    let prevY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y <= 2 && prevY > 2) runSequence();
      prevY = y;
    };
    // On first mount specifically, the hero name's own slide-up reveal
    // (~820ms, driven by Hero's `.hero-ready` class) is still animating
    // — measuring the "i" glyph now would snap the dot to wherever the
    // letter is mid-transition, not its final resting spot, and that
    // stale position never gets corrected since this only runs once.
    // Later scroll-to-top triggers don't need the wait: the reveal is
    // long done by then.
    const initialRun = setTimeout(runSequence, 900);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const dist = Math.hypot(
        posRef.current.x + DOT_SIZE / 2 - mx,
        posRef.current.y + DOT_SIZE / 2 - my
      );
      if (dist < FLEE_RADIUS) {
        clearTimers();
        const next = randomPointOnLetters({ x: mx, y: my });
        if (next) {
          setSnap(false);
          setPhase('fled');
          moveTo(next.x, next.y);
        }
      }
    };

    // Listens on window, not the container: the dot deliberately pokes
    // above the container's box (to sit like a real tittle above the
    // letter), so a container-scoped listener would miss the cursor
    // arriving from directly above.
    window.addEventListener('mousemove', handleMouseMove);

    // Once the cursor actually leaves the name, stop whatever it was
    // doing (wandering, mid-flee, mid-bounce) and settle at the end.
    const handleMouseLeave = () => {
      clearTimers();
      rollToEndAndBlink();
    };
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(initialRun);
      clearTimers();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, originRef]);

  if (!pos) return null;

  // Rolling gets a smooth, even glide (each leg of the arc); fleeing
  // gets a snappier springy pop (the overshoot reads as a startled
  // flinch, not a nice roll). Tailwind needs these as complete static
  // strings — it can't resolve an interpolated class name like
  // `duration-[${ROLL_LEG_MS}ms]`.
  const moveEasing =
    phase === 'roll'
      ? 'duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]'
      : 'duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]';

  return (
    <span
      aria-hidden='true'
      className={`pointer-events-none absolute top-0 left-0 ${
        snap ? '' : `transition-transform ${moveEasing}`
      }`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <span
        className={`dot-sphere block h-[clamp(10px,1.6vw,18px)] w-[clamp(10px,1.6vw,18px)] rounded-full ${
          phase === 'bounce' ? 'animate-[dot-bounce_1800ms_ease-out_1]' : ''
        } ${phase === 'roll' ? 'animate-[dot-roll-spin_900ms_linear_1]' : ''} ${
          phase === 'blink' ? 'animate-[dot-blink_1.8s_ease-in-out_infinite]' : ''
        }`}
        // Once the roll animation ends the class swap would otherwise
        // snap it back to rotate:0 — this holds it at the angle the
        // spin naturally lands on (900deg mod 360) so there's no pop.
        style={{ rotate: phase === 'roll' || phase === 'blink' ? '180deg' : '0deg' }}
      />
    </span>
  );
}
