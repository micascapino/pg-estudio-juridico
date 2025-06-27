import { ReactNode } from 'react';

interface IconContainerProps {
  children: ReactNode;
  variant?: 'square' | 'circle';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}

export const IconContainer = ({
  children,
  variant = 'square',
  size = 'md',
  color = 'primary',
  className = ''
}: IconContainerProps) => {
  const getShapeStyles = () => {
    return variant === 'circle' ? 'rounded-full' : 'rounded-lg';
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8 p-1.5';
      case 'md':
        return 'w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3';
      case 'lg':
        return 'w-12 h-12 sm:w-16 sm:h-16 p-3 sm:p-4';
      case 'xl':
        return 'w-16 h-16 sm:w-20 sm:h-20 p-4 sm:p-5';
      default:
        return 'w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3';
    }
  };

  const getColorStyles = () => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'secondary':
        return 'bg-gray-100 text-gray-600';
      case 'success':
        return 'bg-green-100 text-green-600';
      case 'warning':
        return 'bg-yellow-100 text-yellow-600';
      case 'error':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className={`
      flex items-center justify-center
      ${getShapeStyles()}
      ${getSizeStyles()}
      ${getColorStyles()}
      ${className}
    `}>
      {children}
    </div>
  );
};

interface IconProps {
  icon: ReactNode;
  label?: string;
  variant?: 'square' | 'circle';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}

export const IconWithLabel = ({
  icon,
  label,
  variant = 'square',
  size = 'md',
  color = 'primary',
  className = ''
}: IconProps) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <IconContainer variant={variant} size={size} color={color}>
        {icon}
      </IconContainer>
      {label && (
        <span className="mt-2 text-xs sm:text-sm text-gray-600 font-medium">
          {label}
        </span>
      )}
    </div>
  );
}; 