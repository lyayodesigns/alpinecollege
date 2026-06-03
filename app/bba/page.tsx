import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import BBAHero from "./components/BBAHero";
import ProgramOverview from "./components/ProgramOverview";
import ProgramStats from "./components/ProgramStats";
import WhyJoinBBA from "./components/WhyJoinBBA";
import Objectives from "./components/Objectives";
import CareerProspects from "./components/CareerProspects";

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
