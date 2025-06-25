
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AppointmentBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola, soy ${formData.name}. Mi consulta es: ${formData.message}. Mi teléfono: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">
          ¿Necesitas Asesoramiento Legal?
        </h2>
        <p className="font-inter text-xl text-white/90 mb-8">
          Agenda tu consulta gratuita y recibe orientación profesional
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-custom-hover">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Input
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="font-inter"
            />
            <Input
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="font-inter"
            />
            <Textarea
              placeholder="Describe tu consulta"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="font-inter md:col-span-1"
              rows={1}
            />
          </div>
          <Button 
            type="submit"
            className="w-full md:w-auto bg-primary hover:bg-primary-shade text-white font-semibold px-12 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Agendar Cita
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentBanner;
