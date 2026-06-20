import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { client } from "@/sanity/lib/client";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Gallery | Alpine Management College",
  description:
    "Browse photos from events, campus life, and activities at Alpine Management College, Nepalgunj.",
  alternates: {
    canonical: "https://alpinemanagement.edu.np/gallery",
  },
  openGraph: {
    title: "Gallery | Alpine Management College",
    description:
      "Campus life, events, and student activities at AMC Nepalgunj — captured in photos.",
    url: "https://alpinemanagement.edu.np/gallery",
  },
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://alpinemanagement.edu.np" },
          { name: "Gallery", url: "https://alpinemanagement.edu.np/gallery" },
        ]}
      />
      <Navbar />
      <GalleryHero />
      <GalleryGrid galleries={galleries} />
      <FooterCTA />
      <Footer />
    </main>
  );
}
