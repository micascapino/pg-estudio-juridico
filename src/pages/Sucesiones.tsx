import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const SucesionesSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Sucesiones
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          En Giamberardino – Petrocco & Asociados brindamos asesoramiento integral y representación en trámites sucesorios.
          Sabemos que gestionar una sucesión implica momentos difíciles y la necesidad de resolver cuestiones patrimoniales con claridad, legalidad y respeto hacia la familia.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              ¿En qué podemos ayudarte?
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Tramitación completa de sucesiones judiciales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Declaratoria de herederos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Inscripción de bienes inmuebles</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Partición de herencia</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Aceptación o renuncia de herencia</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Sucesiones con o sin testamento</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento para acuerdos entre herederos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Regularización de bienes heredados</span>
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
                <span className="text-base sm:text-lg">Atención personalizada y asesoramiento claro</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Estrategia para resolver conflictos entre herederos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Gestión integral de expedientes judiciales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Transparencia en costos y etapas del proceso</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Confidencialidad y trato respetuoso</span>
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
                  ¿Qué es un juicio sucesorio?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Es el trámite judicial necesario para declarar quiénes son los herederos y permitirles disponer legalmente de los bienes del causante.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Es obligatorio hacerlo?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Sin sucesión no se pueden vender, donar ni inscribir inmuebles ni acceder a ciertos bienes bancarios o vehículos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Cuánto tiempo tarda?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Depende del caso y la jurisdicción. En general, los plazos pueden ir de unos pocos meses a un año o más, según la complejidad y la colaboración de los herederos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué documentación se necesita?
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Partida de defunción</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Partidas de nacimiento/matrimonio de herederos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">DNI de las partes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Títulos de propiedad o datos de bienes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Puede haber conflictos entre herederos?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí, pero se pueden resolver mediante acuerdos homologados o, si es necesario, a través de la vía judicial.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Asesorate con profesionales de confianza
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              En Giamberardino – Petrocco & Asociados te ayudamos a gestionar tu sucesión con claridad, respeto y acompañamiento constante.
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

const Sucesiones = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Sucesiones' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Sucesiones en Mar del Plata | Juicios Sucesorios y Declaratoria de Herederos"
        description="Especialistas en trámites sucesorios completos. Declaratoria de herederos, inscripción bienes inmuebles, partición herencia, aceptación renuncia herencia, sucesiones con y sin testamento, acuerdos entre herederos en Mar del Plata."
        keywords="sucesiones Mar del Plata, juicios sucesorios, declaratoria herederos, inscripción bienes inmuebles, partición herencia, aceptación renuncia herencia, sucesiones testamento, acuerdos herederos, regularización bienes heredados, trámites judiciales sucesión"
        canonicalUrl="/sucesiones"
        type="service"
      />
      
      <Navbar />
      
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      <PageHeader 
        title="Sucesiones"
        subtitle="Tramitación completa de sucesiones judiciales con asesoramiento integral, claridad y respeto hacia las familias en momentos difíciles."
      />

      <ContentWithSidebar
        main={<SucesionesSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Sucesiones; 