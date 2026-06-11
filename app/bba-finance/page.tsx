import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import BBAFinanceHero from "@/components/bba-finance/BBAFinanceHero";
import ProgramOverview from "@/components/bba-finance/ProgramOverview";
import ProgramStats from "@/components/bba-finance/ProgramStats";
import WhyChooseBBAFinance from "@/components/bba-finance/WhyChooseBBAFinance";
import Objectives from "@/components/bba-finance/Objectives";
import CareerProspects from "@/components/bba-finance/CareerProspects";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CourseJsonLd from "@/components/seo/CourseJsonLd";

export const metadata = {
  title: "BBA Finance Program | Bachelor of Business Administration – Finance",
  description:
    "Pursue the BBA (Finance) at Alpine Management College, Nepalgunj — a four-year specialised undergraduate program in financial management, banking, investment, and corporate finance, affiliated with Pokhara University.",
  alternates: {
    canonical: "https://www.alpinemanagementcollege.edu.np/bba-finance",
  },
  openGraph: {
    title: "BBA Finance Program | Alpine Management College",
    description:
      "Specialised four-year BBA Finance program at AMC Nepalgunj. Master financial management, banking, and investment.",
    url: "https://www.alpinemanagementcollege.edu.np/bba-finance",
  },
};

export default function BBAFinancePage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.alpinemanagementcollege.edu.np" },
          { name: "BBA Finance Program", url: "https://www.alpinemanagementcollege.edu.np/bba-finance" },
        ]}
      />
      <CourseJsonLd
        name="Bachelor of Business Administration – Finance (BBA Finance)"
        description="A four-year specialised undergraduate program focused on financial management, banking, investment, and corporate finance at Alpine Management College, Nepalgunj, affiliated with Pokhara University."
        url="https://www.alpinemanagementcollege.edu.np/bba-finance"
        duration="P4Y"
        educationalLevel="Bachelor"
      />
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

