'use client';

import { useEffect, useState } from 'react';
import { LocationIcon } from '../icons';
import { site } from '../../app/site.config';

/**
 * Above-the-fold hero: one block, nothing beside it.
 *
 * The previous version put the headline on the left and a lede, two craft
 * lines and two buttons on the right. Feedback was that nobody knew where to
 * look — correctly, because four things were asking at once. Now the name is
 * the only large element on the screen and everything else is visibly
 * subordinate to it.
 *
 * `max-w-[20ch]` is doing real work: it forces the name and tagline to wrap
 * into a tight column instead of running the width of the page, which is what
 * makes them read as one block rather than two stacked rows.
 *
 * The name animates in line by line (`.hero-line` in globals.css clips each
 * one); the eyebrow and tagline fade in behind it via `.stagger`.
 */
export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header
      className={`mx-auto w-full max-w-6xl shrink-0 px-6 ${ready ? 'hero-ready' : ''}`}
    >
      <div className='max-w-[40ch]'>
        <h1 className='hero-line mb-4 block overflow-hidden font-display text-[clamp(40px,5.4vw,76px)] leading-[0.98] font-extrabold tracking-[-0.035em]'>
          <span>
            {site.firstName} {site.lastName}
          </span>
        </h1>
        <p className='stagger my-5 flex flex-wrap items-center gap-x-3.5  font-mono text-xs tracking-[0.1em] text-accent uppercase'>
          <span>{site.role.replace(/\.$/, '')}</span>
          <span aria-hidden='true' className='text-line'>
            /
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <LocationIcon className='size-3.5' />
            {site.cv.locationLong}
          </span>
        </p>

        <p className='stagger max-w-[16ch] text-[clamp(20px,2.1vw,29px)] leading-[1.3] font-medium tracking-[-0.015em] text-text-muted mt-4'>
          {site.tagline}
        </p>
      </div>
    </header>
  );
}
