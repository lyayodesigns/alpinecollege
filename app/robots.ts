import type { MetadataRoute } from "next";

const BASE_URL = "https://www.alpinemanagementcollege.edu.np";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio/",  // Sanity Studio — not for crawlers
          "/api/",
        ],
      },
      {
        // Allow all major search engine bots explicitly
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot"],
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
