import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import BHMHero from "@/components/bhm/BHMHero";
import ProgramOverview from "@/components/bhm/ProgramOverview";
import ProgramStats from "@/components/bhm/ProgramStats";
import WhyJoinBHM from "@/components/bhm/WhyJoinBHM";
import Objectives from "@/components/bhm/Objectives";
import CareerProspects from "@/components/bhm/CareerProspects";

export default function BHMPage() {
  return (
    <main>
      <Navbar />
      <BHMHero />
      <ProgramOverview />
      <ProgramStats />
      <WhyJoinBHM />
      <Objectives />
      <CareerProspects />
      <FooterCTA />
      <Footer />
    </main>
  );
}
