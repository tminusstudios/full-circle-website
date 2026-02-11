import type { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import { heroContent, servicesContent, optimalFunctionContent, affiliates, faqs } from "@/lib/content/homepage";
import { generateLocalBusinessSchema } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Start changing your life in six weeks. Performance-driven personal training and massage therapy in Pittsburgh.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <Hero
        headline={heroContent.headline}
        subheadline={heroContent.subheadline}
        subtext={heroContent.subtext}
        ctaText={heroContent.ctaText}
        ctaHref={heroContent.ctaHref}
      />

      {/* Services Section */}
      <section className="section-padding bg-steel-900">
        <Container>
          <h2 className="text-h2 text-center text-white mb-12">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesContent.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Achieve Optimal Function Section */}
      <section className="section-padding bg-navy-900">
        <Container>
          <h2 className="text-h2 text-center text-white mb-8">
            {optimalFunctionContent.headline}
          </h2>
          <p className="text-body-lg text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            {optimalFunctionContent.description}
          </p>

          {/* Common Client Goals */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-h3 text-center text-white mb-8">
              {optimalFunctionContent.goalsHeading}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {optimalFunctionContent.goals.map((goal, index) => (
                <li
                  key={index}
                  className="flex items-center text-body-lg text-gray-300"
                >
                  <span className="w-2 h-2 bg-brand-500 mr-4 flex-shrink-0"></span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" href="/contact">
              CLAIM FREE SESSION
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Claim Free Session Form */}
      <section className="section-padding bg-navy-900">
        <Container>
          <h2 className="text-h2 text-white text-center mb-10">CLAIM YOUR FREE SESSION</h2>
          <div className="max-w-2xl mx-auto">
            <div
              className="bg-navy-800 border border-gray-200/20 rounded-lg overflow-hidden"
              style={{ minHeight: "600px" }}
            >
              <iframe
                src="https://link.localbestgyms.com/widget/form/tQRF83bdOCaHAx6qetRg"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px", minHeight: "600px" }}
                id="inline-tQRF83bdOCaHAx6qetRg"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Free Class Form - Claude - 2/10/26"
                data-height="undefined"
                data-layout-iframe-id="inline-tQRF83bdOCaHAx6qetRg"
                data-form-id="tQRF83bdOCaHAx6qetRg"
                title="Free Class Form - Claude - 2/10/26"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
      <Script src="https://link.localbestgyms.com/js/form_embed.js" strategy="afterInteractive" />

      {/* FAQ Section */}
      <section className="section-padding bg-steel-900">
        <Container>
          <h2 className="text-h2 text-center text-white mb-12">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 bg-navy-900 p-6">
                <h3 className="text-h4 text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-body text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Affiliates Section */}
      <section className="section-padding bg-navy-950">
        <Container>
          <h2 className="text-h2 text-center text-white mb-12">AFFILIATES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {affiliates.map((affiliate, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-steel-900 aspect-square">
                <img
                  src={affiliate.imageUrl}
                  alt={affiliate.alt}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
