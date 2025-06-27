import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LaborLawSection from '@/components/LaborLawSection';

const DerechoLaboral = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LaborLawSection />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoLaboral; 