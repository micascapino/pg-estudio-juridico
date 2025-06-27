import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const AppointmentBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });
  const formAnimation = useScrollReveal({ delay: 400 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola, soy ${formData.name}. Mi consulta es: ${formData.message}.`;
    const whatsappUrl = `https://wa.me/5492234373938?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4">
            Hablemos por Whatsapp
          </h2>
        </div>
        <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
          <p className="font-inter text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
            Envianos tu consulta y recibí orientación profesional.
          </p>
        </div>

        <div ref={formAnimation.elementRef} className={formAnimation.className}>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-custom-hover">
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Input
                placeholder="Nombre completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="font-inter text-sm sm:text-base"
              />
             
              <Textarea
                placeholder="Mi consulta es..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="font-inter text-sm sm:text-base"
              />
            </div>
            <Button 
              type="submit"
              className="w-full md:w-auto bg-primary hover:bg-primary-shade text-white font-semibold px-8 sm:px-12 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Enviar Consulta
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
