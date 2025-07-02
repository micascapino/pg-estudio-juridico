import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';
import SEO from '@/components/SEO';

const AmparosDeSaludSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Amparos de Salud
        </h2>
        
        <p className="text-gray-600 mb-6">
          Nos especializamos en la protección de tus derechos en salud, garantizando el acceso a tratamientos médicos, medicamentos y prestaciones que las obras sociales y prepagas deben cubrir.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Servicios Especializados
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Cobertura de tratamientos médicos especializados</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Autorización de medicamentos de alto costo</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Cirugías y procedimientos complejos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Internaciones prolongadas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Tratamientos de fertilización asistida</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Prestaciones para personas con discapacidad</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Nuestro Compromiso
            </h3>
            <p className="text-gray-600 mb-4">
              Entendemos que el acceso a la salud es un derecho fundamental. Por eso, trabajamos incansablemente para garantizar que recibas la atención médica que necesitas, sin demoras ni obstáculos burocráticos.
            </p>
            <p className="text-gray-600">
              Contamos con amplia experiencia en el manejo de amparos de salud, logrando resoluciones rápidas y efectivas para nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AmparosDeSalud = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Abogados Especialistas en Amparos de Salud"
        description="Protegemos tu derecho a la salud. Amparos para tratamientos médicos, medicamentos, cirugías, fertilización asistida. Abogados especializados en Mar del Plata."
        keywords="amparos de salud, obras sociales, prepagas, tratamientos médicos, medicamentos, abogados salud Mar del Plata"
        canonicalUrl="/amparos-de-salud"
      />
      
      <Navbar />
      
      <PageHeader 
        title="Amparos de Salud"
        subtitle="Protegemos tu derecho a la salud garantizando el acceso a tratamientos, medicamentos y prestaciones médicas esenciales."
      />

      <ContentWithSidebar
        main={<AmparosDeSaludSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default AmparosDeSalud; 