import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import MBAHero from "@/components/mba/MBAHero";
import ProgramOverview from "@/components/mba/ProgramOverview";
import ProgramStats from "@/components/mba/ProgramStats";
import WhyChooseMBA from "@/components/mba/WhyChooseMBA";
import Objectives from "@/components/mba/Objectives";
import CareerProspects from "@/components/mba/CareerProspects";

export default function MBAPage() {
  return (
    <main>
      <Navbar />
      <MBAHero />
      <ProgramOverview />
      <ProgramStats />
      <WhyChooseMBA />
      <Objectives />
      <CareerProspects />
      <FooterCTA />
      <Footer />
    </main>
  );
}
