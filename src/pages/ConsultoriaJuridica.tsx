import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';
import SEO from '@/components/SEO';

const ConsultoriaJuridicaSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Consultoría Jurídica
        </h2>
        
        <p className="text-gray-600 mb-6">
          Brindamos asesoramiento legal integral permanente para empresas y particulares, ayudándote a tomar decisiones informadas y prevenir conflictos legales antes de que surjan.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Servicios para Empresas
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Asesoramiento en constitución de sociedades</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Redacción y revisión de contratos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Cumplimiento normativo y regulatorio</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Asesoramiento en fusiones y adquisiciones</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Resolución alternativa de conflictos</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Servicios para Particulares
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Planificación patrimonial</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Asesoramiento en inversiones inmobiliarias</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Contratos de compraventa y locación</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Asesoramiento en temas tributarios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Protección de datos personales</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Nuestro Valor Agregado
            </h3>
            <p className="text-gray-600 mb-4">
              Ofrecemos un servicio de consultoría que va más allá del asesoramiento puntual. Nos convertimos en tu socio estratégico, acompañándote en el crecimiento y desarrollo de tus proyectos.
            </p>
            <p className="text-gray-600 mb-4">
              Contamos con profesionales especializados en diferentes áreas del derecho, lo que nos permite brindar soluciones integrales adaptadas a las necesidades específicas de cada cliente.
            </p>
            <p className="text-gray-600">
              Nuestro enfoque preventivo te ayuda a evitar costosos litigios y a tomar decisiones más informadas en todos los aspectos legales de tu actividad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConsultoriaJuridica = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Consultoría Jurídica Integral"
        description="Asesoramiento legal integral para empresas y particulares. Constitución de sociedades, contratos, cumplimiento normativo. Estudio jurídico en Mar del Plata."
        keywords="consultoría jurídica, asesoramiento legal, constitución sociedades, contratos, abogados empresas Mar del Plata"
        canonicalUrl="/consultoria-juridica"
      />
      
      <Navbar />
      
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