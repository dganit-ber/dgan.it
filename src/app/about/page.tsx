import type { Metadata } from 'next';
import About from '../../components/About';
import PageShell from '../../components/PageShell';
import { site } from '../site.config';

export const metadata: Metadata = {
  title: `About — ${site.firstName} ${site.lastName}`,
};

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <About />
      </main>
    </PageShell>
  );
}
