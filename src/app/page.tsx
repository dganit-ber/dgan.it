import CaseStudyCarousel from '../components/CaseStudyCarousel';
import CompanyMarquee from '../components/CompanyMarquee';
import CvPreview from '../components/CvPreview';
import { Hero } from '../components/Hero';
import PageShell from '../components/PageShell';

export default function Home() {
  return (
    <PageShell>
      <main>
        <Hero />
        <CompanyMarquee />
        <CaseStudyCarousel />
        <CvPreview />
      </main>
    </PageShell>
  );
}
