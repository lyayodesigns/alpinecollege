import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import DownloadsHero from "@/components/downloads/DownloadsHero";
import DownloadsList from "@/components/downloads/DownloadsList";
import { client } from "@/sanity/lib/client";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Downloads | Alpine Management College",
  description:
    "Download brochures, forms, syllabi, and official notices from Alpine Management College, Nepalgunj.",
  alternates: {
    canonical: "https://www.alpinemanagementcollege.edu.np/downloads",
  },
  openGraph: {
    title: "Downloads | Alpine Management College",
    description:
      "Official brochures, forms, syllabi, and notices from AMC Nepalgunj — free to download.",
    url: "https://www.alpinemanagementcollege.edu.np/downloads",
  },
};

async function getDownloads() {
  return client.fetch(
    `*[_type == "downloads"] | order(publishedAt desc) {
      _id,
      title,
      description,
      category,
      publishedAt,
      file { asset -> { url, originalFilename, size } }
    }`
  );
}

export default async function DownloadsPage() {
  const downloads = await getDownloads();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.alpinemanagementcollege.edu.np" },
          { name: "Downloads", url: "https://www.alpinemanagementcollege.edu.np/downloads" },
        ]}
      />
      <Navbar />
      <DownloadsHero />
      <DownloadsList downloads={downloads} />
      <FooterCTA />
      <Footer />
    </main>
  );
}
