import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import AppointmentBanner from '@/components/AppointmentBanner';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contacto = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor completa los campos obligatorios.");
      setIsSubmitting(false);
      return;
    }

    // Simular envío del formulario
    setTimeout(() => {
      alert("¡Mensaje enviado! Nos comunicaremos contigo a la brevedad.");
     
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppContact = () => {
    const message = "Hola, me gustaría recibir asesoramiento legal. ¿Podrían ayudarme?";
    const whatsappUrl = `https://wa.me/5422343739388?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
                Contacto
              </h1>
            </div>
            <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
              <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                Si tenés alguna duda escribinos y nos comunicamos a la brevedad. 
                También podés visitarnos personalmente, estamos en pleno centro de Mar del Plata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-dark-gray mb-4">
              Nuestro Estudio
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Columna izquierda - Cards de información */}
            <div className="space-y-4">
              {/* Teléfono */}
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-poppins text-lg text-dark-gray font-semibold mb-2">
                        Teléfono
                      </h3>
                      <p className="font-inter text-base font-semibold text-primary mb-1">
                        +54 223 4373938
                      </p>
                      <div className="text-xs text-gray-600">
                        <p className="font-medium">Horario de atención:</p>
                        <p>Lun - Vie: 9:00 - 18:00</p>
                        <p>Sáb: 9:00 - 13:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-poppins text-lg text-dark-gray font-semibold mb-2">
                        E-mail
                      </h3>
                      <p className="font-inter text-base text-primary">
                        info@estudiojuridicogpmdp.com.ar
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dirección */}
              <Card>
                <CardContent className="p-4">
                  <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-poppins text-lg text-dark-gray font-semibold mb-2">
                        Dirección
                      </h3>
                      <p className="font-inter text-base text-gray-700">
                        Bolívar 3053: Piso 7 Oficina "C"<br />
                        Mar del Plata, Argentina
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Columna derecha - Mapa */}
            <div>
              <Card>
                <CardContent className="p-0">
                  <div className="h-96 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.1234567890123!2d-57.5569852347!3d-38.0054830742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc3bd7b41c1b%3A0x1234567890abcdef!2sBol%C3%ADvar%203053%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1704925800000!5m2!1ses!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación del Estudio Jurídico"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
      <AppointmentBanner />
     
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Contacto; 