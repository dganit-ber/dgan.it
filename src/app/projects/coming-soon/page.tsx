import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '../../../components/PageShell';
import { site } from '../../site.config';

export const metadata: Metadata = {
  title: `Case study in progress — ${site.firstName} ${site.lastName}`,
  robots: { index: false },
};

export default function ComingSoonPage() {
  return (
    <PageShell>
      <main className='mx-auto flex w-full max-w-3xl flex-col items-start px-6 pt-40 pb-32'>
        <p className='mb-4 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase'>
          <span className='h-1.5 w-1.5 shrink-0 rounded-full bg-accent' />
          Case study
        </p>
        <h1 className='font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl'>
          Write-up in progress
        </h1>
        <p className='mt-5 max-w-[52ch] text-lg leading-relaxed text-mute'>
          This one isn&rsquo;t written yet. The Fan Fiction Library case study is
          live now — the rest are on their way.
        </p>
        <Link
          href='/projects'
          className='mt-10 inline-flex h-12 items-center justify-center rounded-full border border-ink px-8 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-paper'
        >
          Back to projects
        </Link>
      </main>
    </PageShell>
  );
}
