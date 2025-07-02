import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Scale } from 'lucide-react';
import { Card, Title, Body } from '@/components/design-system';

interface ContactFormData {
  name: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.message) {
      setIsSubmitting(false);
      return;
    }

    const whatsappMessage = `Hola, soy ${formData.name}. Mi consulta es: ${formData.message}.`;
    const whatsappUrl = `https://wa.me/5492235474966?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-xl">
      <div className="text-center pb-4 sm:pb-6">
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
        </div>
        <Title className="text-base sm:text-lg xl:text-xl mb-2 whitespace-nowrap">
          Consulte hoy un Abogado
        </Title>
        <Body className="text-xs sm:text-base mt-2">
          Complete el formulario y conversaremos por Whatsapp.
        </Body>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary text-sm sm:text-base"
          required
        />
        
        <Textarea
          name="message"
          placeholder="Comente brevemente su caso..."
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary min-h-[80px] sm:min-h-[100px] resize-none text-sm sm:text-base"
          required
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-poppins font-semibold py-2.5 sm:py-3 text-xs sm:text-base"
        >
          {isSubmitting ? 'ENVIANDO...' : 'ENVIAR CONSULTA'}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm; 