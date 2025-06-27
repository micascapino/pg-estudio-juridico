import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { MediationSection } from '@/components/OtherLawSections';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';

const Mediacion = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Mediación"
        subtitle="Resolución alternativa de conflictos y mediación civil para encontrar soluciones pacíficas y eficientes."
      />

      <ContentWithSidebar
        main={<MediationSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Mediacion; 