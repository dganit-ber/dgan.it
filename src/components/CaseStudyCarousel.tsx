'use client';

import { useCallback, useEffect, useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import { site } from '../app/site.config';

const AUTO_ADVANCE_MS = 6000;

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      className='size-4'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
      />
    </svg>
  );
}

export default function CaseStudyCarousel() {
  const studies = site.caseStudies;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i + dir + studies.length) % studies.length),
    [studies.length],
  );

  useEffect(() => {
    if (studies.length <= 1 || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;

    const id = setTimeout(() => advance(1), AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [index, paused, studies.length, advance]);

  return (
    <section className='mx-auto w-full max-w-6xl px-6 py-8'>
      <div
        className='rounded-[28px] border border-line bg-surface px-6 py-8 sm:px-10 sm:py-10'
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className='mb-6 flex items-center justify-between gap-4'>
          <p className='font-mono text-xs font-medium tracking-[0.22em] text-mute uppercase'>
            Case studies
          </p>
          <div className='flex gap-2'>
            <button
              type='button'
              aria-label='Previous case study'
              onClick={() => advance(-1)}
              className='grid size-8 place-items-center rounded-full border border-line text-mute transition-colors hover:border-accent hover:text-accent'
            >
              <ChevronIcon direction='left' />
            </button>
            <button
              type='button'
              aria-label='Next case study'
              onClick={() => advance(1)}
              className='grid size-8 place-items-center rounded-full border border-line text-mute transition-colors hover:border-accent hover:text-accent'
            >
              <ChevronIcon direction='right' />
            </button>
          </div>
        </div>

        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-300 ease-out'
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {studies.map((study) => (
              <div key={study.title} className='w-full shrink-0 px-px'>
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
        </div>

        <div className='mt-6 flex justify-center gap-1.5'>
          {studies.map((study, i) => (
            <button
              key={study.title}
              type='button'
              aria-label={`Go to case study ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-4 bg-accent' : 'w-1.5 bg-line hover:bg-mute'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
