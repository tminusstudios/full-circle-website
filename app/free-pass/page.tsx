import type { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Claim Your Free Pass",
  description:
    "Try a free personal training or massage therapy session at Full Circle Function & Fitness in Pittsburgh. No commitment required.",
  alternates: {
    canonical: "/free-pass",
  },
};

export default function FreePassPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-navy-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-brand-500 font-bold mb-4">
              Limited Availability
            </p>
            <h1 className="text-h1 text-white mb-6">
              Claim Your Free Pass
            </h1>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              Not sure where to start? Come in and experience what Full Circle Function &amp; Fitness is all about — completely free, no strings attached. One session with our team is all it takes to see the difference a personalized approach makes.
            </p>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-steel-900">
        <Container>
          <h2 className="text-h2 text-white text-center mb-12">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200/20 bg-navy-900 p-8">
              <div className="w-10 h-1 bg-brand-500 mb-6"></div>
              <h3 className="text-h3 text-white mb-3">Movement Assessment</h3>
              <p className="text-body text-gray-300 leading-relaxed">
                A thorough evaluation of how you move so we can identify your specific needs and build your program around them.
              </p>
            </div>
            <div className="border border-gray-200/20 bg-navy-900 p-8">
              <div className="w-10 h-1 bg-brand-500 mb-6"></div>
              <h3 className="text-h3 text-white mb-3">Personalized Session</h3>
              <p className="text-body text-gray-300 leading-relaxed">
                60 minutes of one-on-one coaching tailored to your goals — whether that&apos;s strength, pain management, or overall fitness.
              </p>
            </div>
            <div className="border border-gray-200/20 bg-navy-900 p-8">
              <div className="w-10 h-1 bg-brand-500 mb-6"></div>
              <h3 className="text-h3 text-white mb-3">Your Game Plan</h3>
              <p className="text-body text-gray-300 leading-relaxed">
                Walk away with a clear understanding of what it takes to reach your goals and how Full Circle can help you get there.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-navy-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 text-white mb-8">Who Is This For?</h2>
            <div className="space-y-4">
              {[
                "Anyone dealing with chronic pain or injury who wants to move and feel better",
                "People who are new to strength training and want expert guidance from day one",
                "Athletes looking to take their performance to the next level",
                "Anyone who's tried generic programs and hasn't seen results",
                "People who just want to feel stronger, healthier, and more confident",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5 flex-shrink-0"></div>
                  <p className="text-body-lg text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Claim Free Pass Form */}
      <section className="section-padding bg-navy-900">
        <Container>
          <h2 className="text-h2 text-white text-center mb-4">Claim Your Free Pass</h2>
          <p className="text-body-lg text-gray-300 text-center mb-10">
            Or call us at <a href="tel:4122957058" className="text-brand-500 font-bold hover:text-brand-400 transition-colors">412-295-7058</a>
          </p>
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
    </div>
  );
}
