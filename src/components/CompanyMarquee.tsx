'use client';

import { useState } from 'react';
import { site } from '../app/site.config';

type Company = (typeof site.companies)[number];

export default function CompanyMarquee() {
  const companies = [...site.companies, ...site.companies];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="rounded-[28px] border border-line bg-surface px-6 py-10 sm:px-10 sm:py-12">
        <p className="mb-8 text-center font-mono text-xs font-medium tracking-[0.22em] text-mute uppercase">
          Companies I&apos;ve worked with
        </p>

        <div className="marquee-mask-h relative w-full overflow-hidden">
          <ul className="marquee-track-h flex w-max items-center gap-14">
            {companies.map((c, i) => (
              <li key={`${c.name}-${i}`} className="shrink-0">
                <CompanyLogo company={c} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CompanyLogo({ company }: { company: Company }) {
  const [failed, setFailed] = useState(false);
  const showIcon = company.domain && !failed;

  return (
    <div className="group flex shrink-0 items-center gap-3">
      {showIcon ? (
        // eslint-disable-next-line @next/next/no-img-element -- external, variable-domain favicons
        <img
          src={`https://icons.duckduckgo.com/ip3/${company.domain}.ico`}
          alt=""
          className="size-7 shrink-0 grayscale transition-all duration-300 group-hover:grayscale-0 sm:size-8"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line font-mono text-[10px] font-semibold text-mute sm:size-8">
          {company.mark}
        </span>
      )}
      <span className="font-display text-2xl font-semibold tracking-[-0.01em] text-mute transition-colors duration-300 group-hover:text-ink sm:text-3xl">
        {company.name}
      </span>
    </div>
  );
}
