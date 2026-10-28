import Link from 'next/link';
import { site } from '../../app/site.config';

/**
 * One action, one aside.
 *
 * The AI/pre-AI line used to sit high on the page with its own icons. It's a
 * claim rather than evidence, so it now runs quietly beside the single CTA,
 * below the products that actually prove the point.
 */
export default function HeroActions({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-7 gap-y-4 px-6 ${className}`}
    >
      <Link
        href={site.primaryCta.href}
        className='inline-flex h-[54px] w-full items-center justify-center rounded-xl bg-accent px-7 text-base font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_var(--color-accent)] sm:h-[50px] sm:w-auto'
      >
        {site.primaryCta.label}
      </Link>
      <p className='max-w-[46ch] text-sm leading-relaxed text-muted'>
        {site.craft}
      </p>
    </div>
  );
}
