import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const AmparosDeSaludSection = () => {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-dark-gray mb-6">
          Amparos de Salud
        </h2>
        
        <p className="text-gray-600 mb-6 text-base sm:text-lg">
          En Giamberardino – Petrocco & Asociados nos especializamos en acciones de amparo para garantizar el acceso efectivo al derecho a la salud.
          Cuando obras sociales, prepagas o el Estado niegan o demoran la cobertura de tratamientos, medicaciones, cirugías o prestaciones esenciales, el amparo es la herramienta legal para exigir su cumplimiento en forma rápida y eficaz.
        </p>

        <div className="grid gap-6 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              ¿Qué cubren los amparos de salud?
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Intervenimos en casos como:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cobertura de medicamentos de alto costo (biológicos, oncológicos, tratamientos crónicos)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cirugías complejas o bariátricas denegadas o demoradas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Internaciones prolongadas o psiquiátricas rechazadas por la obra social/prepaga</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Tratamientos oncológicos completos, quimioterapia y radioterapia</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Fertilización asistida y tratamientos de reproducción médicamente asistida</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Rehabilitaciones y terapias prolongadas (kinesiología, fonoaudiología, neurorehabilitación)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cobertura integral para personas con discapacidad (medicación, tratamientos, transporte, asistentes personales)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Reafiliación o reinscripción a obra social o prepaga tras bajas injustificadas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Demoras o negativas arbitrarias en autorizaciones médicas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cobertura de implantes médicos (válvulas, stents, lentes intraoculares, prótesis)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Estudios diagnósticos de alta complejidad negados o limitados</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Cobertura de insumos médicos descartables o permanentes (bombas de insulina, dispositivos)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Atención domiciliaria o cuidados paliativos cuando están indicados</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Internación en centros especializados (clínicas de salud mental, centros de rehabilitación)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Transporte sanitario o traslados para tratamientos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Medicamentos huérfanos para enfermedades poco frecuentes</span>
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
                <span className="text-base sm:text-lg">Atención personalizada y humana</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Estrategia legal clara y eficaz</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Acceso rápido a medidas cautelares para cobertura inmediata</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Seguimiento constante del caso</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-base sm:text-lg">Confidencialidad y compromiso ético</span>
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
                  ¿Qué es un amparo de salud?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Es una acción judicial rápida para garantizar el acceso a tratamientos médicos cuando la obra social, prepaga o el Estado lo niegan o demoran injustificadamente.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Cuánto tiempo tarda?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Depende del caso, pero al ser un proceso urgente suele resolverse en semanas, con posibilidad de obtener medidas cautelares inmediatas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Necesito abogado?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. Es un trámite judicial que requiere presentación profesional y argumentos claros para lograr la cobertura.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Qué documentación necesito?
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Prescripción médica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Negativa o silencio de la obra social/prepaga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Carnet o constancia de afiliación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Historia clínica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">DNI</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2 text-base sm:text-lg">
                  ¿Puedo reclamar si soy monotributista o trabajador independiente?
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">
                  Sí. El derecho a la salud es universal. Obras sociales y prepagas están obligadas a cubrir las prestaciones incluidas en el PMO y otras necesarias según el diagnóstico.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-dark-gray mb-4">
              Defendé tu derecho a la salud
            </h3>
            <p className="text-gray-600 mb-4 text-base sm:text-lg">
              Si tu obra social o prepaga rechaza cubrir un tratamiento, no esperes más.
              En Giamberardino – Petrocco & Asociados te asesoramos y te acompañamos en cada paso para hacer valer tus derechos.
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

const AmparosDeSalud = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Amparos de Salud' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Abogados Especialistas en Amparos de Salud en Mar del Plata"
        description="Defendemos tu derecho a la salud con amparos efectivos. Cobertura de medicamentos de alto costo, cirugías bariátricas, tratamientos oncológicos, fertilización asistida e internaciones. Estudio Giamberardino - Petrocco & Asociados."
        keywords="amparos de salud Mar del Plata, medicamentos alto costo, cirugías bariátricas, tratamientos oncológicos, fertilización asistida, internaciones psiquiátricas, rehabilitaciones, cobertura discapacidad, reafiliación obra social, medidas cautelares salud"
        ogImage="https://pg-estudio-juridico.vercel.app/logo-estudio-gp.png"
        canonicalUrl="/amparos-de-salud"
        type="service"
      />
      
      <Navbar />
      
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
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