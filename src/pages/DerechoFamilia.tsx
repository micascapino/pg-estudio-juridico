import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { FamilyLawSection } from '@/components/OtherLawSections';

const DerechoFamilia = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FamilyLawSection />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoFamilia; 