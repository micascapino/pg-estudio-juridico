import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = ''
}: BadgeProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'secondary':
        return 'bg-gray-100 text-gray-700';
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-0.5 text-xs';
      case 'md':
        return 'px-2 sm:px-3 py-1 text-xs sm:text-sm';
      case 'lg':
        return 'px-3 sm:px-4 py-1.5 text-sm sm:text-base';
      default:
        return 'px-2 sm:px-3 py-1 text-xs sm:text-sm';
    }
  };

  return (
    <span className={`
      inline-flex items-center rounded-full font-medium
      ${getVariantStyles()} 
      ${getSizeStyles()} 
      ${className}
    `}>
      {children}
    </span>
  );
};

export const TagList = ({ 
  tags, 
  variant = 'primary' 
}: { 
  tags: string[]; 
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag, index) => (
      <Badge key={index} variant={variant}>
        {tag}
      </Badge>
    ))}
  </div>
); 