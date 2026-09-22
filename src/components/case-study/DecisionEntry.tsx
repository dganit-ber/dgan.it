import Reveal from '@/src/components/Reveal';
import type { DecisionEntryProps } from '@/src/components/case-study/caseStudy.types';

export const DecisionEntry = ({
  title,
  cause,
  fix,
  result,
  labels,
}: DecisionEntryProps) => {
  const {
    cause: causeLabel = 'Cause',
    fix: fixLabel = 'Fix',
    result: resultLabel = 'Result',
  } = labels ?? {};

  return (
    <Reveal className='rounded-lg border border-line bg-surface p-6'>
      <h3 className='mb-4 font-display text-base font-semibold text-accent'>
        {title}
      </h3>
      <dl className='grid grid-cols-[76px_1fr] gap-x-4 gap-y-3 text-sm sm:grid-cols-[84px_1fr]'>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          {causeLabel}
        </dt>
        <dd className='leading-relaxed'>{cause}</dd>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          {fixLabel}
        </dt>
        <dd className='leading-relaxed'>{fix}</dd>
        <dt className='pt-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-mute uppercase'>
          {resultLabel}
        </dt>
        <dd className='leading-relaxed text-emerald-600'>{result}</dd>
      </dl>
    </Reveal>
  );
};
