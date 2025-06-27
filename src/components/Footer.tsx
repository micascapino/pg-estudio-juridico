
import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-dark-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-primary mr-2" />
              <span className="font-poppins font-bold text-2xl">
                Giambearrdino & Petrocco Abogados
              </span>
            </div>
            <p className="font-inter text-gray-300 mb-6 leading-relaxed max-w-md">
              Más de 15 años brindando soluciones legales integrales con un enfoque 
              personalizado y compromiso con la excelencia jurídica.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>

          
          {/* Información de Contacto */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-inter text-gray-300 text-sm">
                Bolívar 3053: Piso 7 Oficina “C”, Mar del Plata, Argentina
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-inter text-gray-300 text-sm">
                  +54 223 4373938
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-inter text-gray-300 text-sm">
                  info@estudiojuridicogpmdp.com.ar
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="font-inter text-gray-300 text-sm">
                  <div>Lun - Vie: 9:00 - 18:00</div>
                  <div>Sáb: 9:00 - 13:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea Separadora */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Estudio Jurídico Giambearrdino & Petrocco. Todos los derechos reservados.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
