'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { iconMap, type IconName } from './icons';
import RoamingDot from './RoamingDot';
import { site } from '../app/site.config';

export function Hero() {
  const [ready, setReady] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const iRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const iIndex = site.firstName.indexOf('i');
  const beforeI =
    iIndex >= 0 ? site.firstName.slice(0, iIndex) : site.firstName;
  const afterI = iIndex >= 0 ? site.firstName.slice(iIndex + 1) : '';

  return (
    <header
      className={`mx-auto flex w-full max-w-6xl flex-col px-6 pt-24 pb-10 ${
        ready ? 'hero-ready' : ''
      }`}
    >
      <h1
        ref={nameRef}
        className='relative mb-4 font-display text-[clamp(32px,min(6vw,7svh),80px)] leading-[0.92] font-extrabold tracking-[-0.04em] sm:mb-5 lg:mb-5'
      >
        <span className='hero-line block overflow-hidden'>
          <span ref={line1Ref}>
            {beforeI}
            {iIndex >= 0 ? <span ref={iRef}>ı</span> : null}
            {afterI}
          </span>
        </span>
        <span className='hero-line block overflow-hidden'>
          <span ref={line2Ref}>{site.lastName}</span>
        </span>
        <RoamingDot
          containerRef={nameRef}
          lineRefs={[line1Ref, line2Ref]}
          originRef={iIndex >= 0 ? iRef : undefined}
        />
      </h1>

      <p className='stagger mb-4 max-w-none text-[clamp(14px,min(1.7vw,2.1svh),20px)] tracking-[-0.015em] lg:mb-5 lg:max-w-[24ch]'>
        {site.role}
        <span className='block text-mute'>{site.roleTail}</span>
      </p>

      <div className='stagger mb-3 flex flex-wrap gap-2.5 lg:mb-4'>
        {site.tags.map((tag) => (
          <span
            key={tag}
            className='rounded-full border border-line px-4 py-1.5 text-sm font-medium text-mute transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent'
          >
            {tag}
          </span>
        ))}
      </div>

      <div className='stagger mb-5 flex flex-wrap gap-2.5 lg:mb-6'>
        {site.socials.map((social) => {
          const Icon = iconMap[social.icon as IconName];
          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className='group grid size-10 place-items-center rounded-full border border-line transition-all duration-200 
              hover:-translate-y-0.75 hover:border-ink hover:bg-ink'
            >
              <Icon
                className='size-4.25 grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0'
                style={{ color: social.color }}
              />
            </a>
          );
        })}
      </div>

      <div className='stagger flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
        <Link
          href='/projects'
          className='inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_var(--color-accent)]'
        >
          See the work
        </Link>
        <Link
          href='/cv'
          className='inline-flex h-12 items-center justify-center rounded-full border border-ink px-8 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper'
        >
          Read the CV
        </Link>
      </div>
    </header>
  );
}
