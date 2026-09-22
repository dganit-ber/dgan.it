import Link from 'next/link';
import Reveal from '@/src/components/Reveal';
import type { HeroProps } from '@/src/components/case-study/caseStudy.types';

export const Hero = ({
  breadcrumb,
  mark,
  title,
  note,
  intro,
  meta,
  links,
  media,
}: HeroProps) => {
  return (
    <div id='overview' className='scroll-mt-28'>
      <Reveal>
        <p className='mb-5 font-mono text-xs font-medium tracking-[0.2em] text-mute uppercase'>
          01 ·{' '}
          <Link href='/projects' className='transition-colors hover:text-accent'>
            Projects
          </Link>{' '}
          / {breadcrumb}
        </p>
        {mark}
        <h1 className='font-display text-4xl font-bold tracking-[-0.02em] text-accent sm:text-5xl'>
          {title}
        </h1>
        {note && (
          <p className='mt-5 max-w-[56ch] border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-mute'>
            {note}
          </p>
        )}
        <p className='mt-5 max-w-[56ch] text-lg leading-relaxed text-mute'>
          {intro}
        </p>

        <dl className='mt-10 grid grid-cols-2 gap-x-7 gap-y-5 border-t border-line pt-6 sm:grid-cols-4'>
          {meta.map((item) => (
            <div key={item.label}>
              <dt className='mb-1 font-mono text-[10.5px] font-medium tracking-[0.16em] text-mute uppercase'>
                {item.label}
              </dt>
              <dd className='text-sm'>{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className='mt-7 flex flex-wrap gap-2.5'>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={
                link.primary
                  ? 'rounded-md bg-accent px-4 py-2.5 font-mono text-xs font-medium text-accent-ink transition-colors hover:bg-accent-dim'
                  : 'rounded-md border border-line px-4 py-2.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {media}
      </Reveal>
    </div>
  );
};
