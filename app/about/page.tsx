import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AboutHero from "@/components/about/AboutHero";
import DevelopCareer from "@/components/about/DevelopCareer";
import AboutSection from "@/components/about/AboutSection";
import Leadership from "@/components/about/Leadership";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutStats from "@/components/about/AboutStats";

export const metadata = {
  title: "About Us | Alpine Management College",
  description:
    "Learn about Alpine Management College (AMC) — the pioneer BBA and BHM institution in Nepalgunj, affiliated with Pokhara University since 2009.",
};

export default function AboutPage() {
  return (
    <main>
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
