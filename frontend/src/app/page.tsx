import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ScrollRestoration from "@/components/ScrollRestoration";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] transition-colors duration-500">
      <ScrollRestoration />
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <FAQ />
      <Contact />
    </main>
  );
}
