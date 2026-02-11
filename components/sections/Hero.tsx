import React from 'react';
import Container from '../layout/Container';

interface HeroProps {
  headline: string;
  subheadline?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function Hero({
  headline,
  subheadline,
  subtext,
  ctaText = 'GET STARTED',
  ctaHref = '/contact',
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{ minHeight: '95vh' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-950 opacity-60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-navy-950" />
        )}
        {/* Vignette — draws focus to center content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 0%, rgba(10,15,28,0.4) 55%, rgba(10,15,28,0.82) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center py-24">
        {/* Primary H1 */}
        <h1
          className="text-hero-mobile md:text-hero text-white uppercase font-black font-display"
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.75)',
            letterSpacing: '-0.01em',
          }}
        >
          {headline}
        </h1>

        {/* Subheadline with marker-sweep highlight */}
        {subheadline && (
          <div className="mt-8 flex justify-center">
            <span
              className="hero-subheadline text-2xl md:text-3xl text-gray-200 font-normal"
              style={{ letterSpacing: '0.02em', lineHeight: 1.45 }}
            >
              {subheadline}
            </span>
          </div>
        )}

        {/* Fallback subtext (no highlight) */}
        {subtext && !subheadline && (
          <p className="mt-8 text-body-lg text-gray-200 max-w-2xl mx-auto">
            {subtext}
          </p>
        )}

        {/* Google Reviews Badge */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJ1ct2sFSNNIgRz3b-few4qF0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 px-9 py-5 border border-white/20 hover:border-brand-500 transition-colors duration-200"
            style={{
              boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 4px 28px rgba(0,0,0,0.55)',
            }}
          >
            <div className="flex items-center gap-1.5">
              {[...Array(4)].map((_, i) => (
                <svg key={i} width="28" height="28" viewBox="0 0 24 24">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill="#FBBF24"
                  />
                </svg>
              ))}
              {/* 0.9 filled star */}
              <svg width="28" height="28" viewBox="0 0 24 24">
                <defs>
                  <clipPath id="hero-star-90">
                    <rect x="0" y="0" width="25.2" height="28" />
                  </clipPath>
                </defs>
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="#4B5563"
                />
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="#FBBF24"
                  clipPath="url(#hero-star-90)"
                />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-base uppercase tracking-wider">
                4.9 on Google
              </p>
              <p className="text-gray-300 text-sm mt-0.5">75 reviews</p>
            </div>
          </a>
        </div>

        {/* CTA Button — gradient + pulse */}
        {ctaText && (
          <div className="mt-12">
            <a href={ctaHref} className="hero-cta">
              {ctaText}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
