'use client';

import React, { useState } from 'react';
import Container from './Container';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PERSONAL TRAINING', href: '/personal-training' },
    { name: 'MASSAGE THERAPY', href: '/massage-therapy' },
    { name: 'YOGA', href: '/yoga' },
    { name: 'THORNE SUPPLEMENTS', href: 'https://www.thorne.com/u/PR1155737', external: true },
  ];

  return (
    <header className="bg-navy-950 border-b border-steel-700 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-5">

          {/* Logo — stacked lockup */}
          <div className="flex-shrink-0">
            <a href="/" className="flex flex-col leading-none group" aria-label="Full Circle Function & Fitness — Home">
              <span className="text-white text-xl font-black font-display uppercase tracking-wide group-hover:text-brand-500 transition-colors">
                Full Circle
              </span>
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-0.5 group-hover:text-brand-500/70 transition-colors">
                Function &amp; Fitness
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-7">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-xs font-bold uppercase tracking-wider text-white hover:text-brand-500 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/contact"
              className="ml-3 text-xs font-bold uppercase tracking-wider text-white bg-brand-500 px-5 py-2.5 hover:bg-brand-600 transition-colors whitespace-nowrap"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-steel-700 py-5">
            <div className="flex flex-col gap-y-5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-sm font-bold uppercase tracking-wider text-white hover:text-brand-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/contact"
                className="text-sm font-bold uppercase tracking-wider text-white bg-brand-500 px-4 py-3 text-center hover:bg-brand-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
