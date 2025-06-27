import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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
  const imageAnimation = useScrollReveal({ delay: 100 });
  const missionAnimation = useScrollReveal({ delay: 600 });

  return (
    <section id="nosotros" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        
          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
              <h2 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-4 sm:mb-6">
                Sobre Nosotros
              </h2>
            </div>
            
            <div ref={textAnimation.elementRef} className={textAnimation.className}>
              <p className="font-inter text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                En Estudio Jurídico Giamberardino & Petrocco, nos especializamos en brindar soluciones 
                legales integrales con un enfoque personalizado. Nuestro compromiso es 
                acompañar a nuestros clientes en cada etapa del proceso legal, 
                garantizando resultados exitosos y satisfactorios.
              </p>

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
              <div className="bg-light-gray rounded-xl p-4 sm:p-6">
                <h3 className="font-poppins font-semibold text-base sm:text-xl text-dark-gray mb-2">
                  Nuestra Misión
                </h3>
                <p className="font-inter text-xs sm:text-base text-gray-600">
                  Brindar asesoramiento jurídico de excelencia, construyendo relaciones 
                  de confianza duraderas con nuestros clientes y contribuyendo al 
                  desarrollo de una sociedad más justa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
