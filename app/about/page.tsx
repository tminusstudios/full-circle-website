import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { aboutIntro, staffBios } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About Us | Meet Our Personal Trainers & Massage Therapists",
  description:
    "Meet the certified personal trainers and licensed massage therapists at Full Circle Function & Fitness in Allison Park, PA. CSCS, LMT, and NSCA certified professionals serving Pittsburgh's North Hills.",
  alternates: {
    canonical: "https://fullcirclefunctionandfitness.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero + Intro */}
      <section className="section-padding bg-navy-950">
        <Container>
          <h1 className="text-h1 text-white text-center mb-10">ABOUT FULL CIRCLE FUNCTION &amp; FITNESS</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-body-lg text-gray-300 leading-relaxed text-center">
              {aboutIntro.text}
            </p>
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
                          alt={`${staff.name} - ${staff.title} at Full Circle Function & Fitness in Allison Park, PA`}
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
                          alt={`${staff.name} - ${staff.title} at Full Circle Function & Fitness in Allison Park, PA`}
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

      {/* Contact Information */}
      <section className="section-padding bg-navy-900">
        <Container>
          <h2 className="text-h2 text-white text-center mb-12">CONTACT</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-500 pl-6">
                <p className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">PHONE</p>
                <a href="tel:4122957058" className="text-body-lg text-white hover:text-brand-500 transition-colors">
                  412-295-7058
                </a>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <p className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">EMAIL</p>
                <a href="mailto:cody@fullcirclefunctionandfitness.com" className="text-body-lg text-white hover:text-brand-500 transition-colors">
                  cody@fullcirclefunctionandfitness.com
                </a>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <p className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">ADDRESS</p>
                <p className="text-body-lg text-white">4361 William Flinn Highway, Allison Park, PA 15101</p>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <p className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">HOURS</p>
                <p className="text-body-lg text-white">Monday – Friday: 6am – 8pm | By Appointment</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-500">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 text-white mb-6">READY TO START?</h2>
            <a
              href="/contact"
              className="inline-block uppercase font-bold tracking-wider transition-all duration-200 border-2 rounded-none px-10 py-4 text-sm border-white text-white hover:bg-white hover:text-brand-500"
            >
              BOOK A FREE CONSULTATION
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
