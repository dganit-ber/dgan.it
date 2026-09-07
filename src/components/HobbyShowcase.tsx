'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { site } from '../app/site.config';

const SLIDE_MS = 2200;
const CLOSE_DELAY_MS = 120;

type HobbyId = (typeof site.hobbies)[number]['id'];

// Finished-piece photos per hobby, in public/hobbies/<id>/<n>.jpg. The folder
// name matches the hobby id, so adding a photo is: drop the file in and bump
// the count here.
const HOBBY_PHOTO_COUNT: Record<HobbyId, number> = {
  bookbinding: 4,
  'stained-glass': 3,
  'water-marbling': 4,
};

function hobbyImages(id: HobbyId) {
  return Array.from(
    { length: HOBBY_PHOTO_COUNT[id] },
    (_, i) => `/hobbies/${id}/${i + 1}.jpg`,
  );
}

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

// Small icon per pill, matching the reference site's icon+label pill style.
const HOBBY_ICONS: Record<HobbyId, React.ReactNode> = {
  bookbinding: (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.7}
      className='size-3'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4 4.5h6a2.5 2.5 0 012.5 2.5v12A2 2 0 0010.5 17H4z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M20 4.5h-6A2.5 2.5 0 0011.5 7v12A2 2 0 0113.5 17H20z'
      />
    </svg>
  ),
  'stained-glass': (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.7}
      className='size-3'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 2l10 10-10 10L2 12z'
      />
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 2v20M2 12h20' />
    </svg>
  ),
  'water-marbling': (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.7}
      className='size-3'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 15c2-3 4-3 6 0s4 3 6 0 4-3 6 0'
        opacity='0.5'
      />
    </svg>
  ),
};

export default function HobbyShowcase() {
  const [active, setActive] = useState<HobbyId>(site.hobbies[0].id);
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  // Close on a short delay so crossing the gap between the pills and the
  // panel above them doesn't dismiss it mid-reach.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  useEffect(() => cancelClose, []);

  // Selecting a hobby opens the panel and restarts its slideshow from the
  // first photo — done here rather than in an effect so it's a single render.
  const selectHobby = (id: HobbyId) => {
    cancelClose();
    setActive(id);
    setOpen(true);
    setSlide(0);
  };

  const images = hobbyImages(active);
  const count = images.length;
  const activeLabel =
    site.hobbies.find((h) => h.id === active)?.label ?? '';

  // Re-armed on every slide change (auto or manual) so clicking an arrow
  // doesn't get immediately overridden by the auto-advance tick.
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => setSlide((s) => (s + 1) % count), SLIDE_MS);
    return () => clearTimeout(t);
  }, [slide, active, open, count]);

  const advance = (dir: 1 | -1) =>
    setSlide((s) => (s + dir + count) % count);

  return (
    <div
      className='relative'
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      <div className='flex flex-nowrap gap-2 overflow-x-auto pb-1'>
        {site.hobbies.map((hobby) => (
          <button
            key={hobby.id}
            onMouseEnter={() => selectHobby(hobby.id)}
            onFocus={() => selectHobby(hobby.id)}
            onClick={() => selectHobby(hobby.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-200 hover:scale-105 ${
              active === hobby.id && open
                ? 'border-accent/50 bg-accent/10 text-accent'
                : 'border-line bg-surface-2/60 text-text-muted hover:border-accent/30 hover:bg-surface-2 hover:text-accent'
            }`}
          >
            {HOBBY_ICONS[hobby.id]}
            {hobby.label}
          </button>
        ))}
      </div>

      {/* pb-3 (not mb-3) so this wrapper's box bridges the visual gap down to
          the pills — the mouse never crosses dead space on the way up. */}
      <div
        className={`absolute bottom-full left-0 z-20 w-full max-w-sm pb-3 transition-all duration-300 ease-out ${
          open
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <div className='relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-black/20'>
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${activeLabel} — finished piece ${i + 1}`}
                fill
                sizes='(max-width: 400px) 100vw, 384px'
                className={`object-cover transition-opacity duration-700 ${
                  i === slide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            <button
              aria-label='Previous photo'
              onClick={() => advance(-1)}
              className='absolute top-1/2 left-3 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60'
            >
              <ChevronIcon direction='left' />
            </button>
            <button
              aria-label='Next photo'
              onClick={() => advance(1)}
              className='absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60'
            >
              <ChevronIcon direction='right' />
            </button>

            <div className='absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-linear-to-t from-black/50 to-transparent p-4'>
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slide ? 'w-4 bg-accent' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
