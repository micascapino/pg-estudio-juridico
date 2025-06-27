import { ReactNode } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';

interface AlertProps {
  children: ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export const Alert = ({
  children,
  variant = 'info',
  dismissible = false,
  onDismiss,
  className = ''
}: AlertProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          container: 'bg-green-50 border-green-200 text-green-800',
          icon: <CheckCircle className="h-5 w-5 text-green-500" />
        };
      case 'warning':
        return {
          container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
          icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
        };
      case 'error':
        return {
          container: 'bg-red-50 border-red-200 text-red-800',
          icon: <XCircle className="h-5 w-5 text-red-500" />
        };
      case 'info':
        return {
          container: 'bg-blue-50 border-blue-200 text-blue-800',
          icon: <Info className="h-5 w-5 text-blue-500" />
        };
      default:
        return {
          container: 'bg-blue-50 border-blue-200 text-blue-800',
          icon: <Info className="h-5 w-5 text-blue-500" />
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`
      border rounded-lg p-4 flex items-start space-x-3
      ${styles.container}
      ${className}
    `}>
      <div className="flex-shrink-0">
        {styles.icon}
      </div>
      <div className="flex-1 text-sm">{children}</div>
      {dismissible && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export const Toast = ({ 
  message, 
  variant = 'info', 
  visible = true,
  onClose
}: {
  message: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
  visible?: boolean;
  onClose?: () => void;
}) => {
  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right">
      <Alert 
        variant={variant} 
        dismissible 
        onDismiss={onClose}
        className="shadow-lg max-w-sm"
      >
        {message}
      </Alert>
    </div>
  );
}; 