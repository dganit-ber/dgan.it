import type { Metadata } from 'next';
import { site } from '../../site.config';
import { ComposedCaseStudy } from '@/src/components/case-study/ComposedCaseStudy';
import { hero, sections } from './content';

export const metadata: Metadata = {
  title: `Womentor — ${site.firstName} ${site.lastName}`,
  description:
    'Case study: a private mentoring platform that matches women by the challenge they are navigating, not their job title — and the trust engineering behind it.',
};

export default function WomentorCaseStudy() {
  return <ComposedCaseStudy hero={hero} sections={sections} />;
}
