'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'CV', href: '#cv' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`animate-fade-in-up fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-border py-3 shadow-lg shadow-black/20'
          : 'py-5'
      }`}
    >
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6'>
        {/* Logo */}
        <a
          href='#'
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className='group flex items-center gap-2'
        >
          <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 font-mono text-sm font-bold text-accent transition-all duration-200 group-hover:bg-accent/20 group-hover:border-accent/40 group-hover:-rotate-12 group-hover:scale-110'>
            d
          </span>
          <span className='font-mono text-sm font-semibold text-text'>
            dgan<span className='text-accent'>.it</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className='hidden items-center gap-1 md:flex'>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className="relative rounded-md px-4 py-2 text-sm text-text-muted transition-all duration-200 hover:bg-white/5 hover:text-accent cursor-pointer after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href='hhttps://github.com/dganit-ber'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:border-accent/60 hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/10'
            >
              GitHub
              <svg
                className='h-3.5 w-3.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className='flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/30 hover:text-accent md:hidden'
          aria-label='Toggle menu'
        >
          <span
            className={`block transition-all duration-200 ${menuOpen ? 'rotate-45' : ''}`}
          >
            {menuOpen ? (
              <svg
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='flex flex-col gap-1 border-t border-border px-6 py-4'>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className='w-full rounded-md px-4 py-3 text-left text-sm text-text-muted transition-all duration-200 hover:translate-x-1 hover:bg-white/5 hover:text-accent cursor-pointer'
              >
                {label}
              </button>
            </li>
          ))}
          <li className='pt-2'>
            <a
              href='https://github.com/dgan'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent'
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
