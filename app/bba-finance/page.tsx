import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import BBAFinanceHero from "@/components/bba-finance/BBAFinanceHero";
import ProgramOverview from "@/components/bba-finance/ProgramOverview";
import ProgramStats from "@/components/bba-finance/ProgramStats";
import WhyChooseBBAFinance from "@/components/bba-finance/WhyChooseBBAFinance";
import Objectives from "@/components/bba-finance/Objectives";
import CareerProspects from "@/components/bba-finance/CareerProspects";

export default function BBAFinancePage() {
  return (
    <main>
      <Navbar />
      <BBAFinanceHero />
      <ProgramOverview />
      <ProgramStats />
      <WhyChooseBBAFinance />
      <Objectives />
      <CareerProspects />
      <FooterCTA />
      <Footer />
    </main>
  );
}
