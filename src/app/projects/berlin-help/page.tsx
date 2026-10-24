import type { Metadata } from 'next';
import { site } from '../../site.config';
import { ComposedCaseStudy } from '@/src/components/case-study/ComposedCaseStudy';
import { hero, sections } from './content';

export const metadata: Metadata = {
  title: `Berlin Help — ${site.firstName} ${site.lastName}`,
  description:
    'Case study: a Bezirk-by-Bezirk directory of free crisis, mental health, housing and social support in Berlin.',
};

export default function BerlinHelpCaseStudy() {
  return <ComposedCaseStudy hero={hero} sections={sections} />;
}
