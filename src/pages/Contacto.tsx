import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import AppointmentBanner from '@/components/AppointmentBanner';
import { PageHeader, Container, ContactInfoCard, Card, SectionHeader, Grid, Title, Section, ButtonSystem, InputField, TextareaField } from '@/components/design-system';
import { CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor completa los campos obligatorios.");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      alert("¡Mensaje enviado! Nos comunicaremos contigo a la brevedad.");
      
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
    const whatsappUrl = `https://wa.me/5492235474966?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contacto - Estudio Jurídico"
        description="Contactá a nuestro estudio jurídico en Mar del Plata. Atención personalizada, consultas presenciales y virtuales. Estamos en pleno centro de la ciudad."
        keywords="contacto abogados, estudio jurídico Mar del Plata, consulta legal, asesoramiento jurídico"
        canonicalUrl="/contacto"
      />
      
      <Navbar />
      
      <PageHeader 
        title="Contacto"
        subtitle="Si tenés alguna duda escribinos y nos comunicamos a la brevedad. También podés visitarnos personalmente, estamos en pleno centro de Mar del Plata."
      />

      <Section className="py-12 sm:py-16">
        <Container>
          <SectionHeader>
            <Title>Nuestro Estudio</Title>
          </SectionHeader>

          <Grid cols="3" className="mb-12 sm:mb-16">
            <ContactInfoCard
              icon={<Phone className="h-5 w-5 sm:h-6 sm:w-6" />}
              title="Teléfono"
              content="+54 223 555-0123"
              subtitle={
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    Lun-Vie: 9:00-18:00
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    Sáb: 9:00-13:00
                  </div>
                </div>
              }
            />
            
            <ContactInfoCard
              icon={<Mail className="h-5 w-5 sm:h-6 sm:w-6" />}
              title="E-mail"
              content="info@estudiogp.com.ar"
              subtitle="Respuesta en 24 horas"
            />
            
            <ContactInfoCard
              icon={<MapPin className="h-5 w-5 sm:h-6 sm:w-6" />}
              title="Dirección"
              content="Av. Independencia 1234, 7° piso, Mar del Plata"
              subtitle="Pleno centro de la ciudad"
            />
          </Grid>

          <Grid cols="2" className="gap-8 lg:gap-12">
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark-gray mb-2">
                    Escribinos
                  </h3>
                  <p className="text-gray-600">
                    Envianos tu consulta y nos comunicaremos contigo a la brevedad.
                  </p>
                </div>

                <Grid cols="2">
                  <InputField
                    label="Nombre completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid cols="2">
                  <InputField
                    label="Teléfono"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <TextareaField
                  label="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />

                <ButtonSystem type="submit" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Enviar Consulta
                </ButtonSystem>
              </form>
            </Card>

            <Card className="overflow-hidden">
              <div className="p-6 sm:p-8 pb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-dark-gray mb-4">
                  Ubicación del Estudio Jurídico
                </h3>
                <p className="text-gray-600 mb-6">
                  Nos encontramos en pleno centro de Mar del Plata, con fácil acceso en transporte público y estacionamiento cercano.
                </p>
                
                <ButtonSystem 
                  variant="outline" 
                  className="mb-6"
                  onClick={() => window.open('https://maps.google.com/?q=Av.+Independencia+1234,+Mar+del+Plata', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver en Google Maps
                </ButtonSystem>
              </div>
              
              <div className="h-64 sm:h-80 bg-gray-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.123456789!2d-57.5500000!3d-38.0000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAwJzAwLjAiUyA1N8KwMzMnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Estudio Jurídico Giamberardino – Petrocco & Asociados"
                />
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>

      <AppointmentBanner />
     
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Contacto; 