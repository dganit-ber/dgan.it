'use client';

import { useEffect, useState } from 'react';
import { site } from '../app/site.config';
import { prefersReducedMotion, useReveal } from './lib/useReveal';

function CountUp({
  target,
  suffix,
  run,
}: {
  target: number;
  suffix: string;
  run: boolean;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (prefersReducedMotion()) {
      setN(target);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1300;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, target]);

  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export function StatBand() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id='work'
      className='mx-auto w-full max-w-[1320px] px-5 pb-20 sm:px-10 lg:px-18 lg:pb-30'
    >
      <div
        ref={ref}
        className={`reveal rounded-[20px] bg-surface px-6 py-11 transition-colors sm:px-12 lg:rounded-[30px] lg:px-16 lg:py-21 ${
          visible ? 'reveal-in' : ''
        }`}
      >
        <p className='mb-9 text-center font-mono text-[11px] font-medium tracking-[0.18em] text-mute uppercase lg:mb-15 lg:text-xs lg:tracking-[0.26em]'>
          {site.proofEyebrow}
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-14'>
          {site.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6.5 text-center lg:py-0 ${
                i > 0 ? 'border-t border-line lg:border-t-0 lg:border-l' : ''
              }`}
            >
              <div className='font-display text-[clamp(42px,6.4vw,84px)] leading-none font-bold tracking-[-0.04em] tabular-nums'>
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  run={visible}
                />
              </div>
              <div className='mt-3.5 font-mono text-[11.5px] tracking-[0.16em] text-mute uppercase'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
