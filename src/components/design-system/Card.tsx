import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'outlined';
}

export const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  variant = 'default' 
}: CardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-white rounded-xl shadow-lg border border-gray-100';
      case 'outlined':
        return 'bg-white rounded-xl border-2 border-gray-200';
      default:
        return 'bg-white rounded-xl shadow-lg hover:shadow-xl border border-gray-100';
    }
  };

  const hoverStyles = hover ? 'transition-all duration-300 hover:-translate-y-2' : 'transition-all duration-300';

  return (
    <div className={`${getVariantStyles()} ${hoverStyles} p-4 sm:p-6 ${className}`}>
      {children}
    </div>
  );
};

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconVariant?: 'square' | 'circle';
}

export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  className = '',
  iconVariant = 'square'
}: ServiceCardProps) => {
  const iconBg = iconVariant === 'circle' ? 'rounded-full' : 'rounded-lg';
  
  return (
    <Card hover className={className}>
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className={`flex-shrink-0 bg-primary/10 ${iconBg} p-2 sm:p-3`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-inter font-semibold text-sm sm:text-lg text-dark-gray mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const IconCard = ({ 
  icon, 
  title, 
  description, 
  className = ''
}: IconCardProps) => (
  <Card hover className={className}>
    <div className="text-center">
      <div className="bg-primary/10 rounded-full p-3 sm:p-4 w-fit mx-auto mb-3 sm:mb-4">
        {icon}
      </div>
      <h3 className="font-inter font-semibold text-sm sm:text-lg text-dark-gray mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600">
        {description}
      </p>
    </div>
  </Card>
); 