import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className = '' }: TypographyProps) => (
  <h2 className={`font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4 ${className}`}>
    {children}
  </h2>
);

export const Subtitle = ({ children, className = '' }: TypographyProps) => (
  <p className={`font-inter text-base sm:text-xl text-gray-600 max-w-4xl mx-auto ${className}`}>
    {children}
  </p>
);

export const Body = ({ children, className = '' }: TypographyProps) => (
  <p className={`font-inter text-base sm:text-lg text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardTitle = ({ children, className = '' }: TypographyProps) => (
  <h3 className={`font-inter font-semibold text-sm sm:text-lg text-dark-gray mb-1 sm:mb-2 ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-sm sm:text-base text-gray-600 ${className}`}>
    {children}
  </p>
); 