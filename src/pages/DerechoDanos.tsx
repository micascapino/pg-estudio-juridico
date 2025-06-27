import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import DamagesLawSection from '@/components/DamagesLawSection';

const DerechoDanos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DamagesLawSection />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoDanos; 