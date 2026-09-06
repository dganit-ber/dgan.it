import type { Metadata } from 'next';
import PageShell from '../../components/PageShell';
import { site } from '../site.config';

const CONTACT_EMAIL = site.email;

export const metadata: Metadata = {
  title: `Impressum — ${site.firstName} ${site.lastName}`,
  description: 'Angaben gemäß § 5 DDG.',
  robots: { index: false, follow: true },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='mt-8 space-y-2'>
      <h2 className='font-display text-lg font-bold text-text'>{title}</h2>
      {children}
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <PageShell>
      <main className='mx-auto w-full max-w-2xl px-6 pt-32 pb-24'>
        <h1 className='font-display text-3xl font-extrabold tracking-[-0.02em] text-text'>
          Impressum
        </h1>
        <p className='mt-2 text-sm text-mute'>Angaben gemäß § 5 DDG</p>

        <Section title='Diensteanbieter'>
          <p className='text-mute'>
            {site.firstName} {site.lastName}
            <br />
            c/o xHain hack+makespace
            <br />
            Grünberger Straße 16
            <br />
            10243 Berlin
            <br />
            Deutschland
          </p>
        </Section>

        <Section title='Kontakt'>
          <p className='text-mute'>
            E-Mail:{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className='text-accent transition-colors hover:underline'
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Section>

        <Section title='Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV'>
          <p className='text-mute'>
            {site.firstName} {site.lastName}, Anschrift wie oben
          </p>
        </Section>

        <Section title='Haftung für Inhalte'>
          <p className='text-mute'>
            Als Diensteanbieterin bin ich für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
        </Section>

        <Section title='Haftung für Links'>
          <p className='text-mute'>
            Dieses Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entferne ich
            derartige Links umgehend.
          </p>
        </Section>

        <Section title='Urheberrecht'>
          <p className='text-mute'>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung der Autorin.
          </p>
        </Section>
      </main>
    </PageShell>
  );
}
