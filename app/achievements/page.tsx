import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AchievementsHero from "@/components/achievements/AchievementsHero";
import AlumniStories from "@/components/achievements/AlumniStories";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Achievements | Alpine Management College",
  description:
    "Discover the achievements of Alpine Management College students and alumni — from industry placements to student testimonials that highlight AMC's commitment to excellence.",
  alternates: {
    canonical: "https://www.alpinemanagementcollege.edu.np/achievements",
  },
  openGraph: {
    title: "Achievements | Alpine Management College",
    description:
      "Student and alumni achievements at AMC Nepalgunj — placements, awards, and success stories.",
    url: "https://www.alpinemanagementcollege.edu.np/achievements",
  },
};

export default function AchievementsPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.alpinemanagementcollege.edu.np" },
          { name: "Achievements", url: "https://www.alpinemanagementcollege.edu.np/achievements" },
        ]}
      />
      <Navbar />
      <AchievementsHero />
      <AlumniStories />
      <AboutTestimonials />
      <FooterCTA />
      <Footer />
    </main>
  );
}
