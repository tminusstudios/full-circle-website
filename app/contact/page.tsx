import type { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/layout/Container";
import { contactContent } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Contact Us | Allison Park, PA",
  description:
    "Contact Full Circle Function & Fitness in Allison Park, PA. Call 412-295-7058 or email cody@fullcirclefunctionandfitness.com. Located at 4361 William Flinn Hwy.",
  alternates: {
    canonical: "https://fullcirclefunctionandfitness.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header + Form Section */}
      <section className="section-padding bg-navy-950">
        <Container>
          <h1 className="text-h1 text-white text-center mb-6">
            {contactContent.title}
          </h1>
          <p className="text-body-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
            {contactContent.description}
          </p>
          <div className="max-w-2xl mx-auto">
            <div
              className="bg-navy-800 border border-gray-200/20 rounded-lg overflow-hidden"
              style={{ minHeight: "916px" }}
            >
              <iframe
                src="https://link.localbestgyms.com/widget/form/GUqiHvrhapd0vnhkgiiF"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
                id="inline-GUqiHvrhapd0vnhkgiiF"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Free Class Form (live on new website)"
                data-height="916"
                data-layout-iframe-id="inline-GUqiHvrhapd0vnhkgiiF"
                data-form-id="GUqiHvrhapd0vnhkgiiF"
                title="Free Class Form (live on new website)"
              ></iframe>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-500 pl-6">
                <p className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">PHONE</p>
                <a
                  href={`tel:${contactContent.info.phone}`}
                  className="text-body-lg text-white hover:text-brand-500 transition-colors"
                >
                  {contactContent.info.phone}
                </a>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <p className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">EMAIL</p>
                <a
                  href={`mailto:${contactContent.info.email}`}
                  className="text-body-lg text-white hover:text-brand-500 transition-colors"
                >
                  {contactContent.info.email}
                </a>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <p className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">ADDRESS</p>
                <p className="text-body-lg text-white">{contactContent.info.location}</p>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <p className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">HOURS</p>
                <p className="text-body-lg text-white">{contactContent.info.hours}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Script src="https://link.localbestgyms.com/js/form_embed.js" strategy="lazyOnload" />

      {/* Map */}
      <section className="bg-navy-950 py-10">
        <Container>
          <div className="rounded-xl overflow-hidden" style={{ height: "420px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97561.234!2d-79.9535!3d40.5601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.0!3m3!1m2!1s0x8834934cb27dcbc9%3A0x5da8f83efafe76cf!2s4361%20William%20Flinn%20Hwy%2C%20Allison%20Park%2C%20PA%2015101!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Full Circle Function &amp; Fitness location"
            ></iframe>
          </div>
        </Container>
      </section>
    </div>
  );
}
