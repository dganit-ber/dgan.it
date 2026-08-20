'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './icons';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.dataset.theme = 'light';
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem('theme', next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className='grid size-9 shrink-0 place-items-center rounded-full border border-line text-mute transition-colors duration-200 hover:border-accent/40 hover:text-accent'
    >
      {theme === 'dark' ? <SunIcon className='size-4' /> : <MoonIcon className='size-4' />}
    </button>
  );
}
