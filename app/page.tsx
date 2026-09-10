import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CROMindset from "@/components/CROMindset";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CROMindset />
      <Work />
      <Process />
      <Services />
      <About />
      <Footer />
    </main>
  );
}