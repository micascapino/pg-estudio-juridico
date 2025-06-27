
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

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
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
          Abogados especializados en soluciones legales
          <br />
          <span className="text-accent">claras y efectivas.</span>
        </h1>

        <p className="font-inter text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Más de 15 años de experiencia brindando asesoramiento legal integral
          con un enfoque personalizado y resultados comprobados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-custom"
            onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conócenos
          </Button>

          <Button
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/5492234373938', '_blank')}
          >
            Quiero Asesoramiento
          </Button>
        </div>
      </div>

  
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
