'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { iconMap, type IconName } from './icons';
import { site } from '../app/site.config';

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header
      className={`mx-auto w-full max-w-[1320px] px-5 pt-[120px] pb-10 sm:px-10 lg:px-18 lg:pt-[160px] ${
        ready ? 'hero-ready' : ''
      }`}
    >
      <h1 className='mb-6 font-display text-[clamp(58px,13.2vw,188px)] leading-[0.88] font-extrabold tracking-[-0.045em] sm:mb-8 lg:mb-10'>
        <span className='hero-line block overflow-hidden'>
          <span>{site.firstName}</span>
        </span>
        <span className='hero-line block overflow-hidden'>
          <span>
            {site.lastName}
            <i className='caret' aria-hidden='true' />
          </span>
        </span>
      </h1>

      <p className='stagger mb-7 max-w-none text-[clamp(19px,2.5vw,31px)] tracking-[-0.015em] lg:mb-9 lg:max-w-[24ch]'>
        {site.role} <span className='text-mute'>{site.roleTail}</span>
      </p>

      <div className='stagger mb-6 flex flex-wrap gap-2.5 lg:mb-7'>
        {site.tags.map((tag) => (
          <span
            key={tag}
            className='rounded-full border border-line px-4 py-1.5 text-sm font-medium text-mute transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent'
          >
            {tag}
          </span>
        ))}
      </div>

      <div className='stagger mb-9 flex flex-wrap gap-2.5 lg:mb-14'>
        {site.socials.map((s) => {
          const Icon = iconMap[s.icon as IconName];
          return (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className='grid size-11 place-items-center rounded-full border border-line text-mute transition-all duration-200 hover:-translate-y-[3px] hover:border-ink hover:bg-ink hover:text-paper'
            >
              <Icon className='size-[19px]' />
            </a>
          );
        })}
      </div>

      <div className='stagger flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
        <Link
          href='/#work'
          className='inline-flex h-14 items-center justify-center rounded-full bg-accent px-9 text-base font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_var(--color-accent)]'
        >
          See the work
        </Link>
        <Link
          href='/cv'
          className='inline-flex h-14 items-center justify-center rounded-full border border-ink px-9 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper'
        >
          Read the CV
        </Link>
      </div>
    </header>
  );
}
