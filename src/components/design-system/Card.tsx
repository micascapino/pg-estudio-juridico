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
  button?: ReactNode;
  layout?: 'horizontal' | 'vertical';
}

export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  className = '',
  iconVariant = 'square',
  button,
  layout = 'horizontal'
}: ServiceCardProps) => {
  const iconBg = iconVariant === 'circle' ? 'rounded-full' : 'rounded-lg';
  
  if (layout === 'vertical') {
    return (
      <Card hover className={`h-full flex flex-col ${className}`}>
        <div className="text-center mb-4">
          <div className={`bg-primary/10 ${iconBg} p-3 sm:p-4 w-fit mx-auto mb-3 sm:mb-4`}>
            {icon}
          </div>
          <h3 className="font-inter font-semibold text-base sm:text-lg text-dark-gray mb-2 sm:mb-3">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
            {description}
          </p>
        </div>
        {button && (
          <div className="mt-auto pt-4">
            {button}
          </div>
        )}
      </Card>
    );
  }

  return (
    <Card hover className={className}>
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className={`flex-shrink-0 bg-primary/10 ${iconBg} p-2 sm:p-3`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-inter font-semibold text-base sm:text-lg text-dark-gray mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3">
            {description}
          </p>
          {button && (
            <div className="mt-3">
              {button}
            </div>
          )}
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
      <h3 className="font-inter font-semibold text-base sm:text-lg text-dark-gray mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">
        {description}
      </p>
    </div>
  </Card>
);

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export const ContactInfoCard = ({ 
  icon, 
  title, 
  content, 
  subtitle,
  className = ''
}: ContactInfoCardProps) => (
  <Card className={className}>
    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="font-poppins text-lg text-dark-gray font-semibold mb-2">
          {title}
        </h3>
        <div className="font-inter text-base text-primary mb-1">
          {content}
        </div>
        {subtitle && (
          <div className="text-xs text-gray-600">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  </Card>
); 