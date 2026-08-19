export const site = {
  // TODO: swap in your surname — the hero is designed to wrap onto two lines
  firstName: 'Dganit',
  lastName: 'Eger',
  role: 'Frontend engineer.',
  roleTail: 'I build beautiful websites.',
  url: 'dgan.it',
  email: 'hello@dgan.it',

  tags: ['React', 'TypeScript', 'Next.js', 'Testing', 'Accessibility'],

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'CV', href: '/cv' },
    { label: 'Writing', href: '/#writing' },
    { label: 'Contact', href: '/#contact' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github', color: '#181717' },
    { label: 'ff-library', href: 'https://ff-library.com', icon: 'book', color: '#d97706' },
    { label: 'Chrome Web Store', href: '#', icon: 'chrome', color: '#4285f4' },
    { label: 'Firefox Add-ons', href: '#', icon: 'firefox', color: '#ff7139' },
    { label: 'Email', href: 'mailto:you@example.com', icon: 'mail', color: '#10b981' },
  ],

  linkedin: 'https://linkedin.com/in/',

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
    email: 'dganite@gmail.com',
    linkedin: 'linkedin.com/in/dganite',

    summary:
      'Frontend engineer with 3.5 years of production React and TypeScript experience across complex, component-driven SPAs. Recently shipped a full-stack Next.js/TypeScript app end-to-end: auth, REST API, database, and automated deployment, owning it from first commit to production. Backed by 5 years of QA and test automation (ISTQB-certified), bringing a strong testing and quality mindset to frontend delivery.',

    skills: [
      { category: 'Languages & Frameworks', items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)'] },
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
        items: ['ISTQB-certified test design', 'Test automation & manual testing (5 yrs QA)', 'Quality-first mindset'],
      },
      { category: 'Backend & Data', items: ['REST APIs', 'PostgreSQL (via Supabase)', 'Authentication', 'Database schema design'] },
      { category: 'Tools & Practices', items: ['Git/GitHub', 'Vercel', 'CI/CD', 'Code reviews', 'Agile/Scrum'] },
      { category: 'Languages', items: ['Hebrew (native)', 'English (near-native)', 'German (working knowledge)'] },
      { category: 'Previously used', items: ['Redux', 'GraphQL', 'Vue.js', 'Node.js/Express'] },
    ],

    experience: [
      {
        role: 'Full-Stack Developer',
        company: 'The Fan Fiction Library (Independent Project)',
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
        description: '12-week intensive course: HTML5, CSS, JavaScript, and Single-Page Applications.',
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
