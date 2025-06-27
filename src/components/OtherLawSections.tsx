import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FileText, MessageSquare, Phone, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const CommercialLawSection = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  return (
    <section id="derecho-comercial" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
              Derecho Comercial
            </h2>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Asesoramiento integral en derecho empresarial, sociedades y contratos comerciales 
              para el crecimiento y protección de tu negocio.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-4">
                Sección en Desarrollo
              </h3>
              <p className="font-inter text-gray-600">
                Estamos trabajando en el contenido detallado de esta área. 
                Mientras tanto, puedes contactarnos para recibir asesoramiento especializado.
              </p>
            </div>
          </div>
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

const CriminalLawSection = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  return (
    <section id="derecho-penal" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
              Derecho Penal
            </h2>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Defensa penal especializada, querellas y mediación penal con un enfoque 
              integral para proteger tus derechos.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-4">
                Sección en Desarrollo
              </h3>
              <p className="font-inter text-gray-600">
                Estamos trabajando en el contenido detallado de esta área. 
                Mientras tanto, puedes contactarnos para recibir asesoramiento especializado.
              </p>
            </div>
          </div>
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

const FamilyLawSection = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  return (
    <section id="derecho-familia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
              Derecho de Familia
            </h2>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Asesoramiento sensible y profesional en divorcios, tenencia, cuota alimentaria 
              y sucesiones, priorizando el bienestar familiar.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <Phone className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-4">
                Sección en Desarrollo
              </h3>
              <p className="font-inter text-gray-600">
                Estamos trabajando en el contenido detallado de esta área. 
                Mientras tanto, puedes contactarnos para recibir asesoramiento especializado.
              </p>
            </div>
          </div>
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

const MediationSection = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  return (
    <section id="mediacion" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
              Mediación
            </h2>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Resolución alternativa de conflictos y mediación civil para encontrar 
              soluciones pacíficas y eficientes.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-4">
                Sección en Desarrollo
              </h3>
              <p className="font-inter text-gray-600">
                Estamos trabajando en el contenido detallado de esta área. 
                Mientras tanto, puedes contactarnos para recibir asesoramiento especializado.
              </p>
            </div>
          </div>
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

export { CommercialLawSection, CriminalLawSection, FamilyLawSection, MediationSection }; 