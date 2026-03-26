import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AcademicPrograms from "@/components/AcademicPrograms";
import Faculty from "@/components/Faculty";
import CounterStats from "@/components/CounterStats";
import CampusLife from "@/components/CampusLife";
import Research from "@/components/Research";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <AcademicPrograms />
      <Faculty />
      <CounterStats />
      <CampusLife />
      <Research />
      <Testimonials />
      <Events />
      <News />
      <Footer />
    </main>
  );
}
