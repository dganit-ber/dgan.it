import CompanyMarquee from '../components/CompanyMarquee';
import { Hero } from '../components/Hero';
import PageShell from '../components/PageShell';

export default function Home() {
  return (
    <PageShell>
      <main>
        <Hero />
        <CompanyMarquee />
      </main>
    </PageShell>
  );
}
