import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { FamilyLawSection } from '@/components/OtherLawSections';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';

const DerechoFamilia = () => {
  return (
    <div className="min-h-screen bg-white">
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