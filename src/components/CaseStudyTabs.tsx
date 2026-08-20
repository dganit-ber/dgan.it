'use client';

import { useState, type ReactNode } from 'react';

type TabId = 'frontend' | 'backend';

const TABS: { id: TabId; label: string }[] = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
];

export default function CaseStudyTabs({
  frontend,
  backend,
}: {
  frontend: ReactNode;
  backend: ReactNode;
}) {
  const [active, setActive] = useState<TabId>('frontend');

  const focusTab = (id: TabId) => {
    setActive(id);
    document.getElementById(`tab-${id}`)?.focus();
  };

  return (
    <div>
      <div
        role='tablist'
        aria-label='Project view'
        className='mb-10 inline-flex gap-1 rounded-lg border border-line bg-surface p-1'
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role='tab'
            id={`tab-${tab.id}`}
            aria-controls={`panel-${tab.id}`}
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            onKeyDown={(e) => {
              if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
              focusTab(active === 'frontend' ? 'backend' : 'frontend');
            }}
            className={`rounded-md px-5 py-2 font-mono text-xs font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${
              active === tab.id
                ? 'bg-accent text-accent-ink'
                : 'text-mute hover:text-ink'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id='panel-frontend'
        role='tabpanel'
        aria-labelledby='tab-frontend'
        hidden={active !== 'frontend'}
      >
        {frontend}
      </div>
      <div
        id='panel-backend'
        role='tabpanel'
        aria-labelledby='tab-backend'
        hidden={active !== 'backend'}
      >
        {backend}
      </div>
    </div>
  );
}
