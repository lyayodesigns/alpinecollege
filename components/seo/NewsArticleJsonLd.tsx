interface NewsArticleJsonLdProps {
  headline: string;
  description: string;
  url: string;
  publishedAt: string;
  /** ISO 8601 date string for when article was last modified */
  modifiedAt?: string;
  /** Absolute URL to the article's main image */
  imageUrl?: string;
  imageAlt?: string;
}

/**
 * NewsArticleJsonLd
 * Renders a NewsArticle schema for individual news/blog posts.
 */
export default function NewsArticleJsonLd({
  headline,
  description,
  url,
  publishedAt,
  modifiedAt,
  imageUrl,
  imageAlt,
}: NewsArticleJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline,
    description,
    url,
    datePublished: publishedAt,
    dateModified: modifiedAt ?? publishedAt,
    author: {
      "@type": "Organization",
      "@id": "https://www.alpinemanagementcollege.edu.np/#organization",
      name: "Alpine Management College",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.alpinemanagementcollege.edu.np/#organization",
      name: "Alpine Management College",
      logo: {
        "@type": "ImageObject",
        url: "https://www.alpinemanagementcollege.edu.np/alpine-logo.avif",
      },
    },
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };

  if (imageUrl) {
    schema.image = {
      "@type": "ImageObject",
      url: imageUrl,
      description: imageAlt ?? headline,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
