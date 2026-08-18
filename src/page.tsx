import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { StatBand } from './components/StatBand';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatBand />
      </main>
    </>
  );
}
