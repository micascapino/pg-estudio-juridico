import { FC } from 'react';
import { Car, Heart, Building, Users, FileText, Shield, AlertTriangle, Scale } from 'lucide-react';
import ContactForm from './ContactForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const DamagesLawSection = () => {
  const accidentsAnimation = useScrollReveal();
  const malpracticeAnimation = useScrollReveal({ delay: 200 });
  const civilAnimation = useScrollReveal({ delay: 400 });

  const trafficAccidents = [
    {
      icon: <Car className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Accidentes de Tránsito",
      description: "Colisiones, atropellos y siniestros viales"
    },
    {
      icon: <AlertTriangle className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Daños Materiales",
      description: "Reparación de vehículos y objetos dañados"
    },
    {
      icon: <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Lesiones Personales",
      description: "Daño físico y psicológico a personas"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Gestión de Seguros",
      description: "Tramitación con compañías aseguradoras"
    }
  ];

  const malpracticeTypes = [
    {
      type: "Negligencia Médica",
      description: "Errores en diagnóstico o tratamiento",
      icon: <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
    },
    {
      type: "Error Quirúrgico",
      description: "Complicaciones en intervenciones",
      icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
    },
    {
      type: "Falta de Información",
      description: "Consentimiento informado deficiente",
      icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
    },
    {
      type: "Abandono de Persona",
      description: "Desatención del deber de cuidado",
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
    }
  ];

  const civilResponsibilities = [
    {
      area: "Responsabilidad Contractual",
      details: "Incumplimiento de contratos y obligaciones pactadas",
      cases: ["Incumplimiento de plazos", "Defectos en la prestación", "Daños por incumplimiento"]
    },
    {
      area: "Responsabilidad Extracontractual",
      details: "Daños causados sin relación contractual previa",
      cases: ["Daños por animales", "Caída de objetos", "Responsabilidad por terceros"]
    },
    {
      area: "Responsabilidad Profesional",
      details: "Daños causados en el ejercicio profesional",
      cases: ["Error profesional", "Negligencia", "Violación del deber de cuidado"]
    }
  ];

  return (
    <>
      {/* Accidentes de Tránsito */}
        <div ref={accidentsAnimation.elementRef} className={accidentsAnimation.className}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4">
              Accidentes de Tránsito
            </h2>
            <p className="font-inter text-sm sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Asesoramiento integral en siniestros viales y reclamos de seguros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {trafficAccidents.map((accident, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-3 sm:p-4 w-fit mx-auto mb-3 sm:mb-4">
                    {accident.icon}
                  </div>
                  <h3 className="font-inter font-semibold text-sm sm:text-lg text-dark-gray mb-2 sm:mb-3">
                    {accident.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {accident.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

       

        {/* Responsabilidad Civil */}
        <div ref={civilAnimation.elementRef} className={civilAnimation.className}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4">
              Responsabilidad Civil
            </h2>
            <p className="font-inter text-sm sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Cobertura integral en todos los aspectos de la responsabilidad civil
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-20">
            {civilResponsibilities.map((responsibility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2 sm:p-3">
                    <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-inter font-semibold text-sm sm:text-xl text-dark-gray mb-2 sm:mb-3">
                      {responsibility.area}
                    </h3>
                    <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-4">
                      {responsibility.details}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {responsibility.cases.map((case_item, caseIndex) => (
                        <span key={caseIndex} className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary">
                          {case_item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    </>
  );
};

export default DamagesLawSection; 