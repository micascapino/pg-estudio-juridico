import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Container, Section, Title, Body, Card } from '@/components/design-system';

const AboutSection = () => {
  const values = [
    'Conocimiento jurídico profundo',
    'Estrategia procesal efectiva',
    'Trato humano y empático',
    'Atención personalizada',
    'Confidencialidad garantizada',
    'Acompañamiento integral'
  ];

  const workProcess = [
    'Escuchamos tu consulta y la analizamos en detalle.',
    'Evaluamos las opciones legales más eficaces.',
    'Diseñamos una estrategia personalizada.',
    'Te mantenemos informado en todo momento.',
    'Defendemos tus derechos con compromiso y profesionalismo.'
  ];

  const titleAnimation = useScrollReveal();
  const textAnimation = useScrollReveal({ delay: 200 });
  const workTitleAnimation = useScrollReveal({ delay: 400 });
  const workListAnimation = useScrollReveal({ delay: 600 });

  return (
    <Section id="nosotros" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Quiénes Somos - Lado Izquierdo */}
          <div>
            <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
              <Title className="text-left">Quiénes Somos</Title>
            </div>
            
            <div ref={textAnimation.elementRef} className={textAnimation.className}>
              <Body className="mb-6 sm:mb-8">
                En Giamberardino – Petrocco & Asociados somos abogados comprometidos con la defensa de los derechos de nuestros clientes.
                Creemos en un ejercicio de la abogacía que combine conocimiento jurídico profundo, estrategia procesal y un trato humano y empático.
              </Body>

              <Body className="mb-6 sm:mb-8">
                Atendemos cada consulta de manera personalizada, evaluamos alternativas legales y acompañamos a nuestros clientes durante todo el proceso.
                Nuestra trayectoria y especialización nos permiten ofrecer soluciones reales y eficaces, siempre respetando la confidencialidad y la confianza depositada en nuestro equipo.
              </Body>

              <div className="space-y-3 sm:space-y-4">
                {values.map((value, index) => {
                  const valueAnimation = useScrollReveal({ delay: 300 + index * 100 });
                  return (
                    <div key={index} ref={valueAnimation.elementRef} className={`flex items-start space-x-2 sm:space-x-3 ${valueAnimation.className}`}>
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <span className="font-inter text-sm sm:text-base text-gray-700">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cómo Trabajamos - Lado Derecho */}
          <div>
            <div ref={workTitleAnimation.elementRef} className={workTitleAnimation.className}>
              <Title className="text-left">Cómo trabajamos</Title>
            </div>
            
            <div ref={workListAnimation.elementRef} className={workListAnimation.className}>
              <Body className="mb-6 sm:mb-8">
                Nuestro objetivo es brindarte soluciones jurídicas claras, rápidas y efectivas:
              </Body>

              <div className="space-y-4 sm:space-y-6">
                {workProcess.map((step, index) => {
                  const stepAnimation = useScrollReveal({ delay: 700 + index * 100 });
                  return (
                    <div key={index} ref={stepAnimation.elementRef} className={`flex items-start space-x-3 sm:space-x-4 ${stepAnimation.className}`}>
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="font-poppins font-bold text-white text-sm sm:text-base">
                          {index + 1}
                        </span>
                      </div>
                      <div className="pt-1">
                        <Body className="text-gray-700 text-sm sm:text-base">
                          {step}
                        </Body>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
