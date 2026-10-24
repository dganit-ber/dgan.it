import type { ReactNode } from 'react';
import type {
  CaseStudyDecision,
  CaseStudyNextItem,
  DecisionLabels,
  HeroProps,
} from './caseStudy.types';

/**
 * Types for a *composed* case study — one that defines its own sections
 * instead of using the uniform problem/build/decisions/results template.
 *
 * The point is that a project's page becomes content, not markup: the copy
 * lives in a `content.tsx` beside the route, and `ComposedCaseStudy` renders
 * it. A case study is writing, and writing shouldn't be interleaved with
 * layout — nobody edits a paragraph happily when it's wrapped in four divs.
 */

export type SectionBody =
  /** Paragraphs of lede-level prose. */
  | { kind: 'prose'; paragraphs: ReactNode[] }
  /** An accent-dotted list. */
  | { kind: 'bullets'; items: ReactNode[] }
  /** Titled blocks with a left rule, optionally preceded by stack chips. */
  | {
      kind: 'blocks';
      chips?: string[];
      blocks: { title: string; body: ReactNode }[];
    }
  /** Tension/choice/result entries. */
  | {
      kind: 'decisions';
      labels?: DecisionLabels;
      entries: CaseStudyDecision[];
    }
  /** The "Next" grid. */
  | { kind: 'next'; items: CaseStudyNextItem[] };

export interface ComposedSection {
  /** Anchor id; also the nav target. */
  id: string;
  /** Short label for the sticky nav. Falls back to `title`. */
  navLabel?: string;
  eyebrow: ReactNode;
  title: string;
  /** Optional intro paragraph under the title. */
  intro?: ReactNode;
  /** Overrides the intro's default width. */
  introClassName?: string;
  bodies: SectionBody[];
}

export interface ComposedCaseStudyProps {
  hero: HeroProps;
  sections: ComposedSection[];
}
