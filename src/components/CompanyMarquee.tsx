'use client';

import { useState } from 'react';
import { site } from '../app/site.config';

type Company = (typeof site.companies)[number];

/**
 * The scrolling logo strip.
 *
 * Two shapes, because it appears in two places:
 *
 * - `variant="strip"` — compact, inline label, no card. Sits at the bottom of
 *   the landing screen, under the products. Small on purpose: it's the last
 *   thing on that screen and must not pull the eye off the name.
 * - `variant="panel"` — the original boxed version with a centred heading,
 *   for use further down a page.
 *
 * `kind` filters the list. The landing strip passes "employer" so the three
 * products aren't repeated directly under their own entries.
 *
 * The track is duplicated in the markup so the -50% translate in
 * `.marquee-track-h` loops seamlessly. The animation pauses on hover, and
 * globals.css disables it under `prefers-reduced-motion`.
 */
export default function CompanyMarquee({
  variant = 'panel',
  kind,
  label = "Companies I've worked with",
}: {
  variant?: 'panel' | 'strip';
  kind?: Company['kind'];
  label?: string;
}) {
  const source = kind
    ? site.companies.filter((c) => c.kind === kind)
    : site.companies;
  const companies = [...source, ...source];

  const track = (
    <div className='companyMarquee flex flex-col marquee-mask-h relative w-full overflow-hidden'>
      <ul className='marquee-track-h flex w-max items-center gap-14'>
        {companies.map((company, i) => (
          <li key={`${company.name}-${i}`} className='text-2xl'>
            <CompanyLogo company={company} variant={variant} />
          </li>
        ))}
      </ul>
    </div>
  );

  if (variant === 'strip') {
    return (
      <section aria-label={label} className='mx-auto md:max-w-6xl w-full mb-1'>
        <div className='companyMarquee flex flex-col gap-3 border-t border-line  sm:items-center sm:gap-7 '>
          <p className='font-mono md:text-lg  mx-auto tracking-[0.14em] text-muted uppercase'>
            {label}
          </p>
          {track}
        </div>
      </section>
    );
  }

  return (
    <section className='companyMarquee  mx-auto w-full max-w-6xl px-6 py-8'>
      <div className='rounded-[28px] border border-line bg-surface px-6 py-5 sm:px-10 sm:py-12'>
        <p className='mb-8 text-center font-mono text-lg font-medium tracking-[0.22em] text-mute uppercase'>
          {label}
        </p>
        {track}
      </div>
    </section>
  );
}

function CompanyLogo({
  company,
  variant,
}: {
  company: Company;
  variant: 'panel' | 'strip';
}) {
  const [failed, setFailed] = useState(false);
  const showIcon = company.domain && !failed;
  const strip = variant === 'strip';

  return (
    <div className='group flex shrink-0 items-center gap-2 sm:gap-3'>
      {showIcon ? (
        // eslint-disable-next-line @next/next/no-img-element -- external, variable-domain favicons
        <img
          src={`https://icons.duckduckgo.com/ip3/${company.domain}.ico`}
          alt=''
          className='size-7 shrink-0 grayscale transition-all duration-300 group-hover:grayscale-0 sm:size-8'
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className={`grid shrink-0 place-items-center rounded-full border border-line font-mono font-semibold text-mute ${
            strip ? 'size-5 text-[8px]' : 'size-7 text-[10px] sm:size-8'
          }`}
        >
          {company.mark}
        </span>
      )}
      <span
        className={`font-display font-semibold tracking-[-0.01em] text-mute transition-colors duration-300 group-hover:text-ink ${
          strip ? 'text-[24px]' : 'text-2xl sm:text-xl'
        }`}
      >
        {company.name}
      </span>
    </div>
  );
}
