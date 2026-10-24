import type { HeroProps } from '@/src/components/case-study/caseStudy.types';
import type { ComposedSection } from '@/src/components/case-study/composed.types';

/**
 * Berlin Help — case study copy.
 *
 * No login, no database, no backend to speak of, so the uniform template
 * would have given this two thin sections and nothing about the part that
 * actually matters: whether the data is true. Hence its own sections.
 */

export const hero: HeroProps = {
  breadcrumb: 'Berlin Help',
  title: 'Free help in Berlin, by Bezirk',
  note: (
    <>
      A directory, not a service. It doesn&rsquo;t counsel anyone, hold
      anyone&rsquo;s data, or stand between a person and the place that can
      help. In acute danger the answer is 112, and the site says so before it
      says anything else.
    </>
  ),
  intro: (
    <>
      Berlin has a great deal of free and low-cost support — crisis lines,
      drop-in centres, debt counselling, housing help, victim support. It is
      spread across twelve Bezirk administrations, dozens of charities, and a
      lot of German-language PDFs. Berlin Help collects 258 of those services
      into one place, organised by the two things someone in trouble actually
      knows: where they are, and what has gone wrong.
    </>
  ),
  meta: [
    { label: 'Role', value: <>Sole designer &amp; developer</> },
    { label: 'Timeline', value: 'In development' },
    { label: 'Coverage', value: '258 services · 15 topics · 12 Bezirke' },
    { label: 'Platforms', value: <>Web today, Android next</> },
  ],
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/dganit-ber',
      external: true,
    },
  ],
};

export const sections: ComposedSection[] = [
  {
    id: 'why-it-exists',
    navLabel: 'Why it exists',
    eyebrow: 'Why it exists',
    title: 'The help is already there. Finding it is the problem.',
    bodies: [
      {
        kind: 'prose',
        paragraphs: [
          <>
            Almost every service in this directory was already public. What it
            wasn&rsquo;t was findable. The Sozialpsychiatrischer Dienst for
            your Bezirk is on your Bezirk&rsquo;s own site, under a heading you
            have to already know the name of. Drop-in centres are listed by the
            charity that runs them. Crisis lines are on a different page again.
          </>,
          <>
            Searching assumes you can name the thing you need in German.
            Someone who has just lost a flat, or is having the worst week of
            her life, or moved here eight months ago, cannot necessarily do
            that. So the site never asks anyone to name it — it asks for a
            Bezirk and offers fifteen plain-language topics.
          </>,
        ],
      },
      {
        kind: 'bullets',
        items: [
          <>
            <strong className='font-semibold text-ink'>
              Two questions, not a search box.
            </strong>{' '}
            Where are you, and what kind of trouble is it. Both are things a
            person knows without vocabulary.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              English first, German kept.
            </strong>{' '}
            The explanations are in English because that&rsquo;s who struggles
            most with the existing pages — but every official name is kept in
            German, because that&rsquo;s what you&rsquo;ll have to say on the
            phone.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              Emergencies come before everything.
            </strong>{' '}
            112 is on the page before any of the browsing is.
          </>,
        ],
      },
    ],
  },

  {
    id: 'how-its-organised',
    navLabel: 'How it’s organised',
    eyebrow: <>How it&rsquo;s organised</>,
    title: 'Bezirk first, topic second, and one deliberate exception',
    intro: (
      <>
        The whole product is one decision about ordering, applied consistently.
        Everything else — the map, the routes, the content file — follows from
        it.
      </>
    ),
    bodies: [
      {
        kind: 'blocks',
        chips: [
          'Next.js · App Router',
          'TypeScript',
          'Tailwind CSS',
          'Static · no database',
          'Vercel',
        ],
        blocks: [
          {
            title: 'A map you can point at',
            body: (
              <p>
                The entry point is the twelve Bezirke as a clickable map rather
                than a dropdown. Picking where you are off a shape is easier
                than recognising &ldquo;Tempelhof-Sch&ouml;neberg&rdquo; in an
                alphabetical list, particularly if you&rsquo;re new to the
                city. Each Bezirk is a real route —{' '}
                <code>/bezirke/neukoelln</code> — so a link to one can be
                shared or bookmarked.
              </p>
            ),
          },
          {
            title: 'Local before citywide',
            body: (
              <p>
                Within a Bezirk and topic, services that actually serve that
                Bezirk are listed first, then the citywide ones. If
                you&rsquo;re in Lichtenberg, the Lichtenberg debt counselling
                comes before the Berlin-wide number, because the local one is
                the one that can see you.
              </p>
            ),
          },
          {
            title: 'Except in a crisis',
            body: (
              <p>
                Emergency and crisis is the one topic where that order is
                reversed: citywide comes first. In an emergency the right
                answer is the number that is staffed 24/7 and never busy — 112,
                110, the poison line — not the nearest office, which may be
                closed. The rule is worth having precisely because it has an
                exception, and the exception is the case that matters most.
              </p>
            ),
          },
          {
            title: 'One content file',
            body: (
              <p>
                All 258 services live in a single JSON file, read at build
                time. There is no CMS and no database: the data changes when a
                human checks it, which is a few times a year, not a few times a
                second. That makes the whole site static, fast on a bad
                connection, and impossible to take down with traffic.
              </p>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 'keeping-it-true',
    navLabel: 'Keeping it true',
    eyebrow: 'Keeping it true',
    title: 'A wrong phone number is worse than no phone number',
    intro: (
      <>
        This is the part of the project that is actually hard, and it
        isn&rsquo;t code. Someone in crisis who calls a number that rings out
        doesn&rsquo;t try the next one on the list — she stops. So the
        directory is built to be honest about its own age.
      </>
    ),
    bodies: [
      {
        kind: 'blocks',
        blocks: [
          {
            title: 'Every entry carries a date',
            body: (
              <p>
                The dataset records when it was last verified as a whole, and
                entries drawn from an older official list say so in their own
                description rather than quietly looking as current as the rest.
                The psychiatric emergency assignments come from a 2023 list;
                some drop-in centre contacts from 2019; a handful of
                Sozialpsychiatrischer Dienst addresses from 2016. All three are
                flagged in the data, not buried in a commit message.
              </p>
            ),
          },
          {
            title: 'Stale beats absent, if it is labelled',
            body: (
              <p>
                The alternative to a 2016 address is no address, and for a
                service that has probably not moved, the old one with a visible
                date is more useful than a blank. The judgement call is making
                the date loud enough that nobody treats it as fresh.
              </p>
            ),
          },
          {
            title: 'No invented coverage',
            body: (
              <p>
                Where a Bezirk genuinely has no service for a topic, the page
                says so and falls through to the citywide options. Nothing is
                padded to make the twelve Bezirke look evenly served, because
                they aren&rsquo;t.
              </p>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 'what-it-wont-do',
    navLabel: 'What it won’t do',
    eyebrow: <>What it won&rsquo;t do</>,
    title: 'The features it is better off not having',
    intro: (
      <>
        For a site about addiction, psychiatric crisis, domestic violence and
        debt, the usual product instincts are mostly wrong. These are
        deliberate absences, not a backlog.
      </>
    ),
    bodies: [
      {
        kind: 'bullets',
        items: [
          <>
            <strong className='font-semibold text-ink'>No accounts.</strong>{' '}
            Nothing to sign up for, so there is no record anywhere that a
            particular person went looking for help with a particular thing.
          </>,
          <>
            <strong className='font-semibold text-ink'>No analytics.</strong>{' '}
            The obvious way to learn which topics matter most is to measure it.
            On this subject, that data is exactly the data not worth having.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              No ratings or reviews.
            </strong>{' '}
            A one-star review of a crisis line helps nobody, and the people
            best placed to review these services are the least able to be
            asked.
          </>,
          <>
            <strong className='font-semibold text-ink'>
              No chat, no triage, no advice.
            </strong>{' '}
            It points at the professionals and gets out of the way.
          </>,
        ],
      },
    ],
  },

  {
    id: 'to-android',
    navLabel: 'To Android',
    eyebrow: 'To Android',
    title: 'Where this is going',
    intro: (
      <>
        A phone is where this gets used — on the street, in a waiting room, on
        the way out of a flat. The web version works there, but an app can do
        the one thing the site can&rsquo;t: still work when the connection
        doesn&rsquo;t. A directory that is a few hundred kilobytes of text has
        no business needing a signal.
      </>
    ),
    bodies: [
      {
        kind: 'next',
        items: [
          {
            label: 'Android',
            value: 'Ship it as an app, with the whole directory bundled offline',
          },
          {
            label: 'Re-verification',
            value: 'A standing pass over the 2016–2019 entries',
          },
          {
            label: 'German',
            value: 'A full German translation alongside the English',
          },
          {
            label: 'Opening hours',
            value: 'Show what is open right now, not just what exists',
          },
        ],
      },
    ],
  },
];
