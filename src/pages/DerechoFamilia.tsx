import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { FamilyLawSection } from '@/components/OtherLawSections';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar, Breadcrumbs } from '@/components/design-system';
import SEO from '@/components/SEO';

const DerechoFamilia = () => {
  const breadcrumbItems = [
    { label: 'Servicios', href: '/#areas' },
    { label: 'Derecho de Familia' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Abogados Especialistas en Derecho de Familia en Mar del Plata"
        description="Asesoramiento en divorcios, tenencia, cuota alimentaria y régimen de visitas en Mar del Plata. Priorizamos el bienestar familiar con enfoque sensible y profesional."
        keywords="derecho de familia Mar del Plata, divorcios, tenencia hijos, cuota alimentaria, régimen visitas, cuidado personal, abogados familia"
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
        title="Derecho de Familia en Mar del Plata"
        subtitle="Asesoramiento sensible y profesional en divorcios, tenencia, cuota alimentaria y régimen de visitas, priorizando el bienestar familiar."
      />

      <ContentWithSidebar
        main={<FamilyLawSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoFamilia; 