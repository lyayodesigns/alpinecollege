import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AdmissionHero from "@/components/admission/AdmissionHero";
import AdmissionProcedure from "@/components/admission/AdmissionProcedure";
import DocumentsRequired from "@/components/admission/DocumentsRequired";
import ScholarshipScheme from "@/components/admission/ScholarshipScheme";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Admission | Alpine Management College",
  description:
    "Apply to Alpine Management College (AMC) — learn about entry requirements, admission procedures, required documents, and scholarship schemes for BBA, BHM, and MBA programs.",
  alternates: {
    canonical: "https://alpinemanagement.edu.np/admission",
  },
  openGraph: {
    title: "Admission | Alpine Management College",
    description:
      "Apply to AMC Nepalgunj — admission procedures, required documents, and scholarship schemes for BBA, BHM, and MBA programs.",
    url: "https://alpinemanagement.edu.np/admission",
  },
};

export default function AdmissionPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://alpinemanagement.edu.np" },
          { name: "Admission", url: "https://alpinemanagement.edu.np/admission" },
        ]}
      />
      <Navbar />
      <AdmissionHero />
      <AdmissionProcedure />
      <DocumentsRequired />
      <ScholarshipScheme />
      <FooterCTA />
      <Footer />
    </main>
  );
}
