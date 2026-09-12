import Link from 'next/link';
import Paragraphs from './Paragraphs';
import Reveal from './Reveal';
import { site } from '../app/site.config';

// A compact, self-scrolling window onto the CV — summary, experience and
// education straight from site.cv, with a link out to the full page. The
// inner box scrolls; the page doesn't.
export default function CvPreview() {
  return (
    <section className='mx-auto w-full max-w-6xl px-6 py-8'>
      <Reveal className='rounded-[28px] border border-line bg-surface px-6 py-8 sm:px-10 sm:py-10'>
        <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4'>
          <p className='font-mono text-xs font-medium tracking-[0.22em] text-mute uppercase'>
            Curriculum vitae
          </p>
          <Link
            href='/cv'
            className='flex shrink-0 items-center gap-1.5 font-mono text-xs font-medium text-accent transition-transform duration-200 hover:translate-x-0.5'
          >
            Read full CV
            <svg
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              className='size-3.5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 12h14M13 6l6 6-6 6'
              />
            </svg>
          </Link>
        </div>

        <div className='relative'>
          <div className='max-h-[420px] overflow-y-auto rounded-xl border border-line bg-bg p-6 sm:p-8'>
          <h3 className='font-display text-lg font-semibold'>
            {site.cv.title}
          </h3>
          <Paragraphs
            text={site.cv.summary}
            className='mt-3'
            paragraphClassName='text-sm leading-relaxed text-mute'
          />

          <p className='mt-8 mb-4 font-mono text-[10px] font-medium tracking-[0.16em] text-accent uppercase'>
            Experience
          </p>
          <div className='flex flex-col gap-6'>
            {site.cv.experience.map((job) => (
              <div key={job.company}>
                <div className='flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between'>
                  <h4 className='font-display text-sm font-semibold'>
                    {job.role}{' '}
                    <span className='font-normal text-mute'>· {job.company}</span>
                  </h4>
                  <span className='font-mono text-[11px] whitespace-nowrap text-mute'>
                    {job.period}
                  </span>
                </div>
                <ul className='mt-2 flex flex-col gap-1.5'>
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className='flex gap-2.5 text-xs leading-relaxed text-mute'
                    >
                      <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent' />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className='mt-8 mb-4 font-mono text-[10px] font-medium tracking-[0.16em] text-accent uppercase'>
            Education
          </p>
          <div className='flex flex-col gap-3'>
            {site.cv.education.map((entry) => (
              <div key={entry.title}>
                <h4 className='font-display text-sm font-semibold'>
                  {entry.title}
                </h4>
                <p className='text-xs text-mute'>
                  {entry.period} — {entry.description}
                </p>
              </div>
            ))}
          </div>
          </div>
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-xl bg-linear-to-t from-bg to-transparent' />
        </div>
      </Reveal>
    </section>
  );
}
