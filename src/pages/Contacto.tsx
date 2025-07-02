import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useState } from 'react';


import { Phone, Mail, MapPin, Send } from 'lucide-react';
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
        title="Contacto - Giamberardino – Petrocco & Asociados"
        description="Contacta a Giamberardino – Petrocco & Asociados para obtener asesoramiento legal. Horarios de atención, dirección y más información."
        keywords="contacto, horarios de atención, dirección, abogados Mar del Plata"
        canonicalUrl="/contacto"
      />
      <Navbar />
      
      <PageHeader 
        title="Contacto"
        subtitle="Si tenés alguna duda escribinos y nos comunicamos a la brevedad. También podés visitarnos personalmente, estamos en pleno centro de Mar del Plata."
      />

      <Section className="py-12 sm:py-16 bg-white">
        <Container>
          <SectionHeader>
            <Title>Nuestro Estudio</Title>
          </SectionHeader>
          
          <Grid cols="2" gap="lg">
            <div className="space-y-4">
              <ContactInfoCard
                icon={<Phone className="h-5 w-5 text-primary" />}
                title="Teléfono"
                content={<span className="font-semibold">+54 223 5474966</span>}
              />

              <ContactInfoCard
                icon={<Mail className="h-5 w-5 text-primary" />}
                title="E-mail"
                content="info@estudiojuridicogpmdp.com.ar"
              />

              <ContactInfoCard
                icon={<MapPin className="h-5 w-5 text-primary" />}
                title="Dirección"
                content={
                  <span className="text-gray-700">
                    Bolívar 3053: Piso 7, Oficina "C"<br />
                    Mar del Plata, Argentina
                  </span>
                }
              />
            </div>

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