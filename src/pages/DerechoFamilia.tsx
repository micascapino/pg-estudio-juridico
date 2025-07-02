import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const DerechoFamiliaSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Derecho de Familia
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          En Giamberardino – Petrocco & Asociados brindamos asesoramiento y representación legal en temas de derecho de familia, acompañando a nuestros clientes en momentos sensibles con compromiso, empatía y profesionalismo.
          Entendemos que cada familia es única y que detrás de cada consulta hay un proyecto de vida que merece respeto y soluciones claras.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              ¿En qué podemos ayudarte?
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Ofrecemos asistencia en:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Divorcios (de común acuerdo o contenciosos)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Alimentos (fijación, actualización, cobro de deudas)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cuidado personal (tenencia) y régimen de comunicación</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Acuerdos parentales y homologaciones judiciales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Violencia familiar (medidas de protección)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Reclamación o impugnación de filiación</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Adopciones</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Convenios y mediación familiar</span>
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
                <span className="text-base sm:text-lg">Asesoramiento claro y personalizado</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Estrategia legal adaptada a cada familia</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Gestión integral de expedientes judiciales y acuerdos extrajudiciales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Prioridad en la protección de niños, niñas y adolescentes</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Acompañamiento humano en todo el proceso</span>
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
                  ¿Qué documentación necesito para iniciar un divorcio?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Acta de matrimonio, DNI de las partes y actas de nacimiento de hijos, si los hubiera.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Es necesario llegar a un acuerdo?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Es lo ideal. El Código Civil y Comercial promueve acuerdos para resolver de forma más rápida y amigable, pero si no hay acuerdo se puede iniciar de forma contenciosa.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué pasa si no se pagan los alimentos?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Se pueden reclamar judicialmente y ejecutar deudas. El incumplimiento reiterado puede generar sanciones.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Cómo se fija el cuidado personal de los hijos?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Se prioriza el interés superior del niño. Puede ser compartido o unilateral, según cada caso.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Puedo acordar visitas si hay restricciones?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí, pero siempre respetando las medidas de protección vigentes y garantizando seguridad para todas las partes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Tu familia merece soluciones claras y humanas
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              En Giamberardino – Petrocco & Asociados te asesoramos para encontrar la mejor salida legal, con respeto y empatía.
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

const DerechoFamilia = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Derecho de Familia' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Derecho de Familia en Mar del Plata | Divorcios, Tenencia y Alimentos"
        description="Abogados especialistas en derecho de familia. Divorcios consensuados y contenciosos, cuidado personal, régimen de comunicación, alimentos, violencia familiar, adopciones, acuerdos parentales y mediación familiar en Mar del Plata."
        keywords="derecho de familia Mar del Plata, divorcios consensuados contenciosos, cuidado personal tenencia, régimen comunicación, alimentos fijación actualización, violencia familiar medidas protección, adopciones, acuerdos parentales, mediación familiar, filiación"
        canonicalUrl="/derecho-familia"
        type="service"
      />
      
      <Navbar />
      
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      <PageHeader 
        title="Derecho de Familia"
        subtitle="Asesoramiento sensible y profesional en divorcios, tenencia, cuota alimentaria y régimen de visitas, priorizando el bienestar familiar."
      />

      <ContentWithSidebar
        main={<DerechoFamiliaSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoFamilia; 