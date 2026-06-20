interface CourseJsonLdProps {
  name: string;
  description: string;
  url: string;
  /** e.g. "4 years" */
  duration?: string;
  /** e.g. "Bachelor" | "Master" */
  educationalLevel?: string;
}

/**
 * CourseJsonLd
 * Renders a Course schema for a program/degree page.
 */
export default function CourseJsonLd({
  name,
  description,
  url,
  duration,
  educationalLevel,
}: CourseJsonLdProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    provider: {
      "@type": "CollegeOrUniversity",
      "@id": "https://alpinemanagement.edu.np/#organization",
      name: "Alpine Management College",
      sameAs: "https://alpinemanagement.edu.np",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      inLanguage: "en",
    },
  };

  if (duration) schema.timeRequired = duration;
  if (educationalLevel) schema.educationalLevel = educationalLevel;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
