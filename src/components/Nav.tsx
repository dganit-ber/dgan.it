'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, MoonIcon, SunIcon } from './icons';
import { site } from '../app/site.config';

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function toggleTheme() {
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setDark(!dark);
  }

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-2.5 z-60 flex justify-center px-2.5 sm:top-4 sm:px-4 ${
          stuck ? 'nav-stuck' : ''
        }`}
        style={{ pointerEvents: 'none' }}
      >
        <div
          className='nav-pill flex h-16 w-full max-w-[1180px] items-center gap-1.5 rounded-full border border-line pr-2 pl-2.5 sm:gap-3 sm:pr-2.5 sm:pl-4'
          style={{ pointerEvents: 'auto' }}
        >
          <button
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className='grid size-9.5 flex-none place-items-center rounded-full text-mute transition-colors hover:bg-surface hover:text-ink'
          >
            {dark ? (
              <SunIcon className='size-[18px]' />
            ) : (
              <MoonIcon className='size-[18px]' />
            )}
          </button>

          <div className='hidden flex-1 items-center justify-center gap-2 lg:flex lg:gap-8'>
            {site.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='nav-link relative px-1 py-2 text-[15px] font-medium whitespace-nowrap text-mute transition-colors hover:text-ink'
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`ml-auto grid size-9.5 flex-none place-items-center rounded-full hover:bg-surface lg:hidden ${
              open ? 'burger-open' : ''
            }`}
          >
            <span className='flex flex-col gap-[5px]'>
              <span className='burger-bar block h-[1.6px] w-[17px] bg-current' />
              <span className='burger-bar block h-[1.6px] w-[17px] bg-current' />
              <span className='burger-bar block h-[1.6px] w-[17px] bg-current' />
            </span>
          </button>

          <div className='flex flex-none items-center gap-2 lg:ml-0'>
            <a
              href={site.socials[0].href}
              aria-label='GitHub'
              className='hidden size-10.5 place-items-center rounded-full bg-[#181717] text-white transition-transform hover:-translate-y-0.5 hover:scale-105 sm:grid'
            >
              <GithubIcon className='size-[18px]' />
            </a>
            <a
              href={site.linkedin}
              aria-label='LinkedIn'
              className='grid size-9.5 place-items-center rounded-full bg-[#0A66C2] text-white transition-transform hover:-translate-y-0.5 hover:scale-105 sm:size-10.5'
            >
              <LinkedinIcon className='size-[18px]' />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label='Email'
              className='grid size-9.5 place-items-center rounded-full bg-ink text-paper transition-transform hover:-translate-y-0.5 hover:scale-105 sm:size-10.5'
            >
              <MailIcon className='size-[18px]' />
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`sheet fixed inset-x-0 top-0 z-50 border-b border-line bg-paper px-6 pt-[98px] pb-8 lg:hidden ${
          open ? 'sheet-open' : ''
        }`}
      >
        {site.nav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className='block border-b border-line py-4 font-display text-[27px] font-semibold tracking-[-0.02em]'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
