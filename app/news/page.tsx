import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import NewsHero from "@/components/news/NewsHero";
import NewsGrid from "@/components/news/NewsGrid";
import { client } from "@/sanity/lib/client";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "News & Articles | Alpine Management College",
  description:
    "Stay up to date with the latest news, announcements, and articles from Alpine Management College, Nepalgunj.",
  alternates: {
    canonical: "https://alpinemanagement.edu.np/news",
  },
  openGraph: {
    title: "News & Articles | Alpine Management College",
    description:
      "Latest news and announcements from Alpine Management College (AMC), Nepalgunj.",
    url: "https://alpinemanagement.edu.np/news",
  },
};

async function getNews() {
  return client.fetch(
    `*[_type == "news"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset -> { url },
        alt
      }
    }`
  );
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://alpinemanagement.edu.np" },
          { name: "News", url: "https://alpinemanagement.edu.np/news" },
        ]}
      />
      <Navbar />
      <NewsHero />
      <NewsGrid news={news} />
      <FooterCTA />
      <Footer />
    </main>
  );
}
