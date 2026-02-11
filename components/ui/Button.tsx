import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  // Industrial minimalist - flat, bold, zero radius, wide tracking
  const baseStyles = 'inline-block uppercase font-bold tracking-wider transition-all duration-200 border-2 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-navy-950';

  const variantStyles = {
    primary: 'bg-brand-500 border-brand-500 text-white hover:bg-transparent hover:text-brand-500',
    secondary: 'bg-transparent border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-6 py-2 text-xs tracking-wide',
    md: 'px-8 py-3 text-button tracking-wider',
    lg: 'px-10 py-4 text-button tracking-wider',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If href is provided, render as link
  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
