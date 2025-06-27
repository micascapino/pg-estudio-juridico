import { ReactNode, forwardRef } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: LayoutProps) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const Section = forwardRef<HTMLElement, LayoutProps & { id?: string }>(
  ({ children, className = '', id }, ref) => (
    <section ref={ref} id={id} className={`py-12 sm:py-20 ${className}`}>
      {children}
    </section>
  )
);

Section.displayName = 'Section';

export const SectionHeader = ({ children, className = '' }: LayoutProps) => (
  <div className={`text-center mb-6 sm:mb-8 ${className}`}>
    {children}
  </div>
);

interface GridProps extends LayoutProps {
  cols?: 'auto' | '1' | '2' | '3' | '4' | '6';
  gap?: 'sm' | 'md' | 'lg';
}

export const Grid = ({ children, className = '', cols = 'auto', gap = 'md' }: GridProps) => {
  const getGridCols = () => {
    switch (cols) {
      case '1': return 'grid-cols-1';
      case '2': return 'grid-cols-1 md:grid-cols-2';
      case '3': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case '4': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case '6': return 'grid-cols-2 lg:grid-cols-6';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getGap = () => {
    switch (gap) {
      case 'sm': return 'gap-3 sm:gap-4';
      case 'md': return 'gap-6 sm:gap-8';
      case 'lg': return 'gap-8 sm:gap-12';
      default: return 'gap-6 sm:gap-8';
    }
  };

  return (
    <div className={`grid ${getGridCols()} ${getGap()} ${className}`}>
      {children}
    </div>
  );
}; 