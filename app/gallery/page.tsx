import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: "Gallery | Alpine Management College",
  description:
    "Browse photos from events, campus life, and activities at Alpine Management College, Nepalgunj.",
};

async function getGalleries() {
  return client.fetch(
    `*[_type == "gallery"] | order(_createdAt desc) {
      _id,
      title,
      description,
      images[] {
        image { asset -> { url }, hotspot },
        caption,
        alt
      }
    }`
  );
}

export default async function GalleryPage() {
  const galleries = await getGalleries();

  return (
    <main>
      <Navbar />
      <GalleryHero />
      <GalleryGrid galleries={galleries} />
      <FooterCTA />
      <Footer />
    </main>
  );
}
