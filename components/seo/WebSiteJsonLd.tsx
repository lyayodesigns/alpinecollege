/**
 * WebSiteJsonLd
 * Renders the WebSite schema with a SearchAction for sitelinks search.
 * Include once in the root layout.
 */
export default function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.alpinemanagementcollege.edu.np/#website",
    name: "Alpine Management College",
    url: "https://www.alpinemanagementcollege.edu.np",
    description:
      "Official website of Alpine Management College (AMC), Nepalgunj — pioneer BBA & BHM institution affiliated with Pokhara University.",
    publisher: {
      "@id": "https://www.alpinemanagementcollege.edu.np/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.alpinemanagementcollege.edu.np/news?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
