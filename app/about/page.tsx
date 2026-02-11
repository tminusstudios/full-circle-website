import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { aboutIntro, contactInfo, staffBios } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team at Full Circle Function & Fitness. Pittsburgh's performance-driven personal training and massage therapy specialists.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-navy-950">
        <Container>
          <h1 className="text-h1 text-white text-center">ABOUT</h1>

          {/* Google Reviews Badge */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJ1ct2sFSNNIgRz3b-few4qF0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-4 border border-gray-200 hover:border-brand-500 transition-colors duration-200"
            >
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FBBF24"/>
                  </svg>
                ))}
                {/* 0.9 filled star */}
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <defs>
                    <clipPath id="star-90">
                      <rect x="0" y="0" width="21.6" height="24"/>
                    </clipPath>
                  </defs>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#4B5563"/>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FBBF24" clipPath="url(#star-90)"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wider">4.9 on Google</p>
                <p className="text-gray-300 text-sm">75 reviews</p>
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-steel-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body-lg text-gray-300 leading-relaxed text-center">
              {aboutIntro.text}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-navy-900">
        <Container>
          <h2 className="text-h2 text-white text-center mb-12">CONTACT</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="border-l-4 border-brand-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">
                  PHONE
                </h3>
                <p className="text-body-lg text-white">
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-500 transition-colors">
                    {contactInfo.phone}
                  </a>
                </p>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">
                  EMAIL
                </h3>
                <p className="text-body-lg text-white">
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-500 transition-colors">
                    {contactInfo.email}
                  </a>
                </p>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">
                  ADDRESS
                </h3>
                <p className="text-body-lg text-white">{contactInfo.address}</p>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">
                  HOURS
                </h3>
                <p className="text-body-lg text-white">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-steel-900">
        <Container>
          <h2 className="text-h2 text-white text-center mb-16">MEET THE TEAM</h2>
          <div className="divide-y divide-gray-200/10">
            {staffBios.map((staff, index) => (
              <div key={index} className="py-12 first:pt-0 last:pb-0">
                {/* Bio: Two columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Mobile: Photo first */}
                  <div className="lg:hidden">
                    {staff.imageUrl && (
                      <div className="aspect-square overflow-hidden border border-gray-200">
                        <img
                          src={staff.imageUrl}
                          alt={staff.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Left Column: Name, Title, Bio */}
                  <div className="space-y-6">
                    <h3 className="text-h2 text-white font-black">
                      {staff.name}
                    </h3>
                    <p className="text-body-lg text-brand-500 font-bold">
                      {staff.title}
                    </p>
                    <div className="space-y-4">
                      {staff.bioParagraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-body text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Photo (Desktop) */}
                  <div className="hidden lg:block">
                    {staff.imageUrl && (
                      <div className="aspect-square overflow-hidden border border-gray-200 sticky top-8">
                        <img
                          src={staff.imageUrl}
                          alt={staff.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Credentials Bar */}
                <div className="mt-8 pt-6 border-t-2 border-brand-500/30">
                  <p className="text-xs uppercase tracking-widest text-gray-300/60 mb-4">Education &amp; Certifications</p>
                  <div className="flex flex-wrap gap-3">
                    {staff.credentials.map((cred, credIndex) => (
                      <div
                        key={credIndex}
                        className="bg-navy-900 border border-gray-200/20 px-4 py-3 flex flex-col gap-1"
                      >
                        <span className="text-white font-bold text-sm">{cred.institution}</span>
                        <span className="text-gray-300 text-xs">{cred.credential}</span>
                      </div>
                    ))}
                  </div>

                  {staff.additionalCerts.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {staff.additionalCerts.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="border border-brand-500/30 text-gray-300 text-xs px-3 py-1.5 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-500">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 text-white mb-6">READY TO START?</h2>
            <Button variant="secondary" size="lg" href="/contact" className="border-white text-white hover:bg-white hover:text-brand-500">
              CLAIM FREE SESSION
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
