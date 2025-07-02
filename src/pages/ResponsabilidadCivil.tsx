import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const ResponsabilidadCivilSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Responsabilidad Civil
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          En Giamberardino – Petrocco & Asociados te asesoramos y representamos en reclamos por daños y perjuicios, para que puedas hacer valer tus derechos y obtener la reparación justa frente a situaciones que te generaron pérdidas o lesiones.
        </p>

        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          Nuestra misión es ofrecer un enfoque estratégico, humano y claro, buscando la mejor solución para cada caso, ya sea mediante acuerdo o vía judicial.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              ¿En qué te podemos ayudar?
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Accidentes de tránsito (choques, lesiones)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Lesiones personales y accidentes domésticos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Mala praxis médica</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Daños materiales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Responsabilidad por incumplimientos contractuales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Responsabilidad por vicios ocultos en compras o servicios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Reclamos extrajudiciales y judiciales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Negociación de indemnizaciones con seguros</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cálculo de daños materiales y morales</span>
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
                <span className="text-base sm:text-lg">Análisis detallado del caso y viabilidad del reclamo</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Negociación y búsqueda de acuerdos rápidos y satisfactorios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Representación judicial completa si no hay acuerdo</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Estrategia legal adaptada a cada cliente</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Transparencia en costos y honorarios</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Trato humano, empático y confidencial</span>
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
                  ¿Qué es la responsabilidad civil?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Es la obligación de reparar los daños causados a otra persona, ya sea por acción, omisión o culpa.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué tipos de daños se pueden reclamar?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Daños materiales, físicos, morales y lucro cesante.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Necesito abogado para hacer el reclamo?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Para demandas judiciales o negociaciones formales con compañías de seguros es indispensable contar con asesoramiento legal.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Se pueden hacer acuerdos sin juicio?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. En muchos casos buscamos acuerdos extrajudiciales para resolver más rápido y con menores costos.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué documentación necesito?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Pruebas del daño (fotos, facturas, presupuestos), datos de la otra parte, informes médicos o policiales, y cualquier otro documento relacionado.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Reclamá lo que te corresponde
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              En Giamberardino – Petrocco & Asociados trabajamos para que puedas obtener la indemnización justa por los daños sufridos, con profesionalismo y compromiso.
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

const ResponsabilidadCivil = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Responsabilidad Civil' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Abogados Especialistas en Responsabilidad Civil en Mar del Plata"
        description="Reclamos efectivos por daños y perjuicios. Accidentes de tránsito, mala praxis médica, lesiones personales y negociación con seguros. Reclamá lo que te corresponde. Estudio Giamberardino - Petrocco & Asociados."
        keywords="responsabilidad civil Mar del Plata, daños y perjuicios, accidentes de tránsito, mala praxis médica, lesiones personales, reclamos indemnización, negociación seguros, daños materiales morales"
        ogImage="https://pg-estudio-juridico.vercel.app/logo-estudio-gp.png"
        canonicalUrl="/responsabilidad-civil"
        type="service"
      />
      
      <Navbar />
      
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      <PageHeader 
        title="Responsabilidad Civil"
        subtitle="Reclamos efectivos por daños y perjuicios con enfoque estratégico y humano, buscando la reparación justa que te corresponde."
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