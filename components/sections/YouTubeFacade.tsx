'use client';
import { useState } from 'react';

export default function YouTubeFacade() {
  const [playing, setPlaying] = useState(false);
  const videoId = 'dsQ8TjgR9Y0';

  return (
    <section className="section-padding bg-navy-950">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="relative aspect-video rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)] cursor-pointer group"
          onClick={() => !playing && setPlaying(true)}
        >
          {!playing ? (
            <>
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Full Circle Function & Fitness promo video"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-950/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-black/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Full Circle Function & Fitness promo video"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
