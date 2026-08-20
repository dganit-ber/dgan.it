import type { Metadata } from 'next';
import Projects from '../../components/Projects';
import PageShell from '../../components/PageShell';
import { site } from '../site.config';

export const metadata: Metadata = {
  title: `Projects — ${site.firstName} ${site.lastName}`,
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <main>
        <Projects />
      </main>
    </PageShell>
  );
}
