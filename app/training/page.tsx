import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Expert personal training in Pittsburgh. Structured programming designed for measurable results — one on one, partner, and semi-private sessions available.",
  alternates: {
    canonical: "/training",
  },
};

const ptWhatsIncluded = [
  "Warmup and Workout",
  "Monthly Programming",
  "Exercise instruction designed to teach proper movement that will be applied during workouts and in daily life",
  "Video and text exercise instruction for at home workouts",
  "If pain or injury is present performance movement training exercises will be given",
  "Choose a drink (water, coffee, Gatorade) and a snack",
];

const ptPricing = [
  { label: "One on One", price: "$79.00", badge: null },
  { label: "Partner Session", price: "$149.00", badge: null },
  { label: "Semi-Private (1–4 People)", price: "$52.00", badge: "Best Value" },
];

const pmtWhatsIncluded = [
  "Performance Movement Screen used to check for strength and mobility imbalances that may lead to pain or decrease in athletic performance",
  "Performance Movement exercise prescription based on results of the assessment. This will be geared towards reducing pain, restoring overall movement function, and increasing exercise performance",
  "Regional Massage Therapy used to reduce pain and improve mobility",
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section-padding bg-navy-950">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 text-white mb-4">Personal Training</h1>
            <div className="mb-8">
              <span
                className="hero-subheadline text-2xl md:text-3xl text-gray-200 font-normal"
                style={{ letterSpacing: "0.02em", lineHeight: 1.45 }}
              >
                Get Strong. Move Well. Live Better.
              </span>
            </div>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              Our clients come from various lifestyle backgrounds with a common goal in mind; living better. Following a thorough fitness and movement assessment, we are able to personalize every session to fit your exact needs. Our goal for each client is to build strength and increase movement competency all while keeping you pain and injury free. Combining the goals you want to achieve with our company&apos;s vision will ensure you start living your best life!
            </p>
          </div>
        </Container>
      </section>

      {/* ── PERSONAL TRAINING ────────────────────────────── */}
      <section className="section-padding bg-steel-900">
        <Container>
          <h2 className="text-h2 text-white mb-2">Personal Training</h2>
          <p className="text-sm uppercase tracking-widest text-brand-500 font-bold mb-12">
            60–75 Minute Personal Training Session
          </p>

          {/* What's Included */}
          <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-6">
            What&apos;s Included
          </h3>
          <ul className="space-y-4 max-w-3xl mb-16">
            {ptWhatsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-body-lg text-gray-300 leading-snug">{item}</p>
              </li>
            ))}
          </ul>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-10">
            {ptPricing.map((tier) => (
              <div
                key={tier.label}
                className={`
                  relative flex flex-col p-8
                  border transition-all duration-200
                  hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                  ${tier.badge
                    ? "bg-navy-800 border-brand-500/60 hover:border-brand-500"
                    : "bg-navy-900 border-gray-200/15 hover:border-gray-200/30"
                  }
                `}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">
                  {tier.label}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">As Low As</p>
                <div className="flex items-end gap-1.5">
                  <p className="text-4xl font-black text-white leading-none">{tier.price}</p>
                  <p className="text-sm text-gray-400 mb-0.5">/session</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact + CTA */}
          <div className="space-y-6">
            <p className="text-body text-gray-300">
              Contact Cody at{" "}
              <a
                href="mailto:cody@fullcirclefunctionandfitness.com"
                className="text-brand-500 font-semibold hover:text-brand-400 transition-colors"
              >
                cody@fullcirclefunctionandfitness.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:4122957058"
                className="text-brand-500 font-semibold hover:text-brand-400 transition-colors"
              >
                412-295-7058
              </a>{" "}
              to learn more
            </p>
            <div>
              <a href="/free-pass" className="hero-cta">
                CLAIM FREE PASS
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── ACCENT DIVIDER ───────────────────────────────── */}
      <div className="bg-navy-950 py-10">
        <Container>
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200/10" />
            <div className="h-px w-16 bg-brand-500" />
            <div className="h-px flex-1 bg-gray-200/10" />
          </div>
        </Container>
      </div>

      {/* ── PERFORMANCE MOVEMENT TRAINING ────────────────── */}
      <section className="section-padding bg-navy-950">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-h2 text-white mb-8">
              Performance Movement Training &amp; Pain Management
            </h2>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              Customized programming geared towards improving overall movement which will help reduce pain, decrease the chance of injury, and improve athletic performance.
            </p>
          </div>

          {/* What's Included */}
          <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-6">
            What&apos;s Included
          </h3>
          <ul className="space-y-4 max-w-3xl mb-16">
            {pmtWhatsIncluded.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <svg
                  className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-body-lg text-gray-300 leading-snug">{item}</p>
              </li>
            ))}
          </ul>

          {/* Single Pricing Card */}
          <div className="mb-10">
            <div className="inline-flex flex-col p-8 bg-navy-800 border border-brand-500/60 hover:border-brand-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-200">
              <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">
                Session Rate
              </p>
              <p className="text-5xl font-black text-white">$129.00</p>
            </div>
          </div>

          {/* Contact + CTA */}
          <div className="space-y-6">
            <p className="text-body text-gray-300">
              Contact Cody at{" "}
              <a
                href="mailto:cody@fullcirclefunctionandfitness.com"
                className="text-brand-500 font-semibold hover:text-brand-400 transition-colors"
              >
                cody@fullcirclefunctionandfitness.com
              </a>{" "}
              to learn more
            </p>
            <div>
              <a href="/free-pass" className="hero-cta">
                CLAIM FREE PASS
              </a>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
