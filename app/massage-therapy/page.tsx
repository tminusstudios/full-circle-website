import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Massage Therapy in Allison Park & Pittsburgh North Hills",
  description:
    "Licensed massage therapy in Allison Park, PA. Swedish, neuromuscular, myofascial release, and pregnancy massage. 60, 90, and 120 minute sessions available.",
  alternates: {
    canonical: "https://fullcirclefunctionandfitness.com/massage-therapy",
  },
};

const massageTypes = [
  {
    title: "Swedish Massage",
    description:
      "A classic full-body massage using long, flowing strokes to promote relaxation, ease muscle tension, and improve circulation. Ideal for stress relief and general well-being.",
  },
  {
    title: "Neuromuscular Therapy",
    description:
      "Also known as deep tissue massage, this technique targets chronic muscle tension, trigger points, and referred pain patterns to address the root cause of discomfort.",
  },
  {
    title: "Myofascial Release",
    description:
      "Sustained pressure applied to the myofascial connective tissue to release restrictions, reduce compensation patterns, and improve posture and range of motion.",
  },
  {
    title: "Pregnancy Massage",
    description:
      "Safe, supportive massage designed for expecting mothers to ease the discomforts of pregnancy — including back pain, swelling, and fatigue. Available after the first trimester.",
  },
];

const massagePricing = [
  { duration: "60 Minute", price: "$100", recommended: false },
  { duration: "90 Minute", price: "$145", recommended: true },
  { duration: "120 Minute", price: "$190", recommended: false },
];


export default function MassagePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "65vh" }}>
        <Image
          src="/images/hero-massage-therapy.webp"
          alt="Massage therapy session at Full Circle Function & Fitness in Allison Park, PA"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAEAAQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDJoooqhH//2Q=="
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10, 22, 40, 0.4) 0%, rgba(10, 22, 40, 0.7) 50%, rgba(10, 22, 40, 1) 100%)" }}
        />
        <div className="relative z-10 section-padding">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-h1 text-white mb-4">Massage Therapy</h1>
              <div className="mb-8">
                <span
                  className="hero-subheadline text-2xl md:text-3xl text-gray-200 font-normal"
                  style={{ letterSpacing: "0.02em", lineHeight: 1.45 }}
                >
                  Heal. Restore. Feel Better.
                </span>
              </div>
              <p className="text-body-lg text-gray-300 leading-relaxed">
                We offer Swedish, Neuromuscular Therapy (Deep Tissue), Myofascial Release, and Pregnancy Massage. It is recommended to book for a 90 or 120 minute session. This time frame allows for a thorough full body session while also giving attention to troublesome areas.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ── MASSAGE TYPES ────────────────────────────────── */}
      <section className="section-padding bg-steel-900">
        <Container>
          <h2 className="text-h2 text-white mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {massageTypes.map((type) => (
              <div
                key={type.title}
                className="block overflow-hidden border border-gray-200/20 transition-all duration-200 hover:border-brand-500"
              >
                <div className="p-6 bg-navy-900">
                  <h3 className="text-h3 text-white uppercase tracking-tight font-black mb-4">
                    {type.title}
                  </h3>
                  <p className="text-body text-gray-300 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BLOCK 1: WHO IS THIS FOR? ────────────────────── */}
      <section className="py-24 bg-navy-950">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <svg className="w-10 h-10 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h2 className="text-h2 text-white mb-6">Who Is This For?</h2>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              Massage Therapy is for anybody with a body, so... everybody! It&apos;s great for those who are looking to feel better, physically and mentally, whether it&apos;s due to injury, daily activities, stress, or even regular exercise and athletics.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 2: WHAT WE SOLVE ───────────────────────── */}
      <section className="py-24 bg-steel-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-12">What We Solve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

              {/* Pain Relief */}
              <div className="flex flex-col items-center gap-4 p-6 bg-navy-900 border border-gray-200/15">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm uppercase tracking-widest text-white font-bold text-center leading-snug">Pain Relief &amp; Management</p>
              </div>

              {/* Stress Relief */}
              <div className="flex flex-col items-center gap-4 p-6 bg-navy-900 border border-gray-200/15">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <p className="text-sm uppercase tracking-widest text-white font-bold text-center leading-snug">Stress &amp; Tension Relief</p>
              </div>

              {/* Body Awareness */}
              <div className="flex flex-col items-center gap-4 p-6 bg-navy-900 border border-gray-200/15">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm uppercase tracking-widest text-white font-bold text-center leading-snug">Increased Body Awareness</p>
              </div>

              {/* Athletic Recovery */}
              <div className="flex flex-col items-center gap-4 p-6 bg-navy-900 border border-gray-200/15">
                <svg className="w-8 h-8 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <p className="text-sm uppercase tracking-widest text-white font-bold text-center leading-snug">Exercise &amp; Athletic Recovery</p>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ── BLOCK 3: WHY MASSAGE? ─────────────────────────── */}
      <section className="py-24 bg-navy-900 border-t-2 border-brand-500/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-8">Why Massage?</h2>
            <p className="text-body-lg text-gray-300 leading-relaxed">
              Because you deserve to feel good in your body! Managing your stress, pain, and keeping your body supple and ready to do the next thing means you get to live your life more comfortably and more fully! We commonly go through life creating physical patterns related to posture (sitting, standing, sleeping), daily activities, and how we react to stress. These patterns can cause tension, discomfort, and eventually pain. Add to that &mdash; injuries, surgeries, athletic events, life events (hello, pregnancy for just one example)...Everybody could use a little help now and then. Massage therapy is one way to mitigate some of the harder parts of life, so you can focus more on the joyous part of life.
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
                "At each session, we will discuss how you are feeling and what you are looking to get out of your massage that day before you get on the table. The massage and techniques used will be based on what you need and want.",
                "On the table, you can expect to receive informed and intuitive hands on work that can be adjusted as needed throughout the session. Hypoallergenic products are used with options for a warmed table and light aromatherapy alongside relaxing music.",
                "Expect to feel better at the end of your session — less pain, freer movement, relaxed!",
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


      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section-padding bg-navy-950">
        <Container>
          <h2 className="text-h2 text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Should I shower before or after the session? Am I going to get all oily?",
                a: "Showering before as close to your session time is best. Clean skin allows for easier glide and manipulation of the musculature. Sweat and dirt can inhibit this and cause a less satisfactory session. Lotion or oil will be used. For some, it gets soaked up and you just feel moisturized. For others, you may feel greasy after. Showering after is up to you!",
              },
              {
                q: "Are you going to touch my ____ (butt, feet, thighs, etc)?",
                a: "Depends! We can skip any part of your body you don't want touched or worked on for any reason. A typical full body massage includes: head (scalp and face), neck, shoulders, arms, hands, feet, legs, glutes (butt), back, with the option of abdominal massage. We always respect requests to avoid any areas.",
              },
              {
                q: "What about my hair? Will it get greasy?",
                a: "It might. Scalp massage does not require lotion/oil, but can still release natural oils into your hair. Neck massage does typically require lotion/oil and a small amount does get into hair closest to it. Be prepared to either wash your hair after, style your hair in an inconspicuous way, or just leave it be however it ends up! You can request caution to be used around your hair, and some steps can be taken to minimize any issues. The only guarantee is to skip the head and neck massage for that day, not recommended if you can help it!",
              },
              {
                q: "Do I have to take my underwear off?",
                a: "No. The amount of clothing you take off is up to you. Note: Direct contact with your skin is important to receiving the full benefits of massage, so it is best to undress the amount necessary to massage the areas of the body we are going to work on.",
              },
              {
                q: "OK, so what does that actually mean in terms of getting undressed?",
                a: "Most importantly, please understand that you are given privacy to undress before the session and dress after the session. During the session, you will be covered by a sheet and blanket. Only the part of you being worked on is uncovered. The 'bathing suit' regions of your body are ALWAYS covered. For a full body session (head, neck, shoulders, upper chest, hands and arms, optional abdominal, feet and legs, glutes, back) — best to remove all clothing. If underwear remains on, glute work will be done over the sheet and leg work will be performed up to the border of the underwear. For a focused session (work only on a portion of the body) — best to remove the clothing that would be in the way of this work. This can be discussed at the time of the session.",
              },
              {
                q: "Are there any exceptions to getting undressed for a session?",
                a: "Of course. If you are signed up for a Structural Bodywork session, then you should bring or wear a specific type of clothing to be worn during the session as sheets and blankets are not used. Think bathing suit coverage, something that allows the most access to the body as possible. For females, non-revealing bottoms and bra tops that allow as much access to the body as possible. For males, non-revealing bottoms like shorts with legs that can be adjusted.",
              },
              {
                q: "Body concerns?",
                a: "We don't care about your body hair, weight, skin conditions, scars, stretch marks, etc.",
              },
              {
                q: "Is massage supposed to hurt? No pain, no gain?",
                a: "No. Discomfort or a 'hurts so good' feeling is totally fine and is common if you are getting a problem area worked on. However, you do not need to be in pain during a session. You should still be able to breathe and unclench if you tense up. Please speak up if sensation moves past a manageable discomfort into pain.",
              },
              {
                q: "Am I supposed to stay quiet or hold a conversation?",
                a: "This is your time. Feel free to be totally silent, outside of necessary communication about the session. It is not your job to entertain our Massage Therapist. If you feel more comfortable talking, this is also typically okay, just understand that the quality of conversation may go down when the MT needs to use more focus on what they are doing.",
              },
              {
                q: "What if I fall asleep? Snore?",
                a: "No worries... it happens... kind of a lot. We take it as a compliment that you can feel so comfortable on our table that you're able to rest that fully!",
              },
              {
                q: "What if I'm sick?",
                a: "It is best to cancel as soon as you know. Massage Therapy is a very close contact interaction for 60+ minutes. If the Massage Therapist gets sick, they are out of work until they are better.",
              },
              {
                q: "I have a condition — can I still get a massage?",
                a: "That depends on the type of condition. Most of the time, yes! For any medical condition, surgery, or injury recovery, it's a great idea to check in with your provider and get clearance first. There are a few major contraindications which include but are not limited to: blood clotting disorders and strokes, acute injuries, chemotherapy, recent surgery with a non-healed incision site. An important, but maybe easily overlooked, contraindication is ANYTHING CONTAGIOUS and INFECTIONS. This includes colds and flu, but also skin infections like ringworm or athlete's foot, that can spread across your body, to the massage therapist, and consequently to other clients. Still unsure? Check with your provider. Ask us. We'll figure it out!",
              },
              {
                q: "Is there an age limit?",
                a: "No, but those who are under 18 must be accompanied by a parent or guardian for the entirety of the session. There is space for you to sit. Feel free to read a book.",
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

      {/* ── CTA: READY TO FEEL BETTER? ───────────────────── */}
      <section className="py-24 bg-steel-900">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 text-white mb-8">Ready to Feel Better?</h2>
            <a href="/contact" className="hero-cta">
              BOOK A SESSION
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
}
