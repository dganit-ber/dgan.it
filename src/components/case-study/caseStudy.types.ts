import type { ReactNode } from 'react';

export interface DecisionLabels {
  cause?: string;
  fix?: string;
  result?: string;
}

export interface CaseStudyLink {
  label: string;
  href: string;
  /** Renders as the filled accent button. Use on the first link only. */
  primary?: boolean;
  /** Opens in a new tab. Leave off for placeholder links. */
  external?: boolean;
}

export interface CaseStudyMetaItem {
  label: string;
  value: ReactNode;
}

export interface CaseStudyDecision {
  title: string;
  cause: ReactNode;
  fix: ReactNode;
  result: ReactNode;
}

export interface CaseStudyNextItem {
  label: string;
  value: string;
}

export interface CaseStudyProblem {
  title: string;
  paragraphs: ReactNode[];
  bullets: ReactNode[];
}

export interface CaseStudyBuild {
  title: string;
  intro: ReactNode;
  frontend: ReactNode;
  backend: ReactNode;
}

export interface CaseStudyDecisions {
  eyebrow?: string;
  title: string;
  intro: ReactNode;
  labels?: DecisionLabels;
  entries: CaseStudyDecision[];
}

export interface CaseStudyResults {
  title: string;
  intro: ReactNode;
  /** Optional media below the intro, e.g. a <Video />. */
  media?: ReactNode;
  next: CaseStudyNextItem[];
}

export interface HeroProps {
  /** Trailing part of the breadcrumb: "01 · Projects / {breadcrumb}". */
  breadcrumb: string;
  /** Optional wordmark shown between the breadcrumb and the headline. */
  mark?: ReactNode;
  title: string;
  /** Aside above the intro, set off by an accent rule. */
  note?: ReactNode;
  intro: ReactNode;
  meta: CaseStudyMetaItem[];
  links: CaseStudyLink[];
  /** Optional media below the links, e.g. a <Figure />. */
  media?: ReactNode;
}

export interface CaseStudyProps extends HeroProps {
  problem: CaseStudyProblem;
  build: CaseStudyBuild;
  decisions: CaseStudyDecisions;
  results: CaseStudyResults;
}

export interface DecisionEntryProps extends CaseStudyDecision {
  labels?: DecisionLabels;
}

export interface SectionProps {
  id: string;
  border?: boolean;
  eyebrowIndex?: string;
  eyebrow?: ReactNode;
  title?: string;
  content?: ReactNode;
  /** Overrides the default width/spacing of the content paragraph. */
  contentClassName?: string;
  /** Renders the children inside the header's reveal, rather than below it. */
  revealChildren?: boolean;
  children?: ReactNode;
}
