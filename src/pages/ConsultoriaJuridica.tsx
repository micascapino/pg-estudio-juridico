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
          Consultoría Jurídica Permanente
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          En Giamberardino – Petrocco & Asociados ofrecemos un servicio de consultoría jurídica permanente pensado para empresas, profesionales, instituciones y particulares que requieren asesoramiento legal continuo y confiable.
          Nuestro objetivo es brindar prevención de conflictos, planificación estratégica y soluciones rápidas ante problemas legales cotidianos.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              ¿En qué te podemos ayudar?
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento legal integral en diversas áreas (civil, comercial, laboral, familia)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Redacción y análisis de contratos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Prevención de conflictos y reclamos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Representación en negociaciones extrajudiciales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Orientación legal para decisiones estratégicas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Auditoría de documentación y procesos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Atención preferencial y seguimiento continuo</span>
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
                <span className="text-base sm:text-lg">Atención personalizada y cercana</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoramiento claro y práctico</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Estrategias legales diseñadas para tu actividad o necesidad</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Confidencialidad absoluta</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Flexibilidad en planes de consulta y atención</span>
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
                  ¿Qué es la consultoría jurídica permanente?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Es un servicio de asesoramiento legal continuo para resolver dudas, prevenir problemas y tomar decisiones informadas con respaldo jurídico.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿A quién está dirigido?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  A empresas, comercios, profesionales independientes, instituciones y también a particulares que deseen contar con respaldo legal constante.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Cómo funciona?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Ofrecemos planes de consulta mensual o por cantidad de horas, adaptados a cada cliente. Se puede coordinar atención presencial, virtual o telefónica.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Incluye juicios o demandas?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  La consultoría cubre el análisis, prevención y estrategias. Para litigios específicos, se acuerda un honorario preferencial para nuestros clientes de consultoría.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Por qué conviene contratar este servicio?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Porque anticiparse a los problemas legales reduce costos, conflictos y tiempos. Contar con asesoría constante genera tranquilidad y seguridad en cada decisión.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Tu consulta legal, siempre a mano
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              En Giamberardino – Petrocco & Asociados te ofrecemos acompañamiento jurídico permanente, para que tomes decisiones seguras y resuelvas tus dudas con profesionales de confianza.
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

const ConsultoriaJuridica = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Consultoría Jurídica' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Consultoría Jurídica Permanente Mar del Plata | Asesoramiento Empresas"
        description="Asesoramiento jurídico continuo para empresas y particulares. Prevención de conflictos, redacción de contratos y decisiones estratégicas seguras. Tu consulta legal siempre a mano. Estudio Giamberardino - Petrocco & Asociados."
        keywords="consultoría jurídica permanente Mar del Plata, asesoramiento legal empresas, redacción análisis contratos, prevención conflictos reclamos, negociaciones extrajudiciales, orientación legal decisiones estratégicas, auditoría documentación procesos, atención preferencial continua"
        ogImage="https://pg-estudio-juridico.vercel.app/logo-estudio-gp.png"
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
        subtitle="Servicio de asesoramiento legal continuo y confiable para empresas, profesionales e instituciones que requieren respaldo jurídico permanente."
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