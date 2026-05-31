import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AcademicPrograms from "@/components/AcademicPrograms";
import Faculty from "@/components/Faculty";
import CounterStats from "@/components/CounterStats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Research from "@/components/Research";
import Testimonials from "@/components/Testimonials";
import ExtracurricularActivities from "@/components/ExtracurricularActivities";
import Events from "@/components/Events";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CounterStats />
      <About />
      <AcademicPrograms />
      <WhyChooseUs />
      <Faculty />
      <Research />
      <Testimonials />
      <ExtracurricularActivities />
      <Events />
      <News />
      <Footer />
    </main>
  );
}
