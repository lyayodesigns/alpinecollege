import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import AdmissionHero from "@/components/admission/AdmissionHero";
import AdmissionProcedure from "@/components/admission/AdmissionProcedure";
import DocumentsRequired from "@/components/admission/DocumentsRequired";
import ScholarshipScheme from "@/components/admission/ScholarshipScheme";

export const metadata = {
  title: "Admission | Alpine Management College",
  description:
    "Apply to Alpine Management College (AMC) — learn about entry requirements, admission procedures, required documents, and scholarship schemes for BBA, BHM, and MBA programs.",
};

export default function AdmissionPage() {
  return (
    <main>
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
