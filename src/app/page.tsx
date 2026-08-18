import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Hero } from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='relative min-h-screen bg-[#0a0a0a] text-[#e5e5e5]'>
      {/* Ambient background blobs */}
      <div className='pointer-events-none fixed inset-0 overflow-hidden'>
        <div className='absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]' />
        <div className='absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]' />
        <div className='absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-emerald-500/4 blur-[120px]' />
      </div>

      <div className='grid-bg pointer-events-none fixed inset-0 opacity-100' />

      <div className='relative z-10'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
