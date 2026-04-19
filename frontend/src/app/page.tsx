import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Work from '@/components/Work';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Preloader />
      <Navigation />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
