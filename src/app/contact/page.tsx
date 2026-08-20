import type { Metadata } from 'next';
import Contact from '../../components/Contact';
import PageShell from '../../components/PageShell';
import { site } from '../site.config';

export const metadata: Metadata = {
  title: `Contact — ${site.firstName} ${site.lastName}`,
};

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <Contact />
      </main>
    </PageShell>
  );
}
