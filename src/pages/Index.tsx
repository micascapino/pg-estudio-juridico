import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import AppointmentBanner from '@/components/AppointmentBanner';
import AboutSection from '@/components/AboutSection';
import MissionBanner from '@/components/AnimatedCounters';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <MissionBanner />
      <AboutSection />
      <AppointmentBanner />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Index;
