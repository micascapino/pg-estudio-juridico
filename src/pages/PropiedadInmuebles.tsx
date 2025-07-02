import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const PropiedadInmueblesSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Propiedad y Bienes Inmuebles
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          En Giamberardino – Petrocco & Asociados te ofrecemos asesoramiento integral para resolver todas las cuestiones legales vinculadas a propiedades e inmuebles.
          Sabemos que una operación inmobiliaria segura y clara es clave para tu tranquilidad. Te acompañamos en cada paso con profesionalismo y experiencia.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              ¿En qué te podemos ayudar?
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Contratos de compraventa y boletos de reserva</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento en locaciones urbanas y rurales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Redacción y análisis de contratos de alquiler</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Juicios de desalojo</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Usucapión (prescripción adquisitiva)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Subdivisiones y reglamentos de propiedad horizontal</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Regularización de títulos de propiedad</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Conflictos por límites o medianería</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Nuestro enfoque
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Redacción y análisis legal claro y adaptado a tus necesidades</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Prevención de conflictos futuros</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Negociación profesional y acompañamiento en escrituras</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Representación judicial en reclamos o defensas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Confidencialidad y trato personalizado</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Preguntas frecuentes
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Es necesario revisar un contrato antes de firmar?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Evitás cláusulas abusivas, vacíos legales y posibles conflictos futuros.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué es la usucapión?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Es el proceso judicial para adquirir la propiedad de un inmueble por posesión continua y pacífica durante un plazo legal.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Hacen desalojos?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Representamos propietarios en juicios de desalojo por falta de pago o vencimiento del contrato.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Puedo regularizar una propiedad heredada?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Realizamos trámites de sucesión y posterior inscripción a nombre de los herederos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Atienden contratos de alquiler comercial?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Redactamos, revisamos y negociamos contratos de locación para vivienda o uso comercial.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Protegé tu propiedad con respaldo legal
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              En Giamberardino – Petrocco & Asociados te brindamos asesoramiento claro y soluciones legales en todas las etapas de tu operación inmobiliaria.
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              Atendemos en Mar del Plata y en toda la provincia de Buenos Aires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropiedadInmuebles = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Propiedad y Bienes Inmuebles' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Derecho Inmobiliario en Mar del Plata | Compraventa y Locaciones"
        description="Operaciones inmobiliarias seguras con respaldo legal. Compraventa, locaciones, desalojos, usucapión y regularización de títulos. Protege tu propiedad con asesoramiento profesional. Estudio Giamberardino - Petrocco & Asociados."
        keywords="derecho inmobiliario Mar del Plata, contratos compraventa, boletos reserva, locaciones urbanas rurales, juicios desalojo, usucapión prescripción adquisitiva, subdivisiones, propiedad horizontal, regularización títulos, conflictos límites medianería"
        ogImage="https://pg-estudio-juridico.vercel.app/logo-estudio-gp.png"
        canonicalUrl="/propiedad-inmuebles"
        type="service"
      />
      
      <Navbar />
      
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      <PageHeader 
        title="Propiedad y Bienes Inmuebles"
        subtitle="Asesoramiento integral para operaciones inmobiliarias seguras, desde contratos hasta resolución de conflictos de propiedad."
      />

      <ContentWithSidebar
        main={<PropiedadInmueblesSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default PropiedadInmuebles; 