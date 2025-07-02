import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';

const ResponsabilidadCivilSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Responsabilidad Civil
        </h2>
        
        <p className="text-gray-600 mb-6">
          Nos especializamos en reclamos por daños y perjuicios en todas sus modalidades, defendiendo tus derechos ante situaciones que hayan causado perjuicios patrimoniales o morales.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Áreas de Especialización
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Accidentes de tránsito</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Mala praxis médica</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Responsabilidad por productos defectuosos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Daños en la construcción</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Responsabilidad contractual</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Daño moral y psicológico</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Nuestro Enfoque
            </h3>
            <p className="text-gray-600 mb-4">
              Evaluamos cada caso de manera integral, analizando todos los aspectos técnicos y legales para determinar la viabilidad del reclamo y la estrategia más efectiva para obtener la reparación correspondiente.
            </p>
            <p className="text-gray-600 mb-4">
              Trabajamos con peritos especializados y profesionales de diferentes disciplinas para construir casos sólidos que maximicen las posibilidades de éxito.
            </p>
            <p className="text-gray-600">
              Nuestro objetivo es lograr una reparación integral que cubra tanto los daños materiales como el daño moral sufrido por nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResponsabilidadCivil = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Responsabilidad Civil"
        subtitle="Reclamos por daños y perjuicios en todas sus modalidades, defendiendo tus derechos con estrategias legales efectivas."
      />

      <ContentWithSidebar
        main={<ResponsabilidadCivilSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default ResponsabilidadCivil; 