import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Container, Section } from '@/components/design-system';

const MissionBanner = () => {
  const quoteAnimation = useScrollReveal();
  const authorAnimation = useScrollReveal({ delay: 300 });

  return (
    <Section className="bg-primary">
      <Container>
        <div className="text-center max-w-4xl mx-auto py-8 sm:py-12">
          <div ref={quoteAnimation.elementRef} className={quoteAnimation.className}>
            <blockquote className="font-poppins text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-6 sm:mb-8">
              "Nuestro objetivo es brindarte soluciones jurídicas claras, rápidas y efectivas."
            </blockquote>
          </div>
          
          <div ref={authorAnimation.elementRef} className={authorAnimation.className}>
            <cite className="font-inter text-white/80 text-base sm:text-lg not-italic">
              — Giamberardino – Petrocco & Asociados
            </cite>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MissionBanner;
