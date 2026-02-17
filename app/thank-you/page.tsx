import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for claiming your free session at Full Circle Function & Fitness.",
  alternates: {
    canonical: "https://www.fullcirclefunctionandfitness.com/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center py-24">

          {/* Checkmark Icon */}
          <div className="flex justify-center mb-10">
            <div className="relative w-24 h-24">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-brand-500 opacity-20 animate-ping" />
              <div className="absolute inset-0 rounded-full border-4 border-brand-500" />
              {/* Checkmark */}
              <svg
                className="absolute inset-0 w-full h-full p-5 text-brand-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-h1 text-white mb-6">
            Thanks for Reaching Out! 🎉
          </h1>

          {/* Subtext */}
          <p className="text-body-lg text-gray-300 leading-relaxed mb-12">
            We&apos;ve received your message and a member of our team will be in touch shortly. We look forward to helping you on your wellness journey!
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-12" />

          {/* Back to Home */}
          <a
            href="/"
            className="inline-block text-sm font-bold uppercase tracking-wider text-white bg-brand-500 px-8 py-4 hover:bg-brand-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </Container>
    </div>
  );
}
