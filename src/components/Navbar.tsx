
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-primary mr-2" />
              <span className="font-poppins font-bold text-xl text-dark-gray">
                Estudio Mogliani
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="font-inter text-dark-gray hover:text-primary transition-colors duration-300">
                Inicio
              </a>
              <a href="#areas" className="font-inter text-dark-gray hover:text-primary transition-colors duration-300">
                Áreas de Práctica
              </a>
              <a href="#nosotros" className="font-inter text-dark-gray hover:text-primary transition-colors duration-300">
                Nosotros
              </a>
              <a href="#blog" className="font-inter text-dark-gray hover:text-primary transition-colors duration-300">
                Blog
              </a>
              <a href="#contacto" className="font-inter text-dark-gray hover:text-primary transition-colors duration-300">
                Contacto
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary-shade text-white font-medium px-6 py-2 rounded-full transition-transform duration-150 hover:scale-105"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              className="font-inter text-dark-gray hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#areas"
              className="font-inter text-dark-gray hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Áreas de Práctica
            </a>
            <a
              href="#nosotros"
              className="font-inter text-dark-gray hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </a>
            <a
              href="#blog"
              className="font-inter text-dark-gray hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a
              href="#contacto"
              className="font-inter text-dark-gray hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-primary hover:bg-primary-shade text-white font-medium py-2 rounded-full"
                onClick={() => {
                  window.open('https://wa.me/1234567890', '_blank');
                  setIsOpen(false);
                }}
              >
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
