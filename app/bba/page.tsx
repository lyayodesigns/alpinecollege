import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import BBAHero from "@/components/bba/BBAHero";
import ProgramOverview from "@/components/bba/ProgramOverview";
import ProgramStats from "@/components/bba/ProgramStats";
import WhyJoinBBA from "@/components/bba/WhyJoinBBA";
import Objectives from "@/components/bba/Objectives";
import CareerProspects from "@/components/bba/CareerProspects";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CourseJsonLd from "@/components/seo/CourseJsonLd";

export const metadata = {
  title: "BBA Program | Bachelor of Business Administration",
  description:
    "Enroll in the BBA (Bachelor of Business Administration) at Alpine Management College, Nepalgunj — a four-year Pokhara University affiliated program building management, finance, and leadership skills.",
  alternates: {
    canonical: "https://alpinemanagement.edu.np/bba",
  },
  openGraph: {
    title: "BBA Program | Alpine Management College",
    description:
      "Four-year BBA program at AMC Nepalgunj — affiliated with Pokhara University. Build business, finance, and management expertise.",
    url: "https://alpinemanagement.edu.np/bba",
  },
};

export default function BBAPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://alpinemanagement.edu.np" },
          { name: "BBA Program", url: "https://alpinemanagement.edu.np/bba" },
        ]}
      />
      <CourseJsonLd
        name="Bachelor of Business Administration (BBA)"
        description="A four-year undergraduate program developing management, finance, marketing, and entrepreneurship skills at Alpine Management College, Nepalgunj, affiliated with Pokhara University."
        url="https://alpinemanagement.edu.np/bba"
        duration="P4Y"
        educationalLevel="Bachelor"
      />
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

