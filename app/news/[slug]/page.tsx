import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsArticle from "@/components/news/NewsArticle";
import { client } from "@/sanity/lib/client";
import NewsArticleJsonLd from "@/components/seo/NewsArticleJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const BASE_URL = "https://alpinemanagement.edu.np";

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
    title: post.title,
    description: post.excerpt ?? "Read the latest news from Alpine Management College.",
    alternates: {
      canonical: `${BASE_URL}/news/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Alpine Management College`,
      description: post.excerpt ?? "Read the latest news from Alpine Management College.",
      url: `${BASE_URL}/news/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Alpine Management College"],
      ...(post.mainImage?.asset?.url
        ? { images: [{ url: post.mainImage.asset.url, alt: post.mainImage.alt ?? post.title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Alpine Management College`,
      description: post.excerpt ?? "Read the latest news from Alpine Management College.",
      ...(post.mainImage?.asset?.url ? { images: [post.mainImage.asset.url] } : {}),
    },
  };
}

export default async function NewsSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) notFound();

  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BASE_URL },
          { name: "News", url: `${BASE_URL}/news` },
          { name: post.title, url: `${BASE_URL}/news/${slug}` },
        ]}
      />
      <NewsArticleJsonLd
        headline={post.title}
        description={post.excerpt ?? ""}
        url={`${BASE_URL}/news/${slug}`}
        publishedAt={post.publishedAt}
        imageUrl={post.mainImage?.asset?.url}
        imageAlt={post.mainImage?.alt ?? post.title}
      />
      <Navbar />
      <NewsArticle post={post} />
      <Footer />
    </main>
  );
}

