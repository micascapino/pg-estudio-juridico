import { ReactNode } from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const ButtonSystem = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-primary/90 text-white';
      case 'secondary':
        return 'bg-gray-100 hover:bg-gray-200 text-gray-900';
      case 'outline':
        return 'border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent';
      case 'ghost':
        return 'text-primary hover:bg-primary/10';
      case 'whatsapp':
        return 'bg-green-500 hover:bg-green-600 text-white';
      default:
        return 'bg-primary hover:bg-primary/90 text-white';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-xs sm:text-sm';
      case 'md':
        return 'px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base';
      case 'lg':
        return 'px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg';
      default:
        return 'px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base';
    }
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <ShadcnButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`
        ${getVariantStyles()} 
        ${getSizeStyles()} 
        ${widthClass}
        font-semibold rounded-full transition-all duration-300 hover:scale-105 
        ${className}
      `}
    >
      {children}
    </ShadcnButton>
  );
};

export const WhatsAppButton = ({ 
  message = "Hola, me gustaría recibir asesoramiento legal. ¿Podrían ayudarme?",
  phone = "5492234373938",
  children = "Contactar por WhatsApp",
  className = ''
}: {
  message?: string;
  phone?: string;
  children?: ReactNode;
  className?: string;
}) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <ButtonSystem
      variant="whatsapp"
      onClick={handleClick}
      className={className}
    >
      {children}
    </ButtonSystem>
  );
}; 