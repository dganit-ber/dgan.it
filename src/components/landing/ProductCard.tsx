import Link from 'next/link';
import type { Product, StatusTone } from '../../app/site.config';

/* Tone drives the status pill and the rule beside the craft note, nothing
   else. The greens are palette tokens (`ok` / `ok-dim`), not Tailwind's
   emerald scale, so they flip with the theme instead of staying a dark-theme
   colour on a light background. */
const TONE: Record<StatusTone, { pill: string; rule: string; dot: boolean }> = {
  live: {
    pill: 'text-ok',
    rule: 'border-ok',
    dot: true,
  },
  launching: {
    pill: 'bg-accent text-accent-ink px-2.5 py-1',
    rule: 'border-accent',
    dot: true,
  },
  next: {
    pill: 'bg-amber-300 text-amber-950 px-2.5 py-1',
    rule: 'border-amber-300',
    dot: false,
  },
};

function PhoneIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' className='size-3'>
      <rect
        x='6.5'
        y='2.5'
        width='11'
        height='19'
        rx='2.5'
        stroke='currentColor'
        strokeWidth={2}
      />
      <path
        d='M10.6 18.4h2.8'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox='0 0 16 16'
      fill='none'
      aria-hidden='true'
      className='size-3.5'
    >
      <path
        d='M3 8h10M9 4l4 4-4 4'
        stroke='currentColor'
        strokeWidth={1.8}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const tone = TONE[product.status.tone];
  const featured = product.featured;

  return (
    <article
      id={product.key}
      /* `h-full min-h-0 overflow-hidden`: the card takes the rail's height
         rather than setting it. Without `min-h-0` it refuses to shrink below
         its content and pushes the swipe hint off screen. */
      className={`flex h-full w-[286px] min-h-0 shrink-0 snap-start flex-col gap-2.5 overflow-hidden rounded-[18px] bg-surface p-4 sm:w-[300px] sm:gap-3.5 sm:p-5.5 lg:h-auto lg:w-auto lg:min-w-0 lg:shrink ${
        featured
          ? 'border border-accent/45 lg:flex-[1.45_1_360px]'
          : 'border border-line lg:flex-[1_1_300px]'
      }`}
    >
      <div className='flex flex-wrap items-center gap-2 sm:gap-2.5'>
        <h3
          className={`font-display tracking-[-0.027em] ${
            featured
              ? 'text-[21px] font-extrabold sm:text-[27px]'
              : 'text-[19px] font-bold sm:text-[22px]'
          }`}
        >
          {product.title}
        </h3>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full font-mono text-[10px] tracking-[0.06em] uppercase ${tone.pill}`}
        >
          {tone.dot ? (
            <span className='size-1.5 rounded-full bg-current' />
          ) : (
            <PhoneIcon />
          )}
          {product.status.label}
        </span>
      </div>

      {/* Clamped on mobile so one long lede can't cost the card its panel. */}
      <p
        className={`line-clamp-3 text-sm leading-snug text-text sm:line-clamp-none ${
          featured ? 'sm:text-base' : 'sm:text-[15px]'
        }`}
      >
        {product.lede}
      </p>

      {/* First thing to go when the viewport is short — the alternative is
          the swipe hint falling off the bottom instead. */}
      <p
        className={`line-clamp-3 border-l-2 pl-3 text-[13px] leading-relaxed text-text-muted sm:line-clamp-none sm:text-sm [@media(max-height:730px)]:hidden lg:block ${tone.rule}`}
      >
        {product.craftNote}
      </p>

      <div className='mt-auto flex shrink-0 flex-wrap items-center justify-between gap-2.5 pt-0.5'>
        <span className='font-mono text-[11px] text-mute'>{product.stack}</span>
        <Link
          href={product.href}
          className='inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-accent transition-colors hover:text-accent-dim'
        >
          Case study
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
