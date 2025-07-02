import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container, WhatsAppButton } from '@/components/design-system';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1920&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Content */}
      <Container className="relative z-10 text-center text-white max-w-6xl animate-fade-in">
        <h1 className="font-poppins font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 sm:mb-6">
          Giamberardino – Petrocco & Asociados
          <br className="sm:hidden" />
          <span className="text-accent"> Estudio jurídico con enfoque integral</span>
        </h1>

        <p className="font-inter text-base sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto">
          Brindamos asesoramiento legal estratégico en Mar del Plata y en todo el país. 
          Nuestra misión es defender tus derechos con compromiso, experiencia y cercanía.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button
            className="!bg-transparent border-2 border-white text-white hover:!bg-white hover:!text-primary font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
            onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conócenos
          </Button>

          <WhatsAppButton
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-custom text-sm sm:text-base w-full sm:w-auto"
          >
            Quiero Asesoramiento
          </WhatsAppButton>

        </div>
      </Container>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
