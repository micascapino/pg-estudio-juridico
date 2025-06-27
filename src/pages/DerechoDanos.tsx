import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import DamagesLawSection from '@/components/DamagesLawSection';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';

const DerechoDanos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Derecho de Daños"
        subtitle="Nos especializamos en la rápida resolución de cualquier tipo de conflicto que surja de la Responsabilidad Civil en general, tanto contractual como extracontractual."
      />

      <ContentWithSidebar
        main={<DamagesLawSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoDanos; 