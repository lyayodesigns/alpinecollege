import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AboutHero from "@/components/about/AboutHero";
import DevelopCareer from "@/components/about/DevelopCareer";
import AboutSection from "@/components/about/AboutSection";
import Leadership from "@/components/about/Leadership";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutStats from "@/components/about/AboutStats";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "About Us | Alpine Management College",
  description:
    "Learn about Alpine Management College (AMC) — the pioneer BBA and BHM institution in Nepalgunj, affiliated with Pokhara University since 2009.",
  alternates: {
    canonical: "https://www.alpinemanagementcollege.edu.np/about",
  },
  openGraph: {
    title: "About Us | Alpine Management College",
    description:
      "Pioneer BBA & BHM institution in Nepalgunj, affiliated with Pokhara University since 2009. Learn our story, leadership, and mission.",
    url: "https://www.alpinemanagementcollege.edu.np/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.alpinemanagementcollege.edu.np" },
          { name: "About Us", url: "https://www.alpinemanagementcollege.edu.np/about" },
        ]}
      />
      <Navbar />
      <AboutHero />
      <DevelopCareer />
      <AboutSection />
      <Leadership />
      <AboutTestimonials />
      <AboutStats />
      <FooterCTA />
      <Footer />
    </main>
  );
}

