import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Container, Section, Grid } from '@/components/design-system';

const Footer = () => {
  return (
    <Section id="contacto" className="bg-dark-gray text-white py-8 sm:py-16">
      <Container>
        <Grid cols="4" gap="md">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
            <img 
                src="/logo-estudio-gp.png" 
                alt="Giamberardino – Petrocco & Asociados" 
                className="h-6 w-6 sm:h-8 sm:w-8 object-cover mr-2"
              />
              <span className="font-poppins font-bold text-lg sm:text-2xl">
                Giamberardino – Petrocco & Asociados
              </span>
            </div>
            <p className="font-inter text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Estudio jurídico con enfoque integral y atención personalizada. 
              Compromiso legal. Defensa estratégica. Atención personalizada.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://instagram.com/estudiojuridicogpmdp" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <img src="/icons/instagram-icon.svg" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Espacio vacío para la tercera columna */}
          <div className="hidden lg:block"></div>
          
          {/* Información de Contacto */}
          <div>
            <h3 className="font-poppins font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contacto</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-inter text-gray-300 text-xs sm:text-sm">
                  Mar del Plata, Buenos Aires, Argentina
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="font-inter text-gray-300 text-xs sm:text-sm">
                  WhatsApp: 223 547 4966
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-inter text-gray-300 text-xs sm:text-sm break-all">
                  estudiojuridicogpmdp@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="font-inter text-gray-300 text-xs sm:text-sm">
                  <div>Atención online en todo el país</div>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        {/* Línea Separadora */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Giamberardino – Petrocco & Asociados. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
