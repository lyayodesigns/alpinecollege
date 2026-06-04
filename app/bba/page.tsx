import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import BBAHero from "@/components/bba/BBAHero";
import ProgramOverview from "@/components/bba/ProgramOverview";
import ProgramStats from "@/components/bba/ProgramStats";
import WhyJoinBBA from "@/components/bba/WhyJoinBBA";
import Objectives from "@/components/bba/Objectives";
import CareerProspects from "@/components/bba/CareerProspects";

export default function BBAPage() {
  return (
    <main>
      <Navbar />
      <BBAHero />
      <ProgramOverview />
      <ProgramStats />
      <WhyJoinBBA />
      <Objectives />
      <CareerProspects />
      <FooterCTA />
      <Footer />
    </main>
  );
}
