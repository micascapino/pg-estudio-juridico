
import { Check } from 'lucide-react';

const AboutSection = () => {
  const values = [
    'Más de 15 años de experiencia profesional',
    'Enfoque personalizado en cada caso',
    'Atención las 24 horas los 365 días',
    'Equipo multidisciplinario especializado',
    'Compromiso con la excelencia jurídica',
    'Transparencia en honorarios y procesos'
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Equipo del Estudio Jurídico Mogliani"
              className="rounded-2xl shadow-custom-hover w-full h-[500px] object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-6">
              Sobre Nosotros
            </h2>
            
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              En Estudio Jurídico Mogliani, nos especializamos en brindar soluciones 
              legales integrales con un enfoque personalizado. Nuestro compromiso es 
              acompañar a nuestros clientes en cada etapa del proceso legal, 
              garantizando resultados exitosos y satisfactorios.
            </p>

            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-inter text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            <div className="bg-light-gray rounded-xl p-6">
              <h3 className="font-poppins font-semibold text-xl text-dark-gray mb-2">
                Nuestra Misión
              </h3>
              <p className="font-inter text-gray-600">
                Brindar asesoramiento jurídico de excelencia, construyendo relaciones 
                de confianza duraderas con nuestros clientes y contribuyendo al 
                desarrollo de una sociedad más justa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
