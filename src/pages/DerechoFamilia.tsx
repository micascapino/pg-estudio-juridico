import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { FamilyLawSection } from '@/components/OtherLawSections';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';
import SEO from '@/components/SEO';

const DerechoFamilia = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Abogados Especialistas en Derecho de Familia"
        description="Asesoramiento en divorcios, tenencia, cuota alimentaria y sucesiones. Priorizamos el bienestar familiar con enfoque sensible y profesional en Mar del Plata."
        keywords="derecho de familia, divorcios, tenencia, cuota alimentaria, régimen de visitas, abogados familia Mar del Plata"
        canonicalUrl="/derecho-familia"
      />
      
      <Navbar />
      
      <PageHeader 
        title="Derecho de Familia"
        subtitle="Asesoramiento sensible y profesional en divorcios, tenencia, cuota alimentaria y sucesiones, priorizando el bienestar familiar."
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