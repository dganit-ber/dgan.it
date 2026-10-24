import { CaseStudyLayout } from './CaseStudyLayout';
import { Hero } from './Hero';
import { Section } from './Section';
import { SectionBody } from './SectionBody';
import type { ComposedCaseStudyProps } from './composed.types';
import type { CaseStudySection } from '../CaseStudyNav';

/**
 * Renders a case study from its own section list.
 *
 * Use this when a project's interesting parts don't fit the uniform
 * problem/build/decisions/results shape of `CaseStudy` — which is most
 * projects, once you stop forcing them.
 *
 * The sticky nav is derived from the sections rather than declared alongside
 * them, so the two can't drift. Section numbering is positional for the same
 * reason: insert a section in the middle and the indices follow.
 */
export const ComposedCaseStudy = ({
  hero,
  sections,
}: ComposedCaseStudyProps) => {
  const index = (i: number) => String(i + 2).padStart(2, '0');

  const navSections: CaseStudySection[] = [
    { id: 'overview', index: '01', label: 'Overview' },
    ...sections.map((section, i) => ({
      id: section.id,
      index: index(i),
      label: section.navLabel ?? section.title,
    })),
  ];

  return (
    <CaseStudyLayout sections={navSections}>
      <Hero {...hero} />

      {sections.map((section, i) => (
        <Section
          key={section.id}
          id={section.id}
          eyebrowIndex={index(i)}
          eyebrow={section.eyebrow}
          title={section.title}
          content={section.intro}
          contentClassName={
            section.introClassName ?? 'mb-8 max-w-[58ch] text-mute'
          }
        >
          {section.bodies.map((body, bodyIndex) => (
            <SectionBody key={bodyIndex} body={body} />
          ))}
        </Section>
      ))}
    </CaseStudyLayout>
  );
};
