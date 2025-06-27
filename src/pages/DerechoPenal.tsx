import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { CriminalLawSection } from '@/components/OtherLawSections';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';

const DerechoPenal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Derecho Penal"
        subtitle="Defensa penal especializada, querellas y mediación penal con un enfoque integral para proteger tus derechos."
      />

      <ContentWithSidebar
        main={<CriminalLawSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoPenal; 