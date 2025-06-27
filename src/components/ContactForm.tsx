import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale } from 'lucide-react';

interface ContactFormData {
  name: string;
  whatsapp: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    whatsapp: '',
    email: '',
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

    if (!formData.name || !formData.whatsapp || !formData.email || !formData.message) {
      setIsSubmitting(false);
      return;
    }

      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-xl">
      <CardHeader className="text-center pb-4 sm:pb-6">
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="font-poppins text-lg sm:text-2xl text-dark-gray">
          Consultá hoy un Abogado
        </CardTitle>
        <CardDescription className="font-inter text-xs sm:text-base text-gray-600 mt-2">
          Completa el formulario y te contactaremos para brindarte el asesoramiento que necesitas.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary text-sm sm:text-base"
              required
            />
          </div>
          
          <div>
            <Input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp (sin 0, sin 15)"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary text-sm sm:text-base"
              required
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary text-sm sm:text-base"
              required
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Comenta brevemente tu caso..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary min-h-[80px] sm:min-h-[100px] resize-none text-sm sm:text-base"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white font-poppins font-semibold py-2.5 sm:py-3 text-xs sm:text-base"
          >
            {isSubmitting ? 'ENVIANDO...' : 'QUIERO QUE ME CONTACTEN'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm; 