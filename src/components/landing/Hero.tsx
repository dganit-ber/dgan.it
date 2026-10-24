'use client';

import { useEffect, useState } from 'react';
import { LocationIcon } from '../icons';
import { site } from '../../app/site.config';
import HeroAside from './HeroAside';

/**
 * Above-the-fold hero.
 *
 * Desktop: identity and headline on the left, `HeroAside` (lede, AI/craft
 * pair, buttons) on the right, product row underneath — the whole thing sized
 * to fit a laptop screen without scrolling.
 *
 * Mobile: identity and headline only. The aside is rendered by the page
 * *after* the product row instead, so the first screenful is name, headline
 * and work. See `HeroAside` for why it exists as its own component.
 *
 * The headline is the only animated element: each line slides up out of its
 * own clipping mask (`.hero-line` in globals.css) and the rest fades in behind
 * it via `.stagger`.
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
      <div className='flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-14'>
        <div className='min-w-0 lg:flex-[999_1_440px]'>
          <p className='stagger mb-1.5 text-lg font-bold tracking-[-0.015em]'>
            {site.firstName} {site.lastName}
          </p>

          <p className='stagger mb-3.5 flex flex-wrap items-center gap-x-3.5 gap-y-2 font-mono text-xs tracking-[0.09em] text-accent uppercase'>
            <span>{site.role.replace(/\.$/, '')}</span>
            <span aria-hidden='true' className='text-line'>
              /
            </span>
            <span className='inline-flex items-center gap-1.5'>
              <LocationIcon className='size-3.5' />
              {site.cv.locationLong}
            </span>
          </p>

          <h1 className='font-display text-[clamp(26px,7vw,54px)] leading-[1.05] font-extrabold tracking-[-0.03em] [@media(max-height:730px)]:text-[25px]'>
            {site.headline.map((line) => (
              <span key={line} className='hero-line block overflow-hidden'>
                <span>{line}</span>
              </span>
            ))}
          </h1>
        </div>

        <HeroAside className='stagger hidden min-w-0 lg:block lg:max-w-[520px] lg:flex-[1_1_400px]' />
      </div>
    </header>
  );
}
