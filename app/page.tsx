import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/sections/ServiceCard";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import YouTubeFacade from "@/components/sections/YouTubeFacade";
import { heroContent, servicesContent, optimalFunctionContent, affiliates } from "@/lib/content/homepage";
import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/utils/seo";

export const metadata: Metadata = {
  title: "Personal Training, Massage Therapy & Yoga in Pittsburgh | Full Circle Function & Fitness",
  description:
    "Full Circle Function & Fitness offers personal training, massage therapy, and private yoga in Pittsburgh's North Hills. 4.9 stars on Google with 75+ reviews. Start changing your life today.",
  alternates: {
    canonical: "https://fullcirclefunctionandfitness.com",
  },
};

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <Hero
        headline={heroContent.headline}
        subheadline={heroContent.subheadline}
        subtext={heroContent.subtext}
        ctaText={heroContent.ctaText}
        ctaHref={heroContent.ctaHref}
      />

      {/* Promo Video */}
      <YouTubeFacade />

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

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

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
          <div>
            <h3 className="text-h3 text-center text-white mb-12">
              {optimalFunctionContent.goalsHeading}
            </h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">

              {/* Gain Strength */}
              <div className="flex flex-col items-center gap-3 w-36">
                <svg className="w-10 h-10 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7.5" y="3" width="2" height="18" rx="1"/>
                  <rect x="14.5" y="3" width="2" height="18" rx="1"/>
                  <rect x="1" y="8.5" width="6.5" height="7" rx="1"/>
                  <rect x="16.5" y="8.5" width="6.5" height="7" rx="1"/>
                  <line x1="9.5" y1="12" x2="14.5" y2="12"/>
                </svg>
                <span className="text-sm font-medium text-white text-center leading-snug">Gain Strength</span>
              </div>

              {/* Build and Maintain Muscle */}
              <div className="flex flex-col items-center gap-3 w-36">
                <svg className="w-10 h-10 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 20C4 16 5 10 9 8"/>
                  <path d="M19 20C20 16 19 10 15 8"/>
                  <path d="M9 8C10 5 14 5 15 8"/>
                  <line x1="5" y1="20" x2="19" y2="20"/>
                </svg>
                <span className="text-sm font-medium text-white text-center leading-snug">Build &amp; Maintain Muscle</span>
              </div>

              {/* Build Confidence */}
              <div className="flex flex-col items-center gap-3 w-36">
                <svg className="w-10 h-10 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <span className="text-sm font-medium text-white text-center leading-snug">Build Confidence</span>
              </div>

              {/* Reduce Chronic Pain */}
              <div className="flex flex-col items-center gap-3 w-36">
                <svg className="w-10 h-10 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 3.8 2 6.5 2c1.98 0 3.93.881 5.5 2.5C13.57 2.881 15.52 2 17.5 2 20.2 2 23 3.518 23 7.191c0 4.105-5.37 8.863-11 14.402z"/>
                </svg>
                <span className="text-sm font-medium text-white text-center leading-snug">Reduce Chronic Pain</span>
              </div>

              {/* Healthy Lifestyle Habits */}
              <div className="flex flex-col items-center gap-3 w-36">
                <svg className="w-10 h-10 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
                <span className="text-sm font-medium text-white text-center leading-snug">Healthy Lifestyle Habits</span>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" href="/contact">
              BOOK A FREE CONSULTATION
            </Button>
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
                  width={200}
                  height={200}
                  loading="lazy"
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
