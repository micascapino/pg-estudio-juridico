import { ReactNode } from 'react';
import { Container } from './Layout';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

interface ContentWithSidebarProps {
  main: ReactNode;
  sidebar: ReactNode;
  className?: string;
  mainWidth?: '1/2' | '2/3' | '3/4';
}

export const PageContent = ({ children, className = '' }: PageLayoutProps) => (
  <div className={`py-12 sm:py-20 bg-white ${className}`}>
    <Container>
      {children}
    </Container>
  </div>
);

export const ContentWithSidebar = ({ 
  main, 
  sidebar, 
  className = '',
  mainWidth = '2/3'
}: ContentWithSidebarProps) => {
  const getGridConfig = () => {
    switch (mainWidth) {
      case '1/2':
        return 'grid lg:grid-cols-2 gap-8 sm:gap-12';
      case '2/3':
        return 'grid lg:grid-cols-3 gap-8 sm:gap-12';
      case '3/4':
        return 'grid lg:grid-cols-4 gap-8 sm:gap-12';
      default:
        return 'grid lg:grid-cols-3 gap-8 sm:gap-12';
    }
  };

  const getMainSpan = () => {
    switch (mainWidth) {
      case '1/2':
        return 'lg:col-span-1';
      case '2/3':
        return 'lg:col-span-2';
      case '3/4':
        return 'lg:col-span-3';
      default:
        return 'lg:col-span-2';
    }
  };

  const getSidebarSpan = () => {
    switch (mainWidth) {
      case '1/2':
        return 'lg:col-span-1';
      case '2/3':
        return 'lg:col-span-1';
      case '3/4':
        return 'lg:col-span-1';
      default:
        return 'lg:col-span-1';
    }
  };

  return (
    <PageContent className={className}>
      <div className={getGridConfig()}>
        <div className={getMainSpan()}>
          {main}
        </div>
        <div className={getSidebarSpan()}>
          {sidebar}
        </div>
      </div>
    </PageContent>
  );
};

// Componente más semántico para casos específicos
export const MainContent = ({ children }: { children: ReactNode }) => (
  <div className="lg:col-span-2">
    {children}
  </div>
);

export const Sidebar = ({ children }: { children: ReactNode }) => (
  <div className="lg:col-span-1">
    {children}
  </div>
);

export const TwoColumnLayout = ({ children }: { children: ReactNode }) => (
  <PageContent>
    <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
      {children}
    </div>
  </PageContent>
); 