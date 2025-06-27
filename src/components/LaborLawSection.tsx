import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Users, CheckCircle, AlertTriangle, Scale, FileText, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const laboralServices = [
  {
    icon: AlertTriangle,
    title: 'Falta de Registración Laboral',
    description: 'Trabajo en negro, trabajo informal o no registrado.'
  },
  {
    icon: FileText,
    title: 'Incorrecta Registración',
    description: 'Mal consignada la fecha de ingreso, las tareas o jornada laboral.'
  },
  {
    icon: Users,
    title: 'Despidos Sin Causa',
    description: 'Despido injustificado, despido arbitrario o suspensión por falta de trabajo.'
  },
  {
    icon: Scale,
    title: 'Defectuosa Liquidación de Sueldo',
    description: 'Deficiente categorización o pago defectuoso.'
  },
  {
    icon: AlertTriangle,
    title: 'Accidentes Laborales',
    description: 'Accidente en lugar de trabajo, accidente in itinere.'
  },
  {
    icon: Clock,
    title: 'Enfermedades Laborales',
    description: 'Enfermedad profesional o enfermedad producida a causa del trabajo.'
  }
];

const contractTypes = [
  {
    title: 'Contrato por tiempo indeterminado',
    description: 'Se utiliza durante los primeros 3 meses de trabajo. Permite que las partes puedan interrumpir la relación laboral dentro de ese lapso sin causa expresa y sin derecho de indemnización.'
  },
  {
    title: 'Contrato a tiempo parcial',
    description: 'Se solicita al empleado trabajar una cantidad de horas menor a las 2/3 partes de la jornada habitual con remuneración proporcional.'
  },
  {
    title: 'Contrato a Plazo Fijo',
    description: 'Se realiza por escrito expresando fecha de vencimiento del plazo. Puede extenderse con renovaciones como máximo por 5 años.'
  },
  {
    title: 'Contrato eventual',
    description: 'Se utiliza de manera puntual para trabajos que comienzan y terminan en un período estimado específico.'
  }
];

const LaborLawSection = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  return (
    <section id="derecho-laboral" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
              Derecho Laboral
            </h2>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Brindamos asesoramiento para resolución de todo tipo de conflictos de índole laboral, 
              poniendo como meta la mediación de intereses entre empleador y empleado, de tal modo 
              que las soluciones sean rápidas y beneficiosas.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Services Section */}
            <div>
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-8">
                Nuestros Servicios en Derecho Laboral
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {laboralServices.map((service, index) => {
                  const cardAnimation = useScrollReveal({ delay: index * 100 + 400 });
                  return (
                    <div
                      key={index}
                      ref={cardAnimation.elementRef}
                      className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ${cardAnimation.className}`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-semibold text-lg text-dark-gray mb-2">
                            {service.title}
                          </h4>
                          <p className="font-inter text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contract Types Section */}
            <div>
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-8">
                Tipos de Contratos Laborales
              </h3>
              <div className="space-y-6">
                {contractTypes.map((contract, index) => {
                  const contractAnimation = useScrollReveal({ delay: index * 100 + 600 });
                  return (
                    <div
                      key={index}
                      ref={contractAnimation.elementRef}
                      className={`border-l-4 border-primary bg-white p-6 rounded-r-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${contractAnimation.className}`}
                    >
                      <h4 className="font-poppins font-semibold text-xl text-dark-gray mb-3">
                        {contract.title}
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        {contract.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary/5 rounded-xl p-8">
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-6">
                ¿Por qué elegir nuestro estudio?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="font-inter text-gray-700">
                    <strong>Experiencia especializada</strong> en Ley de Contrato de Trabajo (LCT)
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="font-inter text-gray-700">
                    <strong>Mediación efectiva</strong> entre empleadores y empleados
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="font-inter text-gray-700">
                    <strong>Soluciones rápidas</strong> y beneficiosas para ambas partes
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="font-inter text-gray-700">
                    <strong>Confección completa</strong> de reclamos y contratos laborales
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaborLawSection; 