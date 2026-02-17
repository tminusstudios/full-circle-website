import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Private Yoga Classes in Allison Park & Pittsburgh North Hills",
  description:
    "Private Forrest Yoga sessions for 1-2 people in Allison Park, PA. Tailored to beginners and experienced yogis. $90-$100 per session.",
  alternates: {
    canonical: "https://fullcirclefunctionandfitness.com/yoga",
  },
};

export default function YogaPage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
        <Image
          src="/images/hero-yoga.webp"
          alt="Private yoga session at Full Circle Function & Fitness in Allison Park, PA"
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
              <h1 className="text-h1 text-white mb-4">Private Yoga Class</h1>
              <div className="mb-8">
                <span
                  className="hero-subheadline text-2xl md:text-3xl text-gray-200 font-normal"
                  style={{ letterSpacing: "0.02em", lineHeight: 1.45 }}
                >
                  Movement. Breath. Awareness.
                </span>
              </div>
              <p className="text-body-lg text-gray-300 leading-relaxed">
                We offer private yoga sessions (1–2 students) where the practice is tailored to your goals and interest in yoga. The style is primarily rooted in Forrest Yoga with influences from other styles and other types of movement practices.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────── */}
      <section className="py-24 bg-steel-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <blockquote className="border-l-4 border-brand-500 pl-8">
              <p className="text-2xl md:text-3xl text-white font-normal leading-relaxed italic mb-6">
                &ldquo;Forrest Yoga does not require strength or flexibility; it only requires a willingness to learn how to feel authentically and respond honestly. The practice is founded on four pillars: Breath, Strength, Integrity, and Spirit.&rdquo;
              </p>
              <cite className="text-sm uppercase tracking-widest text-brand-500 font-bold not-italic">
                &mdash; Ana Forrest
              </cite>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ── ABOUT THE PRACTICE ───────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-body-lg text-gray-300 leading-relaxed">
              The practice of yoga can be very specific or all encompassing. Yoga can provide fun and exciting physical challenges while also increasing your awareness of how you move, think, respond, feel. Private yoga sessions include awareness practices, breath work, and physical poses and movements.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 1: WHO IS THIS FOR? ────────────────────── */}
      <section className="py-24 bg-steel-900">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon — lotus/meditation */}
            <div className="flex justify-center mb-6">
              <svg className="w-10 h-10 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5 8.4-9 9 3 .6 6 2.4 9 6 3-3.6 6-5.4 9-6-4-.6-7.8-3.6-9-9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
              </svg>
            </div>
            <h2 className="text-h2 text-white mb-6">Who Is This For?</h2>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              Anybody looking for one-on-one direction in their yoga practice, whether you are just beginning your practice for the first time or you&apos;re a veteran yogi. Some are looking to develop a long term, weekly practice with the teacher. Some only need 1&ndash;3 sessions to address questions they have about their established practice. And others, yet, want semi-regular sessions to support their home practice.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 2: WHAT WE SOLVE ───────────────────────── */}
      <section className="py-24 bg-navy-950">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-12">What We Solve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

              {/* General Wellness */}
              <div className="flex flex-col items-center gap-4 p-6 bg-navy-900 border border-gray-200/15">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-sm uppercase tracking-widest text-white font-bold text-center leading-snug">General Wellness &amp; Movement</p>
              </div>

              {/* Stress Reduction */}
              <div className="flex flex-col items-center gap-4 p-6 bg-navy-900 border border-gray-200/15">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <p className="text-sm uppercase tracking-widest text-white font-bold text-center leading-snug">Stress Reduction &amp; Mindfulness</p>
              </div>

              {/* Pain Relief */}
              <div className="flex flex-col items-center gap-4 p-6 bg-navy-900 border border-gray-200/15">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <p className="text-sm uppercase tracking-widest text-white font-bold text-center leading-snug">Physical Tension &amp; Pain Relief</p>
              </div>

              {/* Support for Practice */}
              <div className="flex flex-col items-center gap-4 p-6 bg-navy-900 border border-gray-200/15">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <p className="text-sm uppercase tracking-widest text-white font-bold text-center leading-snug">Support for Your Practice</p>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 3: WHY YOGA? ───────────────────────────── */}
      <section className="py-24 bg-navy-900 border-t-2 border-brand-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-8">Why Yoga?</h2>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              We live in a modern world with highly developed brains based in ancient biology. Our fast paced lives that are lived mostly in our heads means we lose connection to the rest of our body and its inherent intelligence. Most people find there are parts of their body that they never truly feel or notice unless there is a reason such as pain. A yoga practice can give you the chance to slow down and get back INTO your body, back into feeling.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 4: WHAT TO EXPECT ──────────────────────── */}
      <section className="py-24 bg-navy-950">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-h2 text-white text-center mb-14">What to Expect</h2>
            <ol className="relative">
              {[
                "Expect direct cues, clear demos, and intelligent sequencing. To make sure this practice is accessible to anybody who is interested, modifications, props, and specially tailored sequences are used in private sessions.",
                "Breath and intent setting are used to foster a practice of self inquiry and personal growth along with physical poses and movements to help strengthen the mind-body connection, develop mobility, and increase balance and strength. We may rely on one of these elements more than the others depending on your reasons for seeking out private yoga sessions.",
                "Sessions typically occur once weekly and vary each week, again depending on your goals.",
              ].map((step, i) => (
                <li key={i} className="relative flex gap-6 pb-10 last:pb-0">
                  {i < 2 && (
                    <div className="absolute left-4 top-9 bottom-0 w-px bg-gray-200/15" />
                  )}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/15 border border-brand-500/50 flex items-center justify-center z-10">
                    <span className="text-xs font-black text-brand-500">{i + 1}</span>
                  </div>
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
          <h2 className="text-h2 text-white mb-2">Private Yoga Pricing</h2>
          <p className="text-sm uppercase tracking-widest text-brand-500 font-bold mb-12">
            60 Minute Session &middot; 1–2 People
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mb-10">

            {/* Single Session */}
            <div className="relative flex flex-col p-8 border border-gray-200/15 bg-navy-900 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:border-gray-200/30">
              <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Single Session</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Per Session</p>
              <div className="flex items-end gap-1.5">
                <p className="text-4xl font-black text-white leading-none">$100</p>
                <p className="text-sm text-gray-400 mb-0.5">/session</p>
              </div>
            </div>

            {/* Recurring / Package */}
            <div className="relative flex flex-col p-8 border border-brand-500/60 bg-navy-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:border-brand-500">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-brand-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                  Save 10%
                </span>
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Recurring / Package</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Per Session</p>
              <div className="flex items-end gap-1.5 mb-3">
                <p className="text-4xl font-black text-white leading-none">$90</p>
                <p className="text-sm text-gray-400 mb-0.5">/session</p>
              </div>
              <p className="text-xs text-gray-500 leading-snug">Purchased as a recurring monthly membership or 3 session package</p>
            </div>

          </div>

          <p className="text-body text-gray-300">
            Contact Becca at{" "}
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

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section-padding bg-navy-950">
        <Container>
          <h2 className="text-h2 text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "What should I wear?",
                a: "Comfortable, breathable clothing that you can move in. Be careful of overly baggy/draped clothing.",
              },
              {
                q: "What do I need to bring?",
                a: "Just you! We have mats, blocks, blankets, and straps. But you can also bring your own personal mat or props that you like to use. A bottle of water is also a good idea.",
              },
              {
                q: "I'm not flexible, stiff as a board! Can I still do yoga?",
                a: "Absolutely! Each position or movement will be done at a level that makes sense for your body at that moment.",
              },
              {
                q: "How long are sessions?",
                a: "Sessions are 60 minutes long. A sequence is prepared ahead of time, but a short discussion is had at the beginning to make sure nothing needs to be adjusted that day. The first session or couple sessions may require more communication throughout. If possible, a conversation will be held prior to the first session to prepare ahead of time.",
              },
              {
                q: "How long do people usually do private yoga sessions for?",
                a: "This depends on your reason for starting. Some will prefer the structure and direction of private yoga and opt to do this for as long as possible (based on time, finances, life situation). They'll likely meet once a week and supplement their practice with other yoga sources (group classes, online content, meditation) or other movement practices (weight training, pilates, cycling). Others may only do a handful of sessions to support a developing or already established yoga practice.",
              },
              {
                q: "Is there an age limit?",
                a: "Not technically, no. However, those under 18 must be accompanied by a parent or guardian. AND be aware that those under a certain maturity level (probably young adult level) may find it boring or difficult to focus on a yoga practice for a full hour.",
              },
              {
                q: "Can I do this with a partner?",
                a: "Yes! Our private sessions can be single or partner sessions, same price. No more than two participants, please.",
              },
              {
                q: "Will this make me sore?",
                a: "It can. Any movement practice will likely introduce you to new movement patterns and muscle usage which can cause some soreness the next day. Injury is possible with any movement practice, but unlikely if you communicate when something isn't working for you and causing pain.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200/20 bg-navy-900 p-6">
                <h3 className="text-body-lg text-white font-bold mb-3">{faq.q}</h3>
                <p className="text-body text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 text-white mb-8">Ready to Begin?</h2>
            <a href="/contact" className="hero-cta">
              BOOK A SESSION
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
}
