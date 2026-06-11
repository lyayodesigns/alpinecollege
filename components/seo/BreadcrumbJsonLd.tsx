interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbJsonLd
 * Renders a BreadcrumbList schema for the given page hierarchy.
 *
 * Usage:
 *   <BreadcrumbJsonLd items={[
 *     { name: "Home", url: "https://www.alpinemanagementcollege.edu.np" },
 *     { name: "BBA Program", url: "https://www.alpinemanagementcollege.edu.np/bba" },
 *   ]} />
 */
export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
