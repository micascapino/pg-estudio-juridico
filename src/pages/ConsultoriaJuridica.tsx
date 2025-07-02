import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const ConsultoriaJuridicaSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Consultoría Jurídica
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          Brindamos asesoramiento legal integral permanente para empresas y particulares, ayudándote a tomar decisiones informadas y prevenir conflictos legales antes de que surjan.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Servicios para Empresas
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento en constitución de sociedades</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Redacción y revisión de contratos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cumplimiento normativo y regulatorio</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento en fusiones y adquisiciones</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Resolución alternativa de conflictos</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Servicios para Particulares
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Planificación patrimonial</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento en inversiones inmobiliarias</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Contratos de compraventa y locación</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento en temas tributarios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Protección de datos personales</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Nuestro Valor Agregado
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Ofrecemos un servicio de consultoría que va más allá del asesoramiento puntual. Nos convertimos en tu socio estratégico, acompañándote en el crecimiento y desarrollo de tus proyectos.
            </p>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Contamos con profesionales especializados en diferentes áreas del derecho, lo que nos permite brindar soluciones integrales adaptadas a las necesidades específicas de cada cliente.
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              Nuestro enfoque preventivo te ayuda a evitar costosos litigios y a tomar decisiones más informadas en todos los aspectos legales de tu actividad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConsultoriaJuridica = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Consultoría Jurídica' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Consultoría Jurídica Integral para Empresas en Mar del Plata"
        description="Asesoramiento legal integral para empresas y particulares en Mar del Plata. Constitución de sociedades, contratos, cumplimiento normativo y planificación patrimonial."
        keywords="consultoría jurídica Mar del Plata, asesoramiento legal empresas, constitución sociedades, contratos comerciales, abogados empresas, planificación patrimonial"
        canonicalUrl="/consultoria-juridica"
        type="service"
      />
      
      <Navbar />
      
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      <PageHeader 
        title="Consultoría Jurídica"
        subtitle="Asesoramiento legal integral permanente para empresas y particulares, con enfoque preventivo y soluciones estratégicas."
      />

      <ContentWithSidebar
        main={<ConsultoriaJuridicaSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default ConsultoriaJuridica; 