import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { CommercialLawSection } from '@/components/OtherLawSections';
import ContactForm from '@/components/ContactForm';
import { PageHeader, ContentWithSidebar } from '@/components/design-system';

const DerechoComercial = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Derecho Comercial"
        subtitle="Asesoramiento integral en derecho empresarial, sociedades y contratos comerciales para el crecimiento y protección de tu negocio."
      />

      <ContentWithSidebar
        main={<CommercialLawSection />}
        sidebar={<ContactForm />}
      />

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoComercial; 