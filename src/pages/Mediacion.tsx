import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { MediationSection } from '@/components/OtherLawSections';

const Mediacion = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MediationSection />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Mediacion; 