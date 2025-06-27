import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LaborLawSection from '@/components/LaborLawSection';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';

const DerechoLaboral = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Derecho Laboral"
        subtitle="Brindamos asesoramiento para resolución de todo tipo de conflictos de índole laboral, poniendo como meta la mediación de intereses entre empleador y empleado."
      />

      <ContentWithSidebar
        main={<LaborLawSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoLaboral; 