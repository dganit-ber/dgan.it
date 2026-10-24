import Link from 'next/link';
import type { HeroProps } from '@/src/components/case-study/caseStudy.types';
import type { ComposedSection } from '@/src/components/case-study/composed.types';
import { WomentorMark } from './WomentorMark';

/**
 * Womentor — case study copy.
 *
 * Content only. The rendering lives in `ComposedCaseStudy`, the section
 * ordering here decides both the page and its sticky nav, and the numbering
 * is positional — insert a section and the rest renumber themselves.
 *
 * Womentor's interesting parts aren't "frontend" and "backend", so it doesn't
 * use the uniform template: the match, privacy below the UI, and the
 * operational surface a live product needs are the three things worth a
 * section each.
 */

const SITE = 'https://womentor.net';

export const hero: HeroProps = {
  breadcrumb: 'Womentor',
  mark: (
    <WomentorMark className='mb-3 font-display text-xl font-semibold sm:text-2xl' />
  ),
  title: 'Women who have been there, one message away',
  note: (
    <>
      This one started from my own experience: as a woman in tech, the
      technical problems are usually well documented. The harder ones — who to
      ask when you&rsquo;re the only woman in the room, or how to even name
      what&rsquo;s going wrong — usually aren&rsquo;t.
    </>
  ),
  intro: (
    <>
      Womentor is a free, private 1:1 mentoring platform. It aims to be first
      aid, not coaching — a way to get unstuck on one specific thing, fast.
      Instead of matching only by job title or seniority, it matches women by
      what they&rsquo;re actually navigating: asking for a raise, being the
      only woman on the crew, a hostile workplace — or by industry, since
      fields like the trades are male-dominated enough that the field alone is
      reason to match. Either way, two people land in a private room together.
    </>
  ),
  meta: [
    { label: 'Role', value: <>Sole designer &amp; developer</> },
    { label: 'Scope', value: 'Product, frontend, backend, ops' },
    { label: 'Status', value: 'Live · soft launch' },
    { label: 'Platforms', value: 'Web, mobile-responsive' },
  ],
  links: [
    { label: 'Visit Womentor', href: SITE, primary: true, external: true },
    {
      label: 'GitHub',
      href: 'https://github.com/dganit-ber',
      external: true,
    },
  ],
};

export const sections: ComposedSection[] = [
  {
    id: 'the-match',
    navLabel: 'The match',
    eyebrow: 'The match',
    title: 'Job title is the wrong axis',
    bodies: [
      {
        kind: 'prose',
        paragraphs: [
          <>
            Most mentoring programs pair people by seniority or title and stop
            there. That flattens very different lived experiences under one
            label: two senior engineers can have nothing useful to say to each
            other about the thing one of them is actually stuck on.
          </>,
          <>
            Industry is a second real axis — someone in a traditionally
            male-dominated trade needs a mentor who has worked that field, not
            just any senior woman. But neither covers how to respond to being
            talked over in every meeting, or how to keep going when the
            environment itself is the problem. Those cut across both, so they
            needed an axis of their own.
          </>,
        ],
      },
      {
        kind: 'bullets',
        items: [
          <>
            <strong className='font-semibold text-ink'>
              42 named situations.
            </strong>{' '}
            A fixed taxonomy, grouped into Pay &amp; Negotiation, Bias &amp;
            Culture, Trades &amp; Male-Dominated Fields and more — so you pick
            a thing that already has a name instead of writing a bio.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              Industry as a primary signal, not a filter.
            </strong>{' '}
            You can enter from the challenge or from the field, and the
            directory ranks by overlap either way. Country and language stay
            secondary.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              One identity, both roles.
            </strong>{' '}
            The same person can be a mentee on one challenge and a mentor on
            another — which is how it actually works, and a surprising amount
            of schema design to allow.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              Deliberately no scores.
            </strong>{' '}
            Mentor cards show initials, title, years, a short statement and
            expertise tags. No star rating, no follower count, no &ldquo;97%
            response rate&rdquo;.
          </>,
        ],
      },
    ],
  },

  {
    id: 'privacy',
    navLabel: 'Privacy, enforced',
    eyebrow: 'Privacy, enforced',
    title: "A UI that hides things isn't privacy",
    intro: (
      <>
        The questions this product exists to carry — how do I report my
        manager, is this worth leaving over — are the kind that must never
        surface anywhere. That makes privacy an architecture problem, not a
        settings screen.
      </>
    ),
    bodies: [
      {
        kind: 'blocks',
        chips: [
          'Supabase · Postgres',
          'Row Level Security',
          'NextAuth',
          'Server Actions',
          'Resend',
        ],
        blocks: [
          {
            title: 'Row Level Security, not a WHERE clause',
            body: (
              <p>
                A conversation is readable by exactly the two people in it, and
                that&rsquo;s a database policy rather than a filter in
                application code. The distinction matters: a mistake in a
                query, a new endpoint written in a hurry, an admin tool pointed
                at the wrong table — none of them can leak a conversation,
                because the database itself won&rsquo;t return rows the caller
                isn&rsquo;t party to. The UI can&rsquo;t forget to hide what
                the database won&rsquo;t hand over.
              </p>
            ),
          },
          {
            title: 'Append-only by omission',
            body: (
              <p>
                Messages have no update or delete policy at all. With row level
                security on and no policy, the operation is denied — so the
                absence is the rule, not an oversight. History stays intact,
                because someone may later need to show what was actually said.
              </p>
            ),
          },
          {
            title: 'Nothing public to find',
            body: (
              <p>
                No feed, no public profiles, no activity visible to anyone
                outside a match. The usual engagement machinery of a community
                product is absent on purpose — there is nothing to be searched,
                screenshotted or shown to a colleague.
              </p>
            ),
          },
          {
            title: 'Sign-in',
            body: (
              <p>
                [REWRITE BEFORE PUBLISHING — the magic link isn&rsquo;t working
                yet. Describe what sign-in does today, or cut this block until
                it does. A case study that claims a broken feature is the one
                thing worse than not mentioning it.]
              </p>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 'running-it',
    navLabel: 'Running it',
    eyebrow: 'Running it',
    title: 'The parts a prototype gets to skip',
    intro: (
      <>
        A deployed preview and a product people actually use are different
        objects. Most of the work between the two was invisible from the front
        page — and it&rsquo;s the part I&rsquo;d point at first.
      </>
    ),
    bodies: [
      {
        kind: 'blocks',
        blocks: [
          {
            title: 'An admin panel, because reports need somewhere to go',
            body: (
              <p>
                A report button that files into a database nobody reads is
                worse than no report button, because it implies a response. So
                reports and contact requests land in an admin surface with
                state — open, in progress, resolved — rather than in an inbox.
                It is the least glamorous screen in the product and the one
                that decides whether the safety promises are real.
              </p>
            ),
          },
          {
            title: 'Error states for a bad day',
            body: (
              <p>
                Every flow has a failure path written for someone who is
                already having the worst week of her year: a mentor who stops
                responding, a link that expired, a message that didn&rsquo;t
                send. The standard advice is to design the happy path first.
                For this product the unhappy path <em>is</em> the path.
              </p>
            ),
          },
          {
            title: 'Moderation as a product surface',
            body: (
              <p>
                Reporting runs through to something a human can act on, and a
                mentor can be taken out of circulation without the mentee who
                reported her being identifiable from the result. [Add the
                specifics — what you can do from the panel, and how fast.]
              </p>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 'cold-start',
    navLabel: 'The cold start',
    eyebrow: 'The cold start',
    title: 'Ship the directory, then earn the mentors',
    intro: (
      <>
        A two-sided product only works once both sides exist, and nobody signs
        up to a directory of zero mentors. Two decisions got it past that, and
        both were about sequencing rather than code.
      </>
    ),
    bodies: [
      {
        kind: 'decisions',
        labels: { cause: 'Tension', fix: 'Choice' },
        entries: [
          {
            title: 'Build against seeded mentors first',
            cause:
              'Browsing, filtering and ranking all need a populated directory to be built or tested at all — but recruiting real mentors is slow, human work that can’t be parallelised with engineering.',
            fix: 'The directory launched on 40 representative seeded profiles across 26 countries and 12 industries, and every flow was built and tested end-to-end against them.',
            result:
              'When real mentors arrived, they arrived onto a product that already worked — the risky, slow problem didn’t also have to be the first one.',
          },
          {
            title: 'Leave demo mode on until the ops existed',
            cause:
              'Switching a mentoring platform to real data means real conversations between real people, with everything that follows: reports, bad matches, someone who needs help the product can’t give.',
            fix: 'Real data waited on the admin panel, the moderation path and the error states — not the other way round.',
            result:
              'The soft launch began with somewhere for problems to go, rather than discovering the need for it live.',
          },
          {
            title: 'Free, and scoped as first aid',
            cause:
              'Mentoring products usually monetise through tiers or membership, and sell an ongoing coaching relationship.',
            fix: 'Womentor is free end to end and framed as a short, focused exchange — get unstuck on one thing, not sign up for a commitment.',
            result:
              'Removes the two biggest reasons not to ask: cost, and the fear of owing someone something afterwards.',
          },
        ],
      },
    ],
  },

  {
    id: 'where-it-stands',
    navLabel: 'Where it stands',
    eyebrow: 'Where it stands',
    title: 'Soft launch, on real data',
    introClassName: 'mb-8 max-w-[62ch] text-mute',
    intro: (
      <>
        Womentor is live at{' '}
        <a
          href={SITE}
          target='_blank'
          rel='noopener noreferrer'
          className='text-accent transition-colors hover:text-accent-dim'
        >
          womentor.net
        </a>
        , out of demo mode and running on real members, with the admin panel
        handling reports and contact requests behind it. The soft launch is
        underway — deliberately quiet, so the first conversations happen at a
        scale one person can stand behind. Same stack and workflow as{' '}
        <Link
          href='/projects/ff-library'
          className='text-accent transition-colors hover:text-accent-dim'
        >
          ff-library
        </Link>
        , pointed at a much more delicate problem.
      </>
    ),
    bodies: [
      {
        kind: 'next',
        items: [
          {
            label: 'Mentors',
            value:
              'Keep recruiting, approaching targeted communities and networking groups',
          },
          {
            label: 'Conversations',
            value: 'Messaging polish and read states in the private rooms',
          },
          {
            label: 'Requests',
            value:
              'Ask for a mentoring session, with accepting, rejecting and scheduling functionality',
          },
          {
            label: 'Availability',
            value: 'Waitlisting when a mentor is not taking new mentees',
          },
          {
            label: 'Languages',
            value:
              'Multilingual, users can already choose which languages they are comfortable with',
          },
        ],
      },
    ],
  },
];
