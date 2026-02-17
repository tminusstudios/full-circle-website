import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { faqs } from "@/lib/content/homepage";

export const metadata: Metadata = {
  title: "Personal Training in Allison Park & Pittsburgh North Hills",
  description:
    "Private and semi-private personal training starting at $52/session in Allison Park, PA. Customized strength training programs for all fitness levels. 4.9 stars on Google.",
  alternates: {
    canonical: "https://fullcirclefunctionandfitness.com/personal-training",
  },
};

const ptWhatsIncluded = [
  "Warmup and Workout",
  "Monthly Programming",
  "Exercise instruction designed to teach proper movement that will be applied during workouts and in daily life",
  "Video and text exercise instruction for at home workouts",
  "If pain or injury is present at home exercises will be given to help ease pain",
];

const ptPricing = [
  { label: "One on One", price: "$69.00", badge: null },
  { label: "Partner Session", price: "$149.00", badge: null },
  { label: "Semi-Private (1–4 People)", price: "$52.00", badge: "Best Value" },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
        <Image
          src="/images/hero-personal-training.webp"
          alt="Personal training session at Full Circle Function & Fitness in Allison Park, PA"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10, 22, 40, 0.4) 0%, rgba(10, 22, 40, 0.7) 50%, rgba(10, 22, 40, 1) 100%)" }}
        />
        <div className="relative z-10 section-padding">
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
        </div>
      </section>

      {/* ── BLOCK 1: WHO WE HELP ──────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-10 h-10 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-h2 text-white mb-6">Who We Help</h2>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              Our personal training services are tailored toward busy professionals and those with families that need guidance on prioritizing their health and wellness. In a life that never stops, it becomes challenging to focus on your own health when you are constantly focused on everyone around you.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 2: THE PROBLEM WE SOLVE ────────────────── */}
      <section className="py-24 bg-steel-900">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-6">The Problem We Solve</h2>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              We create time for you. Time for you to prioritize yourself and your health and wellness. We teach you how to move and feel your body again. Most people have lost all sense of touch with their bodies and as we age, keeping that body strong, healthy, and awake are the keys to lifelong health.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 3: WHY NOW ─────────────────────────────── */}
      <section className="py-24 bg-navy-900 border-t-2 border-brand-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-12">Why Now</h2>

            {/* Stats row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
              <div>
                <p className="text-5xl md:text-6xl font-black text-brand-500 leading-none mb-2">78</p>
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold">Average U.S. Lifespan</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-black text-brand-500 leading-none mb-2">$330K</p>
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold">Avg. Retired Healthcare Spend</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-black text-brand-500 leading-none mb-2">39</p>
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold">Age You&apos;re Considered Middle-Aged</p>
              </div>
            </div>

            <p className="text-body-lg text-gray-300 leading-relaxed">
              So you can THRIVE, not just survive. As a whole, our population&apos;s health is ATROCIOUS, with an expected lifespan of only 78 years old and an average retired health care spend of $330,000, you are considered middle aged at 39 and you better start saving now for all those health care expenses. Let that sink in. That lifespan (that continues to shrink) and extremely high health care cost is caused by a population who doesn&apos;t have strong and consistent healthy lifestyle habits. Learning how to fuel and move your body while making it strong and resilient is the key to thriving throughout your life.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 4: WHAT TO EXPECT ──────────────────────── */}
      <section className="py-24 bg-navy-950">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-h2 text-white text-center mb-14">What to Expect</h2>

            {/* Timeline */}
            <ol className="relative">
              {[
                "The first thing we focus on is teaching you how to move correctly. When someone has been so out of touch with their body for so long, this can be a daunting and frustrating task. With the care and attention of our coaches, we make that process easy for you.",
                "Teaching your body how to move correctly starts with a warm up that flows seamless into the workout.",
                "You will be challenged to push yourself and progress each and every session you attend.",
                "With excellent communication between you and your coach, we will work around existing pain points and old injuries that may seem to flare up every time you try to exercise.",
                "You'll leave feeling energetic, strong, and happy to have the ability to exercise!",
              ].map((step, i) => (
                <li key={i} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Connecting line */}
                  {i < 4 && (
                    <div className="absolute left-4 top-9 bottom-0 w-px bg-gray-200/15" />
                  )}
                  {/* Step circle */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/15 border border-brand-500/50 flex items-center justify-center z-10">
                    <span className="text-xs font-black text-brand-500">{i + 1}</span>
                  </div>
                  {/* Step content */}
                  <p className="text-body-lg text-gray-300 leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <section className="py-24 bg-steel-900">
        <Container>
          <h2 className="text-h2 text-white mb-2">Personal Training Pricing</h2>
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
              <a href="/contact" className="hero-cta">
                BOOK A FREE CONSULTATION
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section-padding bg-navy-950">
        <Container>
          <h2 className="text-h2 text-center text-white mb-12">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200/20 bg-navy-900 p-6">
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

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-steel-900">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 text-white mb-8">Ready to Start?</h2>
            <a href="/contact" className="hero-cta">
              BOOK A FREE CONSULTATION
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
}
