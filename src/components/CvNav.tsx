'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'summary', index: '01', label: 'Summary' },
  { id: 'skills', index: '02', label: 'Skills' },
  { id: 'experience', index: '03', label: 'Experience' },
  { id: 'education', index: '04', label: 'Education' },
];

export default function CvNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className='flex flex-row gap-4 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0'>
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`group flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 font-mono text-xs tracking-[0.08em] whitespace-nowrap uppercase transition-all duration-200 lg:rounded-lg ${
            active === s.id
              ? 'border-accent/30 bg-accent/10 text-accent'
              : 'border-line bg-surface-2/60 text-mute hover:-translate-y-px hover:border-accent/30 hover:bg-surface-2 hover:text-ink'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
              active === s.id ? 'bg-accent' : 'bg-line group-hover:bg-mute'
            }`}
          />
          {s.index} {s.label}
        </a>
      ))}
    </nav>
  );
}
