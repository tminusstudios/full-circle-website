'use client';

export default function ScrollButton() {
  return (
    <button
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
      className="animate-bounce text-white/40 hover:text-white/70 transition-colors cursor-pointer"
      aria-label="Scroll down"
    >
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  );
}
