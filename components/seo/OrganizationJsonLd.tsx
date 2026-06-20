/**
 * OrganizationJsonLd
 * Renders the top-level Organization / CollegeOrUniversity schema.
 * Include once in the root layout or on every page via layout.tsx.
 */
export default function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["CollegeOrUniversity", "EducationalOrganization"],
    "@id": "https://alpinemanagement.edu.np/#organization",
    name: "Alpine Management College",
    alternateName: "AMC Nepalgunj",
    url: "https://alpinemanagement.edu.np",
    logo: {
      "@type": "ImageObject",
      url: "https://alpinemanagement.edu.np/alpine-logo.avif",
      width: 200,
      height: 60,
    },
    image: "https://alpinemanagement.edu.np/og-image.jpg",
    description:
      "Alpine Management College (AMC) is the pioneer BBA and BHM institution in Nepalgunj, Nepal — affiliated with Pokhara University since 2009. Offering BBA, BBA (Finance), BHM, and MBA programs.",
    foundingDate: "2009",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nepalgunj",
      addressLocality: "Nepalgunj",
      addressRegion: "Lumbini Province",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.05,
      longitude: 81.6167,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "admissions",
        availableLanguage: ["English", "Nepali"],
      },
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "Bachelor of Business Administration (BBA)",
          url: "https://alpinemanagement.edu.np/bba",
          provider: {
            "@type": "CollegeOrUniversity",
            name: "Alpine Management College",
          },
        },
        {
          "@type": "Course",
          name: "Bachelor of Business Administration – Finance (BBA Finance)",
          url: "https://alpinemanagement.edu.np/bba-finance",
          provider: {
            "@type": "CollegeOrUniversity",
            name: "Alpine Management College",
          },
        },
        {
          "@type": "Course",
          name: "Bachelor of Hotel Management (BHM)",
          url: "https://alpinemanagement.edu.np/bhm",
          provider: {
            "@type": "CollegeOrUniversity",
            name: "Alpine Management College",
          },
        },
        {
          "@type": "Course",
          name: "Master of Business Administration (MBA)",
          url: "https://alpinemanagement.edu.np/mba",
          provider: {
            "@type": "CollegeOrUniversity",
            name: "Alpine Management College",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
