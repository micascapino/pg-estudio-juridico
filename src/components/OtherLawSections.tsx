import { FC } from 'react';
import { Building, Gavel, Heart, HandHeart, FileText, Users, Scale, Shield } from 'lucide-react';
import ContactForm from './ContactForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Derecho Comercial
export const CommercialLawSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <Building className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Constitución de Sociedades",
      description: "Creación y estructura de empresas"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Contratos Comerciales",
      description: "Redacción y negociación de acuerdos"
    },
    {
      icon: <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Derecho Concursal",
      description: "Concursos y quiebras empresariales"
    },
    {
      icon: <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Propiedad Intelectual",
      description: "Marcas, patentes y derechos de autor"
    }
  ];

  return (
    <>
      <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-inter text-sm sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Asesoramiento integral para el desarrollo de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2 sm:p-3">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-semibold text-sm sm:text-lg text-dark-gray mb-1 sm:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Derecho Penal
export const CriminalLawSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <Gavel className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Defensa Penal",
      description: "Representación en procesos penales"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Querellas",
      description: "Inicio de acciones penales privadas"
    },
    {
      icon: <HandHeart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Penal",
      description: "Resolución alternativa de conflictos"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Violencia Familiar",
      description: "Protección y medidas cautelares"
    }
  ];

  return (
    <>
      <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-inter text-sm sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Defensa especializada para proteger tus derechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2 sm:p-3">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-semibold text-sm sm:text-lg text-dark-gray mb-1 sm:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Derecho de Familia
export const FamilyLawSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Divorcios",
      description: "Tramitación de divorcios consensuados y contenciosos"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Tenencia de Menores",
      description: "Régimen de visitas y cuidado personal"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Cuota Alimentaria",
      description: "Fijación y modificación de alimentos"
    },
    {
      icon: <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Sucesiones",
      description: "Tramitación de herencias y legados"
    }
  ];

  return (
    <>
      <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-inter text-sm sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Acompañamiento sensible en momentos difíciles de la familia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2 sm:p-3">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-semibold text-sm sm:text-lg text-dark-gray mb-1 sm:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Mediación
export const MediationSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <HandHeart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Civil",
      description: "Resolución pacífica de conflictos civiles"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Familiar",
      description: "Acuerdos en temas de familia"
    },
    {
      icon: <Building className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Comercial",
      description: "Conflictos entre empresas"
    },
    {
      icon: <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Laboral",
      description: "Resolución de conflictos laborales"
    }
  ];

  return (
    <>
      <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-inter text-sm sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Soluciones pacíficas y eficientes para resolver conflictos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2 sm:p-3">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-semibold text-sm sm:text-lg text-dark-gray mb-1 sm:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}; 