export const site = {
  // TODO: swap in your surname — the hero is designed to wrap onto two lines
  firstName: 'Dganit',
  lastName: 'Eger',
  role: 'Frontend engineer.',
  roleTail: 'I test what I build, because I used to only test.',
  url: 'https://your-domain.dev',
  email: 'you@example.com',

  tags: ['React', 'TypeScript', 'Next.js', 'Testing', 'Accessibility'],

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'CV', href: '/cv' },
    { label: 'Writing', href: '/#writing' },
    { label: 'Contact', href: '/#contact' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'ff-library', href: 'https://ff-library.com', icon: 'book' },
    { label: 'Chrome Web Store', href: '#', icon: 'chrome' },
    { label: 'Firefox Add-ons', href: '#', icon: 'firefox' },
    { label: 'Email', href: 'mailto:you@example.com', icon: 'mail' },
  ],

  linkedin: 'https://linkedin.com/in/',

  // Careful framing: "indexed", not "saved by users" — entries include
  // scraper-seeded rows, so this reads as infrastructure, not engagement.
  proofEyebrow: 'Built it, shipped it, still running it',
  stats: [
    { value: 700, suffix: '+', label: 'Registered users' },
    { value: 115, suffix: 'k+', label: 'Entries indexed' },
    { value: 2, suffix: '', label: 'Extension stores' },
  ],
} as const;

export type Social = (typeof site.socials)[number];
