import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import MBAHero from "@/components/mba/MBAHero";
import ProgramOverview from "@/components/mba/ProgramOverview";
import ProgramStats from "@/components/mba/ProgramStats";
import WhyChooseMBA from "@/components/mba/WhyChooseMBA";
import Objectives from "@/components/mba/Objectives";
import CareerProspects from "@/components/mba/CareerProspects";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CourseJsonLd from "@/components/seo/CourseJsonLd";

export const metadata = {
  title: "MBA Program | Master of Business Administration",
  description:
    "Advance your career with the MBA (Master of Business Administration) at Alpine Management College, Nepalgunj — a two-year postgraduate program affiliated with Pokhara University for professionals and graduates.",
  alternates: {
    canonical: "https://www.alpinemanagementcollege.edu.np/mba",
  },
  openGraph: {
    title: "MBA Program | Alpine Management College",
    description:
      "Two-year MBA program at AMC Nepalgunj. Develop advanced management skills with Pokhara University affiliation.",
    url: "https://www.alpinemanagementcollege.edu.np/mba",
  },
};

export default function MBAPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.alpinemanagementcollege.edu.np" },
          { name: "MBA Program", url: "https://www.alpinemanagementcollege.edu.np/mba" },
        ]}
      />
      <CourseJsonLd
        name="Master of Business Administration (MBA)"
        description="A two-year postgraduate program designed for working professionals and graduates seeking advanced management expertise at Alpine Management College, Nepalgunj, affiliated with Pokhara University."
        url="https://www.alpinemanagementcollege.edu.np/mba"
        duration="P2Y"
        educationalLevel="Master"
      />
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

