'use client';

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
              alt="Full Circle Function & Fitness — Personal Training, Massage Therapy & Yoga in Pittsburgh"
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
        {/* Primary H1 — reduced ~25% from original */}
        <h1
          className="text-white uppercase font-black font-display"
          style={{
            fontSize: 'clamp(1.75rem, 4.5vw, 4.25rem)',
            lineHeight: '0.95',
            letterSpacing: '0.04em',
            textShadow: '0 2px 8px rgba(0,0,0,0.75)',
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

        {/* Trust line */}
        {subheadline && (
          <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest font-medium">
            Serving Pittsburgh&apos;s North Hills Since 2020 &middot; Join 100+ Happy Clients
          </p>
        )}

        {/* Fallback subtext (no highlight) */}
        {subtext && !subheadline && (
          <p className="mt-8 text-body-lg text-gray-200 max-w-2xl mx-auto">
            {subtext}
          </p>
        )}

        {/* Google Reviews Badge */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJ1ct2sFSNNIgRz3b-few4qF0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-2 group"
          >
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                Google Reviews
              </span>
            </div>
            <p className="text-brand-500 font-bold text-sm tracking-wider">
              ★★★★★&nbsp; 4.9 Stars · 75+ Reviews
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-brand-500 transition-colors">
              See All Reviews
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* CTA Button — gradient + pulse */}
        {ctaText && (
          <div className="mt-16">
            <a href={ctaHref} className="hero-cta">
              {ctaText}
            </a>
          </div>
        )}
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
          className="animate-bounce text-white/40 hover:text-white/70 transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
