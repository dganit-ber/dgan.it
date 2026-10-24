import type { ReactNode } from 'react';
import CaseStudyNav from '@/src/components/CaseStudyNav';
import PageShell from '@/src/components/PageShell';
import type { CaseStudySection } from '@/src/components/CaseStudyNav';

/**
 * The shared chrome for a case study — page shell, sticky section nav, and
 * the measured content column — and nothing else.
 *
 * This is deliberately separate from `CaseStudy`. `CaseStudy` is the uniform
 * five-section template (problem / how it's built / decisions / results),
 * which suits a product with a frontend and a backend to talk about. Projects
 * that aren't shaped like that compose their own sections on top of this
 * layout instead of being bent into the template — pass the matching
 * `sections` so the nav lists what the page actually contains.
 */
export const CaseStudyLayout = ({
  sections,
  children,
}: {
  sections?: CaseStudySection[];
  children: ReactNode;
}) => {
  return (
    <PageShell>
      <main className='mx-auto w-full max-w-6xl px-6 pt-32 pb-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16'>
          <div className='lg:sticky lg:top-32 lg:h-fit'>
            <CaseStudyNav sections={sections} />
          </div>

          <div className='max-w-3xl'>{children}</div>
        </div>
      </main>
    </PageShell>
  );
};
