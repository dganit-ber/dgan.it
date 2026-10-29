import Link from 'next/link';
import { products, site } from '../../app/site.config';
import type { StatusTone } from '../../app/site.config';

/**
 * The three products: name, one line, link.
 *
 * Not cards. There's no border, no background and no panel, because anything
 * with a box around it reads as a thing to examine, and these are meant to be
 * scanned on the way to a case study. Stripping the chrome is what lets the
 * name above them stay the focal point.
 *
 * The whole entry is one `<Link>`, so the target is the full column rather
 * than four words of link text.
 */

/* Tone colours the status marker only. `ok` and `accent` are palette tokens
   so they flip with the theme; amber is Tailwind's, used once, for the one
   status that isn't live yet. */
const TONE: Record<StatusTone, string> = {
  live: 'text-ok',
  launching: 'text-accent',
  next: 'light:text-amber-100 dark:text-amber-800',
};

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

export default function ProductList() {
  return (
    <section
      id='work'
      aria-label='Products'
      className='mx-auto w-full max-w-6xl px-6 -mt-6 md:mt-0'
    >
      <h2 className='mb-4 border-t border-line pt-4 font-mono text-[11px] tracking-[0.14em] text-muted uppercase'>
        {site.proofLabel}
      </h2>

      <ul className='productList flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-4.5'>
        {products.map((product) => (
          <li key={product.key} className='min-w-0 sm:flex-[1_1_280px]'>
            <Link href={product.href} className='group block'>
              <span className='mb-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1'>
                <span className='font-display text-[21px] font-bold tracking-[-0.022em] transition-colors group-hover:text-accent sm:text-[23px]'>
                  {product.title}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-[0.08em] uppercase ${TONE[product.status.tone]}`}
                >
                  {product.status.label}
                </span>
              </span>

              <span className='mb-2 block text-[15px] leading-snug text-text-muted'>
                {product.lede}
              </span>

              <span className='inline-flex min-h-7.5 rounded-xl items-center gap-1.5 text-md font-semibold hover:bg-accent hover:text-white text-accent p-2'>
                Case study
                <ArrowIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
