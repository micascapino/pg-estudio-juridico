import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PracticeAreas from '@/components/PracticeAreas';
import AnimatedCounters from '@/components/MissionBanner';
import AppointmentBanner from '@/components/AppointmentBanner';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Giamberardino – Petrocco & Asociados - Abogados Especialistas en Mar del Plata"
        description="Estudio jurídico especializado en amparos de salud, derecho de familia, sucesiones y responsabilidad civil."
        keywords="abogados Mar del Plata, estudio jurídico, amparos de salud, derecho de familia, sucesiones, responsabilidad civil, consultoría jurídica"
        canonicalUrl="/"
      />
      
      <Navbar />
      <Hero />
      <PracticeAreas />
      <AnimatedCounters />
      <AboutSection />
      <AppointmentBanner />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Index;
