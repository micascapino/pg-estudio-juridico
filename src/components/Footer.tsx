import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-dark-gray text-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2" />
              <span className="font-poppins font-bold text-lg sm:text-2xl">
                Giamberardino & Petrocco
              </span>
            </div>
            <p className="font-inter text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Más de 15 años brindando soluciones legales integrales con un enfoque 
              personalizado y compromiso con la excelencia jurídica.
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
                  Bolívar 3053: Piso 7 Oficina "C", Mar del Plata, Argentina
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="font-inter text-gray-300 text-xs sm:text-sm">
                  +54 223 4373938
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-inter text-gray-300 text-xs sm:text-sm break-all">
                  info@estudiojuridicogpmdp.com.ar
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="font-inter text-gray-300 text-xs sm:text-sm">
                  <div>Lun - Vie: 9:00 - 18:00</div>
                  <div>Sáb: 9:00 - 13:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea Separadora */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Estudio Jurídico Giamberardino & Petrocco. Todos los derechos reservados.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
