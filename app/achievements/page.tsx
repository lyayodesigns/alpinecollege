import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AchievementsHero from "@/components/achievements/AchievementsHero";
import AlumniStories from "@/components/achievements/AlumniStories";
import AboutTestimonials from "@/components/about/AboutTestimonials";

export const metadata = {
  title: "Achievements | Alpine Management College",
  description:
    "Discover the achievements of Alpine Management College students and alumni — from industry placements to student testimonials that highlight AMC's commitment to excellence.",
};

export default function AchievementsPage() {
  return (
    <main>
      <Navbar />
      <AchievementsHero />
      <AlumniStories />
      <AboutTestimonials />
      <FooterCTA />
      <Footer />
    </main>
  );
}
