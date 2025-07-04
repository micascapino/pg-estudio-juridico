import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const DerechoLaboralSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Derecho Laboral
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          En Giamberardino – Petrocco & Asociados defendemos tus derechos laborales con compromiso y experiencia, asesorando tanto a trabajadores como a empleadores para resolver conflictos con claridad y soluciones efectivas.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              ¿En qué te ayudamos?
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Despidos con o sin causa</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Indemnizaciones y diferencias salariales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Accidentes de trabajo y ART</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Acoso laboral y mobbing</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Reclamos de horas extras y vacaciones</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Defensa de empleadores en reclamos laborales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Redacción y revisión de contratos de trabajo</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Asesoría preventiva para empresas y comercios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Conciliación y acuerdos extrajudiciales</span>
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
                <span className="text-base sm:text-lg">Atención personalizada y trato humano</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Estrategia legal clara y adaptada al caso</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Negociación y mediación para resolver conflictos rápido</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Representación integral en juicio si es necesario</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Confidencialidad y respeto absoluto</span>
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
                  ¿Cuándo puedo reclamar por despido injustificado?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Cuando tu empleador te despide sin justa causa o sin respetar los procedimientos legales establecidos. Tenés derecho a indemnización por despido, preaviso, integración del mes de despido y vacaciones proporcionales.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué hacer si sufro un accidente de trabajo?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Denunciá inmediatamente a tu empleador y a la ART. Si la ART no cubre adecuadamente o rechaza el reclamo, podés reclamar ante la justicia civil por daños y perjuicios.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Cuánto tiempo tengo para hacer un reclamo laboral?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Tenés dos años desde que finalizó la relación laboral para iniciar reclamos por créditos laborales. No esperes hasta último momento.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Puedo reclamar si trabajo en negro?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. El trabajo en negro no elimina tus derechos laborales. Podés reclamar por la registración laboral, aportes, vacaciones, aguinaldo e indemnizaciones correspondientes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué es el mobbing o acoso laboral?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Es la violencia psicológica sistemática en el trabajo que busca excluir, hostigar o intimidar al trabajador. Podés reclamar daños y perjuicios por el daño moral y físico causado.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Consultanos
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Si tenés un conflicto laboral o querés asesorarte para evitarlo, contactanos para recibir un asesoramiento claro, profesional y cercano.
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              Atendemos en Mar del Plata y en todo el país.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DerechoLaboral = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Derecho Laboral' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Abogados Especialistas en Derecho Laboral en Mar del Plata"
        description="Defendemos tus derechos laborales. Despidos, indemnizaciones, accidentes de trabajo, acoso laboral, horas extras, contratos laborales y asesoría para empresas. Estudio Giamberardino - Petrocco & Asociados."
        keywords="derecho laboral Mar del Plata, despidos injustificados, indemnizaciones laborales, accidentes de trabajo ART, acoso laboral mobbing, horas extras, contratos laborales, asesoría empresas, reclamos laborales"
        ogImage="https://pg-estudio-juridico.vercel.app/logo-estudio-gp.png"
        canonicalUrl="/derecho-laboral"
        type="service"
      />
      
      <Navbar />
      
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      <PageHeader 
        title="Derecho Laboral"
        subtitle="Protegemos tus derechos laborales con compromiso y experiencia, asesorando tanto a trabajadores como a empleadores."
      />

      <ContentWithSidebar
        main={<DerechoLaboralSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoLaboral; 