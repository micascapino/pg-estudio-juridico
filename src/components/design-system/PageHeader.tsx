import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Container, Title, Subtitle } from './index';

interface PageHeaderProps {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
  titleDelay?: number;
  subtitleDelay?: number;
}

export const PageHeader = ({
  title,
  subtitle,
  className = '',
  titleDelay = 0,
  subtitleDelay = 200
}: PageHeaderProps) => {
  const titleAnimation = useScrollReveal({ delay: titleDelay });
  const subtitleAnimation = useScrollReveal({ delay: subtitleDelay });

  return (
    <section className={`pt-20 sm:pt-24 pb-8 sm:pb-12 bg-primary/5 ${className}`}>
      <Container>
        <div className="text-center">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <Title className="mb-3 sm:mb-4">
              {title}
            </Title>
          </div>
          {subtitle && (
            <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
              <Subtitle className="max-w-3xl">
                {subtitle}
              </Subtitle>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}; 