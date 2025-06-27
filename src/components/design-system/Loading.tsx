import { ReactNode } from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Spinner = ({ size = 'md', className = '' }: LoadingProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'md':
        return 'w-6 h-6';
      case 'lg':
        return 'w-8 h-8';
      default:
        return 'w-6 h-6';
    }
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary ${getSizeStyles()} ${className}`} />
  );
};

interface LoadingStateProps {
  loading: boolean;
  children: ReactNode;
  loadingText?: string;
  className?: string;
}

export const LoadingState = ({
  loading,
  children,
  loadingText = 'Cargando...',
  className = ''
}: LoadingStateProps) => {
  if (loading) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 text-gray-500 ${className}`}>
        <Spinner size="lg" className="mb-4" />
        <p className="text-sm sm:text-base">{loadingText}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export const LoadingOverlay = ({ 
  loading, 
  children, 
  loadingText = 'Cargando...' 
}: LoadingStateProps) => {
  return (
    <div className="relative">
      {children}
      {loading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <Spinner size="lg" className="mb-4" />
            <p className="text-gray-700 text-sm sm:text-base">{loadingText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const SkeletonCard = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-white rounded-xl p-4 sm:p-6 shadow-lg ${className}`}>
    <div className="flex items-start space-x-3 sm:space-x-4">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  </div>
); 