import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { CriminalLawSection } from '@/components/OtherLawSections';

const DerechoPenal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CriminalLawSection />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoPenal; 