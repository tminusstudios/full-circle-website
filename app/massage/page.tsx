import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Massage Therapy",
  description:
    "Swedish, sports, deep tissue, and myofascial release massage therapy in Pittsburgh. Offered in 60, 90, and 120 minute sessions. Structural bodywork also available.",
  alternates: {
    canonical: "/massage",
  },
};

const massagePricing = [
  { duration: "60 Minute", price: "$100", recommended: false },
  { duration: "90 Minute", price: "$145", recommended: true },
  { duration: "120 Minute", price: "$190", recommended: false },
];

const structuralPricing = [
  {
    label: "Single Session",
    price: "$159",
    sub: "per session",
    badge: null,
    note: null,
  },
  {
    label: "4 Session Pack",
    price: "$147.50",
    sub: "per session",
    badge: null,
    note: "Save $46",
  },
  {
    label: "8 Session Pack",
    price: "$137.50",
    sub: "per session",
    badge: "Best Value",
    note: "Save $172",
  },
];

const whatToExpect = [
  "Static postural assessment & Explanation of findings",
  "Detailed plan of session and goals",
  "Bodywork specific to your assessment",
  "Take home exercises to integrate the work and positions taught in real world posture!",
  "Session time is 75 minutes",
];

export default function MassagePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section-padding bg-navy-950">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-h1 text-white mb-6">Massage Therapy</h1>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              We offer Swedish, Sports, Neuromuscular Therapy (Deep Tissue) Massage and Myofascial Release Massage. It is recommended to book for a 90 or 120 min. This time frame allows for a thorough full body session while also giving attention to troublesome areas.
            </p>
          </div>
        </Container>
      </section>

      {/* ── MASSAGE PRICING ──────────────────────────────── */}
      <section className="section-padding bg-steel-900">
        <Container>
          <h2 className="text-h2 text-white mb-12">Massage Therapy Pricing</h2>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-10">
            {massagePricing.map((tier) => (
              <div
                key={tier.duration}
                className={`
                  relative flex flex-col p-8
                  border transition-all duration-200
                  hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                  ${tier.recommended
                    ? "bg-navy-800 border-brand-500/60 hover:border-brand-500"
                    : "bg-navy-900 border-gray-200/15 hover:border-gray-200/30"
                  }
                `}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                      Recommended
                    </span>
                  </div>
                )}
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">
                  {tier.duration}
                </p>
                <p className="text-5xl font-black text-white">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>

          {/* Membership Note */}
          <div className="max-w-4xl border-l-4 border-brand-500/50 bg-navy-900/60 pl-6 py-4 pr-6 mb-8">
            <p className="text-body text-gray-300 leading-relaxed">
              <span className="text-white font-bold">10% Discount Available for Massage Membership</span> — Monthly autopayment, 1 massage per month. Subsequent massages in the month will be charged at the membership price.
            </p>
          </div>

          {/* Schedule CTA */}
          <p className="text-body text-gray-300">
            Please email{" "}
            <a
              href="mailto:becca@fullcirclefunctionandfitness.com"
              className="text-brand-500 font-semibold hover:text-brand-400 transition-colors"
            >
              becca@fullcirclefunctionandfitness.com
            </a>{" "}
            to schedule.
          </p>
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

      {/* ── STRUCTURAL BODYWORK ──────────────────────────── */}
      <section className="section-padding bg-navy-950">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-h2 text-white mb-8">Structural Bodywork</h2>
            <p className="text-body-lg text-gray-300 leading-relaxed mb-12">
              This type of bodywork is designed to bring a sense of balance and ease to your posture. In a series of sessions, we will work through the various layers of myofascia (tissue that surrounds, infuses, and connects your muscles) to help unwind imbalances and compensation patterns. Through visual assessment, hands on bodywork (primarily myofascial release), and take home exercises, you can reduce the tension and pain caused by the imbalances that we find giving yourself the opportunity to both feel and develop a more balanced posture.
            </p>

            {/* What to Expect */}
            <h3 className="text-sm uppercase tracking-widest text-brand-500 font-bold mb-6">
              What to Expect
            </h3>
            <ul className="space-y-4">
              {whatToExpect.map((item, i) => (
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
          </div>
        </Container>
      </section>

      {/* ── STRUCTURAL PRICING ───────────────────────────── */}
      <section className="section-padding bg-steel-900">
        <Container>
          <h2 className="text-h2 text-white mb-12">Structural Bodywork Pricing</h2>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mb-10">
            {structuralPricing.map((tier) => (
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
                <div className="flex items-end gap-2 mb-2">
                  <p className="text-5xl font-black text-white leading-none">
                    {tier.price}
                  </p>
                  {tier.sub && (
                    <p className="text-sm text-gray-400 mb-1">{tier.sub}</p>
                  )}
                </div>
                {tier.note && (
                  <p className="text-sm text-brand-500 font-semibold mt-2">{tier.note}</p>
                )}
              </div>
            ))}
          </div>

          {/* Schedule CTA */}
          <p className="text-body text-gray-300">
            Please email{" "}
            <a
              href="mailto:becca@fullcirclefunctionandfitness.com"
              className="text-brand-500 font-semibold hover:text-brand-400 transition-colors"
            >
              becca@fullcirclefunctionandfitness.com
            </a>{" "}
            to schedule.
          </p>
        </Container>
      </section>

    </div>
  );
}
