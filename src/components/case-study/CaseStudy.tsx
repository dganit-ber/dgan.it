import CaseStudyTabs from '@/src/components/CaseStudyTabs';
import { Bullets } from '@/src/components/case-study/Bullets';
import { CaseStudyLayout } from '@/src/components/case-study/CaseStudyLayout';
import { DecisionEntry } from '@/src/components/case-study/DecisionEntry';
import { Hero } from '@/src/components/case-study/Hero';
import { NextItem } from '@/src/components/case-study/NextItem';
import { Section } from '@/src/components/case-study/Section';
import type { CaseStudyProps } from '@/src/components/case-study/caseStudy.types';

/**
 * The uniform case-study template: problem → how it's built → decisions →
 * results. Right for a product with a frontend and a backend to talk about.
 *
 * It is not the only shape a case study can take. A project whose interesting
 * parts don't fit these four headings should compose `CaseStudyLayout` with
 * its own sections instead — see /projects/berlin-help.
 */
export const CaseStudy = ({
  problem,
  build,
  decisions,
  results,
  ...hero
}: CaseStudyProps) => {
  return (
    <CaseStudyLayout>
      {/* ============ HERO ============ */}
      <Hero {...hero} />

      {/* ============ PROBLEM ============ */}
      <Section
        id='problem'
        eyebrowIndex='02'
        eyebrow='The problem'
        title={problem.title}
        revealChildren
      >
        {problem.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className={
              i === problem.paragraphs.length - 1
                ? 'mb-6 text-mute'
                : 'mb-4 text-mute'
            }
          >
            {paragraph}
          </p>
        ))}
        <Bullets items={problem.bullets} />
      </Section>

      {/* ============ TWO VIEWS ============ */}
      <Section
        id='how-its-built'
        eyebrowIndex='03'
        eyebrow={<>How it&rsquo;s built</>}
        title={build.title}
        content={build.intro}
        contentClassName='mb-8 max-w-[60ch] text-mute'
      >
        <CaseStudyTabs frontend={build.frontend} backend={build.backend} />
      </Section>

      {/* ============ DECISION LOG ============ */}
      <Section
        id='decision-log'
        eyebrowIndex='04'
        eyebrow={decisions.eyebrow ?? 'Decision log'}
        title={decisions.title}
        content={decisions.intro}
      >
        <div className='flex flex-col gap-4'>
          {decisions.entries.map((entry) => (
            <DecisionEntry
              key={entry.title}
              title={entry.title}
              cause={entry.cause}
              fix={entry.fix}
              result={entry.result}
              labels={decisions.labels}
            />
          ))}
        </div>
      </Section>

      {/* ============ RESULTS ============ */}
      <Section
        id='results'
        eyebrowIndex='05'
        eyebrow='Where it stands'
        title={results.title}
        content={results.intro}
        contentClassName='mb-8 text-mute'
      >
        {results.media}

        <p
          className={`mb-4 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase ${
            results.media ? 'mt-11' : 'mt-2'
          }`}
        >
          Next
        </p>
        <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
          {results.next.map((item) => (
            <NextItem key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </Section>
    </CaseStudyLayout>
  );
};
