import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Container, Section, Title, Body, Card } from '@/components/design-system';

const AboutSection = () => {
  const values = [
    'Más de 15 años de experiencia profesional',
    'Enfoque personalizado en cada caso',
    'Atención las 24 horas los 365 días',
    'Equipo multidisciplinario especializado',
    'Compromiso con la excelencia jurídica',
    'Transparencia en honorarios y procesos'
  ];

  const titleAnimation = useScrollReveal();
  const textAnimation = useScrollReveal({ delay: 200 });
  const missionAnimation = useScrollReveal({ delay: 600 });

  return (
    <Section id="nosotros" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-1 lg:order-2">
            <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
              <Title>Sobre Nosotros</Title>
            </div>
            
            <div ref={textAnimation.elementRef} className={textAnimation.className}>
              <Body className="mb-6 sm:mb-8">
                En Estudio Jurídico Giamberardino & Petrocco, nos especializamos en brindar soluciones 
                legales integrales con un enfoque personalizado. Nuestro compromiso es 
                acompañar a nuestros clientes en cada etapa del proceso legal, 
                garantizando resultados exitosos y satisfactorios.
              </Body>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {values.map((value, index) => {
                  const valueAnimation = useScrollReveal({ delay: 300 + index * 100 });
                  return (
                    <div key={index} ref={valueAnimation.elementRef} className={`flex items-start space-x-2 sm:space-x-3 ${valueAnimation.className}`}>
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <span className="font-inter text-xs sm:text-base text-gray-700">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div ref={missionAnimation.elementRef} className={missionAnimation.className}>
              <Card variant="outlined" className="bg-light-gray">
                <h3 className="font-poppins font-semibold text-base sm:text-xl text-dark-gray mb-2">
                  Nuestra Misión
                </h3>
                <Body>
                  Brindar asesoramiento jurídico de excelencia, construyendo relaciones 
                  de confianza duraderas con nuestros clientes y contribuyendo al 
                  desarrollo de una sociedad más justa.
                </Body>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
