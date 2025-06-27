import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Car, Stethoscope, Scale, Shield, Heart, MessageSquare, CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const damagesServices = [
  {
    icon: Car,
    title: 'Accidentes de Tránsito',
    description: 'Daño físico o lesiones, incapacidad, daño psicológico. Pérdida de vida. Daño automotor.'
  },
  {
    icon: Stethoscope,
    title: 'Mala Praxis',
    description: 'Mala praxis médica, incapacidades, daño psicológico, reclamo legal.'
  },
  {
    icon: Scale,
    title: 'Responsabilidad Civil',
    description: 'Contractual y extracontractual. Daños y perjuicios.'
  },
  {
    icon: Shield,
    title: 'Reclamos ante Compañías de Seguro',
    description: 'Reclamos ante Compañías de Seguro, Aseguradoras, Obras Sociales.'
  },
  {
    icon: Heart,
    title: 'Amparos de Salud',
    description: 'Irregularidades en la afiliación, negativa de afiliación, falta de entrega o autorización de medicación, rechazo en la cobertura de tratamientos especiales.'
  },
  {
    icon: MessageSquare,
    title: 'Mediaciones',
    description: 'Resolución alternativa de conflictos en materia de daños y responsabilidad civil.'
  }
];

const DamagesLawSection = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  return (
    <section id="derecho-danos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
              Derecho de Daños
            </h2>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Nos especializamos en la rápida resolución de cualquier tipo de conflicto que surja de la 
              Responsabilidad Civil en general (contractual o extracontractual). Reclamando ante las Compañías 
              Aseguradoras y/o Responsables del evento dañoso, Obras Sociales, Seguros Médicos.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Services Section */}
            <div>
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-8">
                Nuestros Servicios en Derecho de Daños
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {damagesServices.map((service, index) => {
                  const cardAnimation = useScrollReveal({ delay: index * 100 + 400 });
                  return (
                    <div
                      key={index}
                      ref={cardAnimation.elementRef}
                      className={`bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ${cardAnimation.className}`}
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

            {/* What We Guarantee */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-6">
                Nos Aseguramos de Brindarte
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-dark-gray mb-2">
                      Soluciones Rápidas
                    </h4>
                    <p className="font-inter text-gray-600">
                      Trabajamos para que recibas una resolución ágil de tu caso, minimizando los tiempos de espera.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-dark-gray mb-2">
                      Retribución Justa por Daños Materiales
                    </h4>
                    <p className="font-inter text-gray-600">
                      Te aseguramos la compensación que te corresponde por todos los daños patrimoniales sufridos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-dark-gray mb-2">
                      Compensación por Daños Morales
                    </h4>
                    <p className="font-inter text-gray-600">
                      También reclamamos la indemnización por daños inmateriales, incluyendo el sufrimiento psicológico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="bg-primary/5 rounded-xl p-8">
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-6">
                Especialistas en Responsabilidad Civil
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-dark-gray mb-3">
                    Responsabilidad Contractual
                  </h4>
                  <p className="font-inter text-gray-600">
                    Cuando se incumple una obligación nacida de un contrato válido entre las partes.
                  </p>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-dark-gray mb-3">
                    Responsabilidad Extracontractual
                  </h4>
                  <p className="font-inter text-gray-600">
                    Daños causados sin que exista una relación contractual previa entre las partes.
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

export default DamagesLawSection; 