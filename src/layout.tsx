import type { Metadata } from 'next';
import { Archivo, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { site } from './app/site.config';

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

const fullName = `${site.firstName} ${site.lastName}`;
const description = `${site.role} ${site.roleTail}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${fullName} — Frontend Engineer`,
    template: `%s — ${fullName}`,
  },
  description,
  openGraph: {
    title: `${fullName} — Frontend Engineer`,
    description,
    url: site.url,
    siteName: fullName,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: fullName, description },
};

// Runs before paint so the correct theme is applied without a flash.
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      data-theme='light'
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
