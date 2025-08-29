import ClientHeader from '@/components/ClientHeader';
import ClientHero from '@/components/ClientHero';
import ClientProjects from '@/components/ClientProjects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <ClientHeader />
      <main className="pt-16">
        <ClientHero />
        <About />
        <ClientProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
