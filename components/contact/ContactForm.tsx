"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactDetails = [
  {
    label: "Address",
    value: "Adarshnagar, Nepalgunj, Banke",
    href: "https://maps.google.com/?q=Adarshnagar,Nepalgunj,Banke,Nepal",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+977-081-536877",
    href: "tel:+977081536877",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "bijay.alpine@gmail.com",
    href: "mailto:bijay.alpine@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const FORMSUBMIT_EMAIL = "bijay.alpine@gmail.com";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          _subject: `New Inquiry: ${formData.subject} — ${formData.name}`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section ref={ref} className="relative bg-snow-white py-[80px] sm:py-[120px]">
      <div className="w-full max-w-[1570px] mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="inline-block px-5 py-2 rounded-full bg-summit-orange/15 text-summit-orange text-sm font-semibold tracking-[0.04em] uppercase leading-none mb-8">
              Get in touch
            </p>
            <h2 className="m-0 mb-6 text-deep-midnight text-[38px] sm:text-[52px] leading-[1.1] font-normal uppercase">
              We&apos;re Here<br />to Help You
            </h2>
            <p className="m-0 mb-12 text-rock-grey text-lg leading-[1.75] normal-case max-w-[480px]">
              Have a question about our programs, admission process, or campus life? Reach out and our team will get back to you promptly.
            </p>

            <div className="flex flex-col gap-8">
              {contactDetails.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("https://maps") ? "_blank" : undefined}
                  rel={item.href.startsWith("https://maps") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-5 no-underline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-alpine-blue/10 group-hover:bg-alpine-blue group-hover:text-white text-alpine-blue flex items-center justify-center transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="m-0 text-white/35 text-xs uppercase tracking-[0.15em] text-rock-grey/50 mb-1">{item.label}</p>
                    <p className="m-0 text-deep-midnight text-base font-medium normal-case group-hover:text-alpine-blue transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map embed */}
            <motion.div
              className="mt-12 rounded-2xl overflow-hidden border border-deep-midnight/10 h-[220px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.9!2d81.6097!3d28.0624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998513e3af5e38b%3A0x6f4b2f2f2b2f2b2f!2sAdarshnagar%2C%20Nepalgunj!5e0!3m2!1sen!2snp!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alpine Management College location"
              />
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.07)] p-8 sm:p-12"
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center h-full py-16 gap-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-summit-orange/15 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-summit-orange">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="m-0 text-deep-midnight text-2xl font-normal uppercase">Message Sent!</h3>
                <p className="m-0 text-rock-grey text-base leading-[1.7] normal-case max-w-[340px]">
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-2 text-alpine-blue underline text-sm font-medium normal-case cursor-pointer bg-transparent border-0"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="m-0 mb-8 text-deep-midnight text-2xl font-normal uppercase">Send a Message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-[0.1em] text-rock-grey/70 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="h-12 px-4 rounded-xl border border-deep-midnight/15 bg-snow-white text-deep-midnight text-sm normal-case placeholder:text-rock-grey/40 focus:outline-none focus:border-alpine-blue transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-[0.1em] text-rock-grey/70 font-medium">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="h-12 px-4 rounded-xl border border-deep-midnight/15 bg-snow-white text-deep-midnight text-sm normal-case placeholder:text-rock-grey/40 focus:outline-none focus:border-alpine-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-[0.1em] text-rock-grey/70 font-medium">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+977 98XXXXXXXX"
                        className="h-12 px-4 rounded-xl border border-deep-midnight/15 bg-snow-white text-deep-midnight text-sm normal-case placeholder:text-rock-grey/40 focus:outline-none focus:border-alpine-blue transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-[0.1em] text-rock-grey/70 font-medium">Subject *</label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl border border-deep-midnight/15 bg-snow-white text-deep-midnight text-sm normal-case focus:outline-none focus:border-alpine-blue transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="bba">BBA Program</option>
                        <option value="bhm">BHM Program</option>
                        <option value="mba">MBA Program</option>
                        <option value="scholarship">Scholarship</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.1em] text-rock-grey/70 font-medium">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help…"
                      className="px-4 py-3 rounded-xl border border-deep-midnight/15 bg-snow-white text-deep-midnight text-sm normal-case placeholder:text-rock-grey/40 focus:outline-none focus:border-alpine-blue transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="m-0 text-red-500 text-sm normal-case text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 h-14 rounded-full bg-summit-orange text-white font-semibold text-base tracking-wide uppercase cursor-pointer border-0 hover:bg-summit-orange-600 hover:shadow-[0_16px_40px_rgba(240,122,32,0.35)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
