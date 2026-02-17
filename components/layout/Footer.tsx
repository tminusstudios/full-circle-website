import React from 'react';
import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'ABOUT', href: '/about' },
      { name: 'TRAINING', href: '/training' },
      { name: 'MASSAGE', href: '/massage' },
      { name: 'CONTACT', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-navy-900 border-t border-steel-700">
      <Container>
        <div className="py-12">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-white font-display text-xl uppercase tracking-wider mb-4">
                Full Circle Function & Fitness
              </h3>
              <p className="text-gray-400 text-sm">
                Personal Training, Massage Therapy & Yoga in Pittsburgh
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-brand-500 text-sm transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="tel:4122957058" className="hover:text-brand-500 transition-colors">
                    412-295-7058
                  </a>
                </li>
                <li>
                  <a href="mailto:cody@fullcirclefunctionandfitness.com" className="hover:text-brand-500 transition-colors">
                    cody@fullcirclefunctionandfitness.com
                  </a>
                </li>
                <li>4361 William Flinn Hwy</li>
                <li>Allison Park, PA 15101</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-steel-700">
            <p className="text-center text-gray-500 text-sm">
              &copy; {currentYear} Full Circle Function & Fitness. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
