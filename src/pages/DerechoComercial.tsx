import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { CommercialLawSection } from '@/components/OtherLawSections';

const DerechoComercial = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CommercialLawSection />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoComercial; 