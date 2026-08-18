import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatBand } from "@/components/StatBand";

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
