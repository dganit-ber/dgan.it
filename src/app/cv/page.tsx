import type { Metadata } from 'next';
import CvNav from '../../components/CvNav';
import PageShell from '../../components/PageShell';
import Paragraphs from '../../components/Paragraphs';
import { site } from '../site.config';

const fullName = `${site.firstName} ${site.lastName}`;

export const metadata: Metadata = {
  title: `CV — ${fullName}`,
  description: `${fullName} — ${site.cv.title}`,
};

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className='mb-6 flex items-baseline gap-3'>
      <span className='font-mono text-sm text-accent'>{index}</span>
      <h2 className='font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
        {title}
      </h2>
    </div>
  );
}

export default function CvPage() {
  return (
    <PageShell>
      <main className='mx-auto w-full max-w-6xl px-6 pt-32 pb-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16'>
          {/* Left column: name, title, contact, and section nav all stay
              pinned together while the right column scrolls. */}
          <div className='lg:sticky lg:top-32 lg:h-fit'>
            <h1 className='font-display text-3xl font-bold tracking-[-0.02em]'>
              {fullName}
            </h1>
            <p className='mt-2 text-mute'>{site.cv.title}</p>

            <div className='mt-6 flex flex-col gap-1 font-mono text-xs text-mute'>
              <a
                href={`mailto:${site.cv.email}`}
                className='transition-colors hover:text-accent'
              >
                {site.cv.email}
              </a>
              <span>{site.cv.phone}</span>
              <span>{site.cv.location}</span>
              <a
                href={`https://${site.cv.linkedin}`}
                target='_blank'
                rel='noopener noreferrer'
                className='transition-colors hover:text-accent'
              >
                {site.cv.linkedin}
              </a>
            </div>

            <div className='mt-8 border-t border-line pt-6'>
              <CvNav />
            </div>
          </div>

          <div className='flex flex-col gap-20'>
            <section id='summary' className='scroll-mt-28'>
              <SectionHeading index='01' title='Summary' />
              <Paragraphs
                text={site.cv.summary}
                className='max-w-prose'
                paragraphClassName='text-md leading-relaxed text-mute'
              />
            </section>

            <section id='skills' className='scroll-mt-28'>
              <SectionHeading index='02' title='Skills' />
              <div className='columns-1 gap-x-10 sm:columns-2'>
                {site.cv.skills.map((group) => (
                  <div key={group.category} className='mb-6 break-inside-avoid'>
                    <h3 className='mb-2 font-mono text-xs tracking-[0.12em] text-accent uppercase'>
                      {group.category}
                    </h3>
                    <p className='text-mute'>{group.items.join(', ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id='experience' className='scroll-mt-28'>
              <SectionHeading index='03' title='Experience' />
              <div className='flex flex-col gap-12'>
                {site.cv.experience.map((job) => (
                  <div
                    key={job.company}
                    className='border-t border-line pt-8 first:border-t-0 first:pt-0'
                  >
                    <div className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between'>
                      <h3 className='font-display text-xl font-semibold'>
                        {job.role}{' '}
                        <span className='font-normal text-mute'>
                          ·{' '}
                          {job.companyUrl ? (
                            <a
                              href={job.companyUrl}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='underline decoration-line underline-offset-2 transition-colors hover:text-accent'
                            >
                              {job.company}
                            </a>
                          ) : (
                            job.company
                          )}
                          {job.companyNote ? ` (${job.companyNote})` : ''}
                        </span>
                      </h3>
                      <span className='font-mono text-xs whitespace-nowrap text-mute'>
                        {job.period}
                      </span>
                    </div>
                    <p className='mt-1 text-sm text-mute'>{job.location}</p>
                    <ul className='mt-4 flex flex-col gap-2'>
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className='flex gap-3 text-mute'>
                          <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-accent' />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id='education' className='scroll-mt-28'>
              <SectionHeading index='04' title='Education' />
              <div className='flex flex-col gap-6'>
                {site.cv.education.map((entry) => (
                  <div
                    key={entry.title}
                    className='flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between'
                  >
                    <div>
                      <h3 className='font-display text-lg font-semibold'>
                        {entry.title}
                      </h3>
                      <p className='text-sm text-mute'>{entry.description}</p>
                    </div>
                    <span className='font-mono text-xs whitespace-nowrap text-mute'>
                      {entry.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
