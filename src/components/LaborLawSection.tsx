import { FC } from 'react';
import { Scale, Users, FileText, Calendar, TrendingUp, Shield, UserCheck, Gavel } from 'lucide-react';
import ContactForm from './ContactForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const LaborLawSection = () => {
  const servicesAnimation = useScrollReveal();
  const contractsAnimation = useScrollReveal({ delay: 200 });
  const compensationAnimation = useScrollReveal({ delay: 400 });

  const services = [
    {
      icon: <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Despidos y Rescisión",
      description: "Asesoramiento en despidos con y sin causa justa"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Accidentes de Trabajo",
      description: "Gestión de siniestros laborales y coberturas"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Contratos Laborales",
      description: "Redacción y revisión de contratos de trabajo"
    },
    {
      icon: <Calendar className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Licencias y Vacaciones",
      description: "Gestión de licencias médicas y vacaciones"
    },
    {
      icon: <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Aumentos Salariales",
      description: "Negociación de mejoras salariales"
    },
    {
      icon: <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Seguridad Laboral",
      description: "Cumplimiento de normas de seguridad e higiene"
    }
  ];

  const contractTypes = [
    { type: "Contrato por Tiempo Indeterminado", details: "Estabilidad laboral y derechos plenos" },
    { type: "Contrato a Plazo Fijo", details: "Duración determinada según necesidades" },
    { type: "Contrato de Temporada", details: "Para actividades estacionales" },
    { type: "Contrato de Obra", details: "Vinculado a proyectos específicos" },
    { type: "Contrato de Prueba", details: "Período inicial de evaluación" },
    { type: "Contrato Part-Time", details: "Jornada reducida con proporcionalidad" }
  ];

  const compensations = [
    { concept: "Preaviso", amount: "1 a 2 meses de sueldo" },
    { concept: "Integración del Mes", amount: "Días faltantes del mes" },
    { concept: "Indemnización por Antigüedad", amount: "1 mes por año trabajado" },
    { concept: "Vacaciones Proporcionales", amount: "Días no gozados" },
    { concept: "Aguinaldo Proporcional", amount: "SAC correspondiente" },
    { concept: "Multa Art. 2 Ley 25323", amount: "Incremento por falta de preaviso" }
  ];

  return (
    <>
      {/* Servicios Laborales */}
      <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-inter text-sm sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Asesoramiento integral en derecho laboral para empleadores y trabajadores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
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
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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

export default LaborLawSection; 