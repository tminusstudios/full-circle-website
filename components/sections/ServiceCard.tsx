import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
  href,
}: ServiceCardProps) {
  const CardContent = () => (
    <>
      {/* Image with Dark Overlay */}
      {imageUrl && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-none"
          />
          {/* Flat Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-45 transition-opacity duration-300 group-hover:opacity-35"></div>

          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-end justify-start p-6">
            <h3 className="text-h3 text-white uppercase tracking-tight font-black z-10">
              {title}
            </h3>
          </div>
        </div>
      )}

      {/* Content Below Image */}
      <div className="p-6 bg-steel-900">
        {!imageUrl && (
          <h3 className="text-h3 text-white uppercase tracking-tight font-black mb-4">
            {title}
          </h3>
        )}
        <p className="text-body text-gray-300 leading-relaxed mb-5">
          {description}
        </p>

        {/* Learn More text link */}
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors duration-300 group-hover:text-brand-500">
          Learn More
          <svg
            className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>

    </>
  );

  const baseStyles = "relative block overflow-hidden border border-gray-200 transition-all duration-300 hover:border-brand-500 group rounded-none cursor-pointer";

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        <CardContent />
      </a>
    );
  }

  return (
    <div className={baseStyles}>
      <CardContent />
    </div>
  );
}
