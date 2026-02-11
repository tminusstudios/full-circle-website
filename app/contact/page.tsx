import type { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/layout/Container";
import { contactContent } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Full Circle Function & Fitness in Pittsburgh. Schedule a consultation or ask us your questions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="section-padding bg-navy-950">
        <Container>
          <h1 className="text-h1 text-white text-center mb-6">
            {contactContent.title}
          </h1>
          <p className="text-body-lg text-gray-300 text-center max-w-2xl mx-auto">
            {contactContent.description}
          </p>
        </Container>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-steel-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">PHONE</h3>
                <a
                  href={`tel:${contactContent.info.phone}`}
                  className="text-body-lg text-white hover:text-brand-500 transition-colors"
                >
                  {contactContent.info.phone}
                </a>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">EMAIL</h3>
                <a
                  href={`mailto:${contactContent.info.email}`}
                  className="text-body-lg text-white hover:text-brand-500 transition-colors"
                >
                  {contactContent.info.email}
                </a>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">ADDRESS</h3>
                <p className="text-body-lg text-white">{contactContent.info.location}</p>
              </div>

              <div className="border-l-4 border-brand-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-brand-500 font-bold mb-2">HOURS</h3>
                <p className="text-body-lg text-white">{contactContent.info.hours}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* GoHighLevel Form */}
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

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.3529!2d-79.9535!3d40.5601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834934cb27dcbc9%3A0x5da8f83efafe76cf!2s4361%20William%20Flinn%20Hwy%2C%20Allison%20Park%2C%20PA%2015101!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Full Circle Function &amp; Fitness location"
        ></iframe>
      </section>
    </div>
  );
}
