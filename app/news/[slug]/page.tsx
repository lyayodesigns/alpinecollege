import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsArticle from "@/components/news/NewsArticle";
import { client } from "@/sanity/lib/client";

type Props = { params: Promise<{ slug: string }> };

async function getNewsPost(slug: string) {
  return client.fetch(
    `*[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset -> { url },
        alt
      },
      body
    }`,
    { slug }
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  if (!post) return { title: "Not Found | Alpine Management College" };

  return {
    title: `${post.title} | Alpine Management College`,
    description: post.excerpt ?? "Read the latest news from Alpine Management College.",
    openGraph: post.mainImage?.asset?.url
      ? { images: [{ url: post.mainImage.asset.url }] }
      : undefined,
  };
}

export default async function NewsSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) notFound();

  return (
    <main>
      <Navbar />
      <NewsArticle post={post} />
      <Footer />
    </main>
  );
}
