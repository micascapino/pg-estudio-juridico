import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import DamagesLawSection from '@/components/DamagesLawSection';
import ContactForm from '@/components/ContactForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const DerechoDanos = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
              <h1 className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-dark-gray mb-3 sm:mb-4">
                Derecho de Daños
              </h1>
            </div>
            <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
              <p className="font-inter text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Nos especializamos en la rápida resolución de cualquier tipo de conflicto que surja de la 
                Responsabilidad Civil en general, tanto contractual como extracontractual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Sidebar */}
      <div className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Main Content - 2/3 width on desktop */}
            <div className="lg:col-span-2">
              <DamagesLawSection />
            </div>
            
            {/* Sidebar - 1/3 width on desktop */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default DerechoDanos; 