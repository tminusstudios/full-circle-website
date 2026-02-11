'use client';

import { useRef, useEffect, useState } from 'react';

const IMAGES = [
  'Screenshot-2026-02-10-at-3.59.10-PM.webp',
  'Screenshot-2026-02-10-at-3.59.24-PM.webp',
  'Screenshot-2026-02-10-at-3.59.38-PM.webp',
  'Screenshot-2026-02-10-at-3.59.48-PM.webp',
  'Screenshot-2026-02-10-at-4.00.42-PM.webp',
  'Screenshot-2026-02-10-at-4.01.04-PM.webp',
  'Screenshot-2026-02-10-at-4.01.13-PM.webp',
  'Screenshot-2026-02-10-at-4.01.20-PM.webp',
  'Screenshot-2026-02-10-at-4.01.25-PM.webp',
  'Screenshot-2026-02-10-at-4.01.40-PM.webp',
  'Screenshot-2026-02-10-at-4.01.49-PM.webp',
  'Screenshot-2026-02-10-at-4.01.53-PM.webp',
  'Screenshot-2026-02-10-at-4.01.59-PM.webp',
  'Screenshot-2026-02-10-at-4.02.05-PM.webp',
];

const CARD_W = 420;
const GAP = 20;
const SPEED = 0.5; // px per rAF tick (~30px/s at 60fps)
const FULL_WIDTH = IMAGES.length * (CARD_W + GAP);

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef<{ startX: number; startOffset: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current && !dragRef.current) {
        offsetRef.current = (offsetRef.current + SPEED) % FULL_WIDTH;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onDragStart = (clientX: number) => {
    dragRef.current = { startX: clientX, startOffset: offsetRef.current };
    setIsDragging(true);
  };

  const onDragMove = (clientX: number) => {
    if (!dragRef.current) return;
    const delta = dragRef.current.startX - clientX;
    offsetRef.current =
      ((dragRef.current.startOffset + delta) % FULL_WIDTH + FULL_WIDTH) % FULL_WIDTH;
  };

  const onDragEnd = () => {
    dragRef.current = null;
    setIsDragging(false);
  };

  return (
    <section className="section-padding bg-steel-900 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-h2 text-white mb-4">What Our Clients Say</h2>

        {/* Google branding row */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {/* Google G icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
            Google Reviews
          </span>
        </div>

        <p className="text-brand-500 font-bold text-sm tracking-wider mb-5">
          ★★★★★&nbsp; 4.9 Stars · 75+ Reviews
        </p>

        <a
          href="https://search.google.com/local/reviews?placeid=ChIJ1ct2sFSNNIgRz3b-few4qF0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-brand-500 transition-colors"
        >
          See All Reviews
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Carousel viewport */}
      <div
        className="overflow-hidden select-none"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => {
          pausedRef.current = false;
          onDragEnd();
        }}
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
      >
        {/* Track — contains 2× images for seamless loop */}
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{
            gap: `${GAP}px`,
            width: `${IMAGES.length * 2 * (CARD_W + GAP)}px`,
            paddingBottom: '4px', /* let shadow breathe */
          }}
        >
          {[...IMAGES, ...IMAGES].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              style={{ width: `${CARD_W}px` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/testimonials/${src}`}
                alt={`Google review from a Full Circle client`}
                style={{ display: 'block', width: '100%', height: 'auto' }}
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
