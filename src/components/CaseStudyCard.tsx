import Link from 'next/link';
import { site } from '../app/site.config';

type CaseStudy = (typeof site.caseStudies)[number];

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const comingSoon = study.status === 'coming-soon';

  return (
    <Link
      href={study.href}
      className='group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-surface p-8 transition-colors duration-200 hover:border-accent/40 sm:flex-row sm:items-center'
    >
      <div>
        <p className='mb-2 font-mono text-xs tracking-[0.16em] text-mute uppercase'>
          {comingSoon ? 'Case study — in progress' : 'Case study'}
        </p>
        <h3 className='font-display text-xl font-semibold transition-colors group-hover:text-accent'>
          {study.title}
        </h3>
        <p className='mt-2 max-w-prose text-text-muted'>{study.blurb}</p>
      </div>
      <span className='flex shrink-0 items-center gap-2 font-mono text-xs font-medium text-accent transition-transform duration-200 group-hover:translate-x-1'>
        {comingSoon ? 'Coming soon' : 'Read the case study'}
        {!comingSoon && (
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
              d='M5 12h14M13 6l6 6-6 6'
            />
          </svg>
        )}
      </span>
    </Link>
  );
}
