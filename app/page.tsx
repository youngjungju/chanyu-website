import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Resume from '@/components/sections/Resume';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Footer />
    </main>
  );
}
