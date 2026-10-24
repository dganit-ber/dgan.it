import Link from 'next/link';
import { site } from '../../app/site.config';

function BoltIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' className='size-3.5'>
      <path
        d='M13 2.5L4.5 13.8h6L11 21.5l8.5-11.3h-6L13 2.5z'
        stroke='currentColor'
        strokeWidth={1.8}
        strokeLinejoin='round'
      />
    </svg>
  );
}

function AnvilIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' aria-hidden='true' className='size-3.5'>
      <path
        d='M9.5 3.5h5M12 3.5v4M5.5 20.5h13M6.5 20.5l3-9h5l3 9'
        stroke='currentColor'
        strokeWidth={1.8}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

/**
 * The lede, the AI/craft pair and the two calls to action.
 *
 * Rendered twice, in two places, exactly one of which is ever visible:
 *
 * - inside `Hero`'s right column on desktop (`hidden lg:block`), where there
 *   is horizontal room beside the headline;
 * - after `ProductRow` on mobile (`lg:hidden`), because on a phone the first
 *   screenful should be name, headline and the work itself. The pitch and the
 *   buttons are what you read once the products have earned it.
 *
 * `hidden` is display:none, so the inactive copy is out of the accessibility
 * tree too — no duplicate links or headings are announced.
 */
export default function HeroAside({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <p className='mb-3.5 text-base leading-relaxed text-text-muted'>
        {site.lede}
      </p>

      <ul className='mb-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-4.5'>
        <li className='flex items-center gap-2 font-mono text-xs text-text'>
          <span className='text-accent'>
            <BoltIcon />
          </span>
          {site.craft.fast}
        </li>
        <li className='flex items-center gap-2 font-mono text-xs text-text'>
          <span className='text-ok'>
            <AnvilIcon />
          </span>
          {site.craft.careful}
        </li>
      </ul>

      <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
        <Link
          href={site.primaryCta.href}
          className='inline-flex h-13 items-center justify-center rounded-xl bg-accent px-6 text-[15px] font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_var(--color-accent)] sm:h-12'
        >
          {site.primaryCta.label}
        </Link>
        <Link
          href='/contact'
          className='inline-flex h-13 items-center justify-center rounded-xl border border-line px-6 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-ink sm:h-12'
        >
          Work with me
        </Link>
      </div>
    </div>
  );
}
