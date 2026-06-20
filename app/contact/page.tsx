import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata = {
  title: "Contact Us | Alpine Management College",
  description:
    "Get in touch with Alpine Management College (AMC) — reach us for admission inquiries, program information, or any other questions. Located in Adarshnagar, Nepalgunj, Banke.",
  alternates: {
    canonical: "https://alpinemanagement.edu.np/contact",
  },
  openGraph: {
    title: "Contact Us | Alpine Management College",
    description:
      "Reach out to AMC Nepalgunj for admission inquiries, program information, or any other questions.",
    url: "https://alpinemanagement.edu.np/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://alpinemanagement.edu.np" },
          { name: "Contact Us", url: "https://alpinemanagement.edu.np/contact" },
        ]}
      />
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
