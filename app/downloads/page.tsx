import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import DownloadsHero from "@/components/downloads/DownloadsHero";
import DownloadsList from "@/components/downloads/DownloadsList";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: "Downloads | Alpine Management College",
  description:
    "Download brochures, forms, syllabi, and official notices from Alpine Management College, Nepalgunj.",
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
      <Navbar />
      <DownloadsHero />
      <DownloadsList downloads={downloads} />
      <FooterCTA />
      <Footer />
    </main>
  );
}
