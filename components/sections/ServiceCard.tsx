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
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 rounded-none"
          />
          {/* Flat Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-45 transition-opacity duration-200 group-hover:opacity-35"></div>

          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-end justify-start p-6">
            <h3 className="text-h3 text-white uppercase tracking-tight font-black z-10">
              {title}
            </h3>
          </div>
        </div>
      )}

      {/* Content Below Image - Flat with Border */}
      <div className="p-6 bg-steel-900">
        {!imageUrl && (
          <h3 className="text-h3 text-white uppercase tracking-tight font-black mb-4">
            {title}
          </h3>
        )}
        <p className="text-body text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );

  // Flat design - border changes on hover, no shadow or lift
  const baseStyles = "block overflow-hidden border border-gray-200 transition-all duration-200 hover:border-brand-500 group rounded-none";

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
