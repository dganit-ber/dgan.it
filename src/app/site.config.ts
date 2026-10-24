export const site = {
  // TODO: swap in your surname — the hero is designed to wrap onto two lines
  firstName: 'Dganit',
  lastName: 'Eger',
  role: 'Fullstack engineer.',
  roleTail: 'I build, ship and run my own products.',

  // Above-the-fold headline. Two lines so the hero reveal animation has
  // something to stagger.
  headline: ["Don't read my CV.", 'Use something I built.'],
  lede: 'Three products I designed, built and still run — frontend, API, database and the admin panel behind them.',

  // Points at the featured product, so it follows `products[0]` if that
  // changes.
  primaryCta: { label: 'Open Womentor', href: '/projects/womentor' },

  // The AI point, stated as two halves so neither reads as a boast.
  craft: {
    fast: 'AI gets me to a working version fast',
    careful: "A pre-AI career gets it to something I'd sign",
  },
  url: 'dgan.it',
  email: 'hello@dgan.it',

  tags: [
    'React',
    'TypeScript',
    'Next.js',
    'Testing',
    'Accessibility',
    'ClaudCode',
  ],

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'CV', href: '/cv' },
    { label: 'Writing', href: '/#writing' },
    { label: 'Contact', href: '/#contact' },
  ],

  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/dganit-ber',
      icon: 'github',
      color: '#181717',
    },

    {
      label: 'WhatsApp',
      href: 'https://wa.me/4917632631449',
      icon: 'whatsapp',
      color: '#25D366',
    },
    {
      label: 'Email',
      href: 'mailto:dganite@gmail.com',
      icon: 'mail',
      color: '#BA3B3C',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/dganite',
      icon: 'linkedin',
      color: '#0A66C2',
    },
  ],

  linkedin: 'https://linkedin.com/in/dganite',

  hobbies: [
    { id: 'bookbinding', label: 'Bookbinding' },
    { id: 'stained-glass', label: 'Stained Glass' },
    { id: 'water-marbling', label: 'Water Marbling' },
  ],

  companies: [
    { name: 'The Fan Fiction Library', mark: 'FL', domain: 'ff-library.com' },
    { name: 'Interhyp', mark: 'IH', domain: 'interhyp.de' },
    { name: 'McMakler', mark: 'MM', domain: 'mcmakler.de' },
    { name: 'Hochfrequenz', mark: 'HF', domain: 'hochfrequenz.de' },
    { name: 'Lieferando', mark: 'LF', domain: 'lieferando.de' },
    { name: 'Auto1', mark: 'A1', domain: 'auto1-group.com' },
    // No confirmed domain — search results kept confusing it with the
    // unrelated "Digistore24". Falls back to the monogram badge.
    { name: 'DigiDesk24', mark: 'DD', domain: null },
  ],

  // Case studies — both the /projects page and the home-page carousel
  // render from this list.
  caseStudies: [
    {
      title: 'Womentor',
      blurb:
        'A private mentoring platform matching women by the specific challenge they’re navigating, not job title. Out of demo mode, running on real data, with an admin panel behind it.',
      href: '/projects/womentor',
      status: 'live' as 'live' | 'coming-soon',
    },
    {
      title: 'The Fan Fiction Library',
      blurb:
        'A reading list and browser extension for Archive of Our Own — built, shipped, and run solo. 700+ registered users, 115k+ entries indexed.',
      href: '/projects/ff-library',
      status: 'live' as 'live' | 'coming-soon',
    },
    {
      title: 'Get Curly',
      blurb:
        'Photograph a shampoo label, get Clear or Skip. OCR, an ingredient matcher that lives in Postgres, and no account — a 2020 bootcamp project rebuilt six years later.',
      href: '/projects/getcurly',
      status: 'live' as 'live' | 'coming-soon',
    },
  ],

  // Careful framing: "indexed", not "saved by users" — entries include
  // scraper-seeded rows, so this reads as infrastructure, not engagement.
  proofEyebrow: 'Built it, shipped it, still running it',
  stats: [
    { value: 700, suffix: '+', label: 'Registered users' },
    { value: 115, suffix: 'k+', label: 'Entries indexed' },
    { value: 2, suffix: '', label: 'Extension stores' },
  ],

  cv: {
    title: 'Frontend Engineer / Full-Stack Developer',
    phone: '+49 176 32631449',
    location: 'Berlin, DE',
    // Spelled out for the hero; `location` stays short for the CV header.
    locationLong: 'Berlin, Germany',
    email: 'dganite@gmail.com',
    linkedin: 'linkedin.com/in/dganite',

    summary: `I'm a frontend developer in Berlin working mostly in React, TypeScript, and Next.js. Before I wrote features, I spent five years breaking them: I came up through QA and test automation, and that background still shapes how I build. I think about edge cases early, I write code that's easier to debug at 2am, and I've never once been surprised that the thing shipped on Friday broke over the weekend.

    Outside of client work I build and maintain ff-library.com, a fan fiction library with a companion browser extension for Chrome and Firefox. It has grown to over 700 registered users and 115,000 logged entries, which means I own the whole thing end to end: the Next.js frontend, the Postgres schema, the OAuth flow, the extension that has to keep working across three browsers, and the support emails when something goes sideways. It taught me more about tradeoffs than any tutorial could.

    I care about interfaces that feel obvious, code other people can read six months later, and shipping things that actually get used.`,

    skills: [
      {
        category: 'Languages & Frameworks',
        items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)'],
      },
      {
        category: 'Frontend',
        items: [
          'Responsive Web Design',
          'Accessibility (keyboard nav)',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'SPAs',
          'Component libraries',
        ],
      },
      {
        category: 'Testing',
        items: [
          'ISTQB-certified test design',
          'Test automation & manual testing (5 yrs QA)',
          'Quality-first mindset',
        ],
      },
      {
        category: 'Backend & Data',
        items: [
          'REST APIs',
          'PostgreSQL (via Supabase)',
          'Authentication',
          'Database schema design',
        ],
      },
      {
        category: 'Tools & Practices',
        items: ['Git/GitHub', 'Vercel', 'CI/CD', 'Code reviews', 'Agile/Scrum'],
      },
      {
        category: 'Languages',
        items: [
          'Hebrew (native)',
          'English (near-native)',
          'German (working knowledge)',
        ],
      },
      {
        category: 'Previously used',
        items: ['Redux', 'GraphQL', 'Vue.js', 'Node.js/Express'],
      },
    ],

    experience: [
      {
        role: 'Full-Stack Developer',
        company: 'The Fan Fiction Library',
        companyUrl: 'https://ff-library.com',
        companyNote: 'Independent Project',
        period: '03/2024 – Present',
        location: 'Berlin, DE',
        bullets: [
          'Designed, built, and shipped a full-stack Next.js/TypeScript application end-to-end, serving 600+ active users; owning every stage from architecture to production monitoring.',
          'Implemented authentication and session handling, PostgreSQL schema design, and REST API routes, defining the API contracts between frontend and backend.',
          'Built a responsive, keyboard-accessible component library in React and Tailwind CSS, auto-deployed to production via a Git-based CI/CD workflow on Vercel.',
          "Developed and published two browser extensions that read data from the live page in the user's session and save it to the app via its REST API: bypassing the bot-detection that blocks server-side requests.",
        ],
      },
      {
        role: 'Frontend Developer',
        company: 'Interhyp',
        companyUrl: null,
        companyNote: null,
        period: '09/2023 – 02/2024',
        location: 'Berlin, DE (Remote)',
        bullets: [
          'Built and maintained features for a complex internal mortgage-consulting tool in React, presenting dense financial data and multi-step calculations as clear, usable interfaces for consultants.',
          'Worked in a cross-functional team, contributing to shared component libraries used across internal applications.',
        ],
      },
      {
        role: 'Frontend Developer',
        company: 'McMakler',
        companyUrl: null,
        companyNote: null,
        period: '12/2021 – 08/2023',
        location: 'Berlin, DE (Remote)',
        bullets: [
          'Developed data-driven end-user features and reusable components in React and TypeScript for a real-estate platform, surfacing property and listing data in responsive, usable interfaces.',
          'Maintained and refactored complex new and legacy codebases.',
        ],
      },
      {
        role: 'Frontend Developer',
        company: 'Hochfrequenz',
        companyUrl: null,
        companyNote: null,
        period: '06/2020 – 12/2021',
        location: 'Berlin, DE (Remote)',
        bullets: [
          'Built single-page applications, including a new app from scratch using Vue.js and Vuetify.',
          'Debugged, maintained, and created reusable UI components.',
        ],
      },
      {
        role: 'QA / Test Engineer',
        company: 'Various (DigiDesk24, yourDelivery/Lieferando, Auto1)',
        companyUrl: null,
        companyNote: null,
        period: '09/2016 – 09/2019',
        location: 'Berlin, DE / Remote',
        bullets: [
          'Test Manager and Mobile Test Engineer roles: wrote automated test scripts, ran extensive manual testing across web and mobile, and built a strong foundation in writing testable, production-ready software.',
        ],
      },
    ],

    education: [
      {
        title: 'Full-Stack Web Development: Spiced Academy',
        period: '11/2019 – 02/2020',
        description:
          '12-week intensive course: HTML5, CSS, JavaScript, and Single-Page Applications.',
      },
      {
        title: 'ISTQB Foundation Level',
        period: '2014',
        description: 'Fundamental concepts of software testing.',
      },
    ],
  },
} as const;

export type Social = (typeof site.socials)[number];

/* ---------------------------------------------------------------------------
   Landing-page products
   ---------------------------------------------------------------------------
   The three products shown above the fold. Deliberately NOT the same shape as
   `caseStudies` above: that list is a uniform teaser used by the carousel and
   the /projects index, where sameness is the point. Here each card argues for
   its own product, so each one carries a different `panel`.

   Order matters — it is the render order, and the first entry is featured.
--------------------------------------------------------------------------- */

export type StatusTone = 'live' | 'launching' | 'next';

export type ProductPanel =
  /** Womentor: the admin surface, as proof it is past demo stage. */
  | {
      kind: 'admin';
      label: string;
      note: string;
      /** `fill` is a 0–1 bar width; it is decorative, not a real metric. */
      tiles: { label: string; fill: number; accent?: boolean }[];
    }
  /** ff-library: what four years of maintenance actually looked like. */
  | {
      kind: 'changelog';
      label: string;
      entries: { sign: 'removed' | 'added'; text: string }[];
    }
  /** Berlin Help: coverage across the Bezirke, plus a sample of topics. */
  | {
      kind: 'coverage';
      cells: number;
      activeCell: number;
      chips: string[];
      moreLabel: string;
    };

export interface Product {
  key: string;
  title: string;
  href: string;
  /** Renders wider and accent-ringed. Use on one product only. */
  featured?: boolean;
  status: { label: string; tone: StatusTone };
  lede: string;
  panel: ProductPanel;
  /** The "why this was hard" line. One per product, never interchangeable. */
  craftNote: string;
  stack: string;
}

export const products: Product[] = [
  {
    key: 'womentor',
    title: 'Womentor',
    href: '/projects/womentor',
    featured: true,
    status: { label: 'Soft launch', tone: 'launching' },
    lede: "Private mentoring that matches women by the challenge they're navigating, not by job title.",
    panel: {
      kind: 'admin',
      label: 'Admin panel',
      note: 'Mine to run',
      tiles: [
        { label: 'Reports', fill: 0.54 },
        { label: 'Requests', fill: 0.76, accent: true },
        { label: 'Members', fill: 0.4 },
      ],
    },
    craftNote:
      'Out of demo mode and onto real data: matching, moderation paths, error states and an admin panel so reports and contact requests get handled — the parts a prototype skips.',
    stack: 'Next.js · TypeScript · Postgres',
  },
  {
    key: 'ff-library',
    title: 'ff-library',
    href: '/projects/ff-library',
    status: { label: 'Live · 4 yrs', tone: 'live' },
    lede: 'A reading list and browser extension for Archive of Our Own, run solo. 700+ registered users, 115k+ entries indexed.',
    panel: {
      kind: 'changelog',
      label: 'Four years of upkeep',
      entries: [
        {
          sign: 'removed',
          text: 'N+1 queries traced out; stale state in server actions fixed',
        },
        {
          sign: 'removed',
          text: 'Duplicated logic pulled into hooks the app reuses',
        },
        {
          sign: 'added',
          text: 'TypeScript strict on, server/client boundaries drawn right',
        },
      ],
    },
    craftNote:
      'Anyone can ship a v1. This is the one that taught me what it costs to keep it alive while people are using it.',
    stack: 'Next.js · Supabase',
  },
  {
    key: 'berlin-help',
    title: 'Berlin Help',
    href: '/projects/berlin-help',
    status: { label: 'Android next', tone: 'next' },
    lede: 'Free crisis, mental health, housing and social support in Berlin. Pick your Bezirk, pick what you need, get the places that actually serve you.',
    panel: {
      kind: 'coverage',
      cells: 12,
      activeCell: 2,
      chips: ['Crisis', 'Housing', 'Money & debt'],
      moreLabel: '+12 more',
    },
    craftNote:
      '258 services, 15 topics, 12 Bezirke — every entry carrying the date it was last checked, and saying so when its source list is old. The code was the easy part; keeping a directory honest is the work.',
    stack: 'Next.js · TypeScript',
  },
];
