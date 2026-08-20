import Link from 'next/link';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id='projects' className='mx-auto max-w-6xl px-6 py-24'>
      <Reveal>
        <span className='mb-3 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.3em] text-accent uppercase'>
          <span className='h-1.5 w-1.5 animate-glow-pulse rounded-full bg-accent' />
          Projects
        </span>
        <h2 className="gradient-text relative inline-block font-mono text-2xl font-semibold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:content-[''] hover:after:scale-x-100">
          Projects
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <Link
          href='/projects/ff-library'
          className='group mt-10 flex flex-col justify-between gap-6 rounded-2xl border border-line bg-surface p-8 transition-colors duration-200 hover:border-accent/40 sm:flex-row sm:items-center'
        >
          <div>
            <p className='mb-2 font-mono text-xs tracking-[0.16em] text-mute uppercase'>
              Case study
            </p>
            <h3 className='font-display text-xl font-semibold transition-colors group-hover:text-accent'>
              The Fan Fiction Library
            </h3>
            <p className='mt-2 max-w-prose text-text-muted'>
              A reading list and browser extension for Archive of Our Own — built,
              shipped, and run solo. 700+ registered users, 115k+ entries indexed.
            </p>
          </div>
          <span className='flex shrink-0 items-center gap-2 font-mono text-xs font-medium text-accent transition-transform duration-200 group-hover:translate-x-1'>
            Read the case study
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
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
