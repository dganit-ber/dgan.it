import { Eyebrow } from '@/src/components/case-study/Eyebrow';
import Reveal from '@/src/components/Reveal';
import type { SectionProps } from '@/src/components/case-study/caseStudy.types';

export const Section = ({
  id,
  border = true,
  eyebrowIndex,
  eyebrow,
  title,
  content,
  contentClassName = 'mb-8 max-w-[58ch] text-mute',
  revealChildren = false,
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-14 sm:py-16 ${border ? 'border-t border-line' : ''}`}
    >
      <Reveal>
        {eyebrow && <Eyebrow index={eyebrowIndex ?? ''}>{eyebrow}</Eyebrow>}
        {title && (
          <h2 className='mb-4 font-display text-2xl font-bold tracking-[-0.01em] sm:text-3xl'>
            {title}
          </h2>
        )}
        {content && <p className={contentClassName}>{content}</p>}
        {revealChildren && children}
      </Reveal>
      {!revealChildren && children}
    </section>
  );
};
