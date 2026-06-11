import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import BHMHero from "@/components/bhm/BHMHero";
import ProgramOverview from "@/components/bhm/ProgramOverview";
import ProgramStats from "@/components/bhm/ProgramStats";
import WhyJoinBHM from "@/components/bhm/WhyJoinBHM";
import Objectives from "@/components/bhm/Objectives";
import CareerProspects from "@/components/bhm/CareerProspects";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CourseJsonLd from "@/components/seo/CourseJsonLd";

export const metadata = {
  title: "BHM Program | Bachelor of Hotel Management",
  description:
    "Join the BHM (Bachelor of Hotel Management) at Alpine Management College, Nepalgunj — a four-year Pokhara University affiliated program blending hospitality theory with real-world industry training.",
  alternates: {
    canonical: "https://www.alpinemanagementcollege.edu.np/bhm",
  },
  openGraph: {
    title: "BHM Program | Alpine Management College",
    description:
      "Four-year BHM program at AMC Nepalgunj. Launch your hospitality career with Pokhara University's trusted curriculum.",
    url: "https://www.alpinemanagementcollege.edu.np/bhm",
  },
};

export default function BHMPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.alpinemanagementcollege.edu.np" },
          { name: "BHM Program", url: "https://www.alpinemanagementcollege.edu.np/bhm" },
        ]}
      />
      <CourseJsonLd
        name="Bachelor of Hotel Management (BHM)"
        description="A four-year undergraduate program in hospitality and hotel management, combining theory and practical industry exposure at Alpine Management College, Nepalgunj, affiliated with Pokhara University."
        url="https://www.alpinemanagementcollege.edu.np/bhm"
        duration="P4Y"
        educationalLevel="Bachelor"
      />
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

