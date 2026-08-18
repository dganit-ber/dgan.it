import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GithubIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 .5A11.5 11.5 0 00.5 12a11.5 11.5 0 007.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z" />
    </svg>
  );
}

export function LinkedinIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
    </svg>
  );
}

export function MailIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function BookIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M4 4.5h6a2.5 2.5 0 012.5 2.5v12A2 2 0 0010.5 17H4z" />
      <path d="M20 4.5h-6A2.5 2.5 0 0011.5 7v12A2 2 0 0113.5 17H20z" />
    </svg>
  );
}

export function ChromeIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M12 8.4H21M8.9 10.2L4.4 2.9M8.9 13.8L4.4 21.1" />
    </svg>
  );
}

export function FirefoxIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M6.5 8.5c1.8-2.4 5.2-2.8 7.4-1.1M17 14.5c-1.4 2.6-4.8 3.6-7.4 2" />
    </svg>
  );
}

export function MoonIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  );
}

export function SunIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...p}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
    </svg>
  );
}

export const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  book: BookIcon,
  chrome: ChromeIcon,
  firefox: FirefoxIcon,
} as const;

export type IconName = keyof typeof iconMap;
