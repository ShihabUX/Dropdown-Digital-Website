import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { TechStack } from "@/app/components/sections/TechStack";
import { WhyUs } from "@/app/components/sections/WhyUs";
import { Process } from "@/app/components/sections/Process";
import { Services } from "@/app/components/sections/Services";
import { Stats } from "@/app/components/sections/Stats";
import { Portfolio } from "@/app/components/sections/Portfolio";
import { Testimonials } from "@/app/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-[#FF1E1E] selection:text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <WhyUs />
      <Process />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  );
}
