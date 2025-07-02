import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const ContratosSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Contratos
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          En Giamberardino – Petrocco & Asociados brindamos asesoramiento integral en redacción, revisión y negociación de contratos, para que puedas tomar decisiones seguras y evitar conflictos futuros.
          Contar con un abogado para analizar y redactar tus contratos garantiza claridad, seguridad jurídica y prevención de problemas.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              ¿En qué te podemos ayudar?
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Redacción de contratos civiles y comerciales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Análisis y revisión de contratos existentes</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Negociación de cláusulas y condiciones</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Contratos de locación (alquiler de inmuebles)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Contratos de compraventa</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Contratos de servicios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Convenios entre socios o partes</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cartas de intención y acuerdos preliminares</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Ajustes y actualizaciones según normativa vigente</span>
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
                <span className="text-base sm:text-lg">Análisis claro y detallado de cada cláusula</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Adaptación del contrato a las necesidades reales del cliente</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Identificación de riesgos y sugerencia de mejoras</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento en lenguaje claro, evitando tecnicismos innecesarios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Confidencialidad absoluta y trato personalizado</span>
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
                  ¿Por qué es importante revisar un contrato antes de firmarlo?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Porque podés evitar cláusulas abusivas, vacíos legales o compromisos desventajosos. Un análisis previo previene problemas futuros.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Puedo pedirles solo la redacción o revisión?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Podés contratar solo la redacción de un nuevo contrato o la revisión de uno ya hecho.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Atienden contratos entre particulares y empresas?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Trabajamos tanto para personas físicas como para pymes o profesionales.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué documentos necesito para empezar?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Datos de las partes, condiciones acordadas, borradores previos si los hay y cualquier información relevante para el objeto del contrato.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Ofrecen asesoramiento online?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Podemos trabajar 100% a distancia, enviando documentos por correo o WhatsApp y coordinando llamadas o videollamadas.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Asesorate antes de firmar
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              En Giamberardino – Petrocco & Asociados te ayudamos a redactar, revisar y negociar contratos con seguridad y confianza.
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

const Contratos = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Contratos' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contratos Civiles y Comerciales en Mar del Plata | Redacción y Revisión"
        description="Especialistas en redacción, revisión y negociación de contratos. Contratos de locación, compraventa, servicios, convenios entre socios, cartas de intención y acuerdos preliminares en Mar del Plata."
        keywords="contratos civiles comerciales Mar del Plata, redacción contratos, revisión contratos, negociación cláusulas, contratos locación alquiler, contratos compraventa, contratos servicios, convenios socios, cartas intención, acuerdos preliminares"
        canonicalUrl="/contratos"
        type="service"
      />
      
      <Navbar />
      
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      <PageHeader 
        title="Contratos"
        subtitle="Asesoramiento integral en redacción, revisión y negociación de contratos para decisiones seguras y prevención de conflictos futuros."
      />

      <ContentWithSidebar
        main={<ContratosSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Contratos; 