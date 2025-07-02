import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';
import SEO from '@/components/SEO';

const SucesionesSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Sucesiones
        </h2>
        
        <p className="text-gray-600 mb-6">
          Te acompañamos en todos los aspectos legales relacionados con sucesiones, brindando asesoramiento integral y gestión de trámites judiciales para garantizar una transición ordenada del patrimonio familiar.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Servicios Especializados
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Declaratoria de herederos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Tramitación de testamentos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Partición de bienes hereditarios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Avalúo de bienes</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Liquidación de sociedades conyugales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Impugnación de testamentos</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Proceso Simplificado
            </h3>
            <p className="text-gray-600 mb-4">
              Entendemos que los procesos sucesorios pueden ser complejos y emocionalmente difíciles. Por eso, nos encargamos de todos los aspectos legales y administrativos, simplificando el proceso para que puedas enfocarte en lo que realmente importa.
            </p>
            <p className="text-gray-600">
              Nuestro equipo maneja cada caso con sensibilidad y profesionalismo, asegurando que todos los trámites se realicen de manera eficiente y dentro de los plazos establecidos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sucesiones = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Abogados Especialistas en Sucesiones"
        description="Asesoramiento integral en sucesiones y trámites judiciales. Declaratoria de herederos, testamentos, partición de bienes. Estudio jurídico en Mar del Plata."
        keywords="sucesiones, declaratoria de herederos, testamentos, partición de bienes, abogados sucesiones Mar del Plata"
        canonicalUrl="/sucesiones"
      />
      
      <Navbar />
      
      <PageHeader 
        title="Sucesiones"
        subtitle="Asesoramiento integral y gestión de trámites judiciales para garantizar una transición ordenada del patrimonio familiar."
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