import type { Metadata } from 'next';
import { Archivo, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dganit Eger — Frontend Developer',
  description:
    'Dganit Eger — Frontend Developer. Building fast, accessible, and beautiful web experiences.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Dganit Eger — Frontend Developer',
    description: 'Building fast, accessible, and beautiful web experiences.',
    type: 'website',
  },
};

// Runs before paint so the correct theme is applied without a flash.
// Dark is the default (no attribute needed), so this only ever has to
// add `data-theme="light"` — nothing to do for the common case.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    if (theme === 'light') document.documentElement.dataset.theme = 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
