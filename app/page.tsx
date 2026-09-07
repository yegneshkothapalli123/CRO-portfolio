import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";

import Work from "@/components/Work";
import Process from "@/components/Process";
import Services from "@/components/Services";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Work />
      <Process />
      <Services />
    </main>
  );
}