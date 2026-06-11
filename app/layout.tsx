import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import WebSiteJsonLd from "@/components/seo/WebSiteJsonLd";

const BASE_URL = "https://alpinemanagement.edu.np";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Alpine Management College | BBA, BHM & MBA in Nepalgunj",
    template: "%s | Alpine Management College",
  },
  description:
    "Alpine Management College (AMC) is the pioneer BBA and BHM institution in Nepalgunj, Nepal — affiliated with Pokhara University since 2009. Offering BBA, BBA (Finance), BHM, and MBA programs.",
  keywords: [
    "Alpine Management College",
    "AMC Nepalgunj",
    "BBA college Nepal",
    "BHM college Nepal",
    "MBA Nepal",
    "Pokhara University affiliated college",
    "management college Nepalgunj",
    "hotel management Nepal",
    "business administration Nepal",
    "top college Nepalgunj",
  ],
  authors: [{ name: "Alpine Management College", url: BASE_URL }],
  creator: "Alpine Management College",
  publisher: "Alpine Management College",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Alpine Management College",
    title: "Alpine Management College | BBA, BHM & MBA in Nepalgunj",
    description:
      "Alpine Management College (AMC) is the pioneer BBA and BHM institution in Nepalgunj, Nepal — affiliated with Pokhara University since 2009.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Alpine Management College – Nepalgunj, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpine Management College | BBA, BHM & MBA in Nepalgunj",
    description:
      "Pioneer BBA & BHM institution in Nepalgunj, Nepal. Affiliated with Pokhara University since 2009.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GZRE3E64EB"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GZRE3E64EB');
          `}
        </Script>
      </head>
      <body className="font-sans text-deep-midnight bg-snow-white uppercase overflow-x-hidden m-0 p-0">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  );
}
