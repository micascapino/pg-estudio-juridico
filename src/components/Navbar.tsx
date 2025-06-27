
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Scale, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 text-primary mr-2" />
              <span className="font-poppins font-bold text-xl text-dark-gray">
                Giambearrdino & Petrocco Abogados
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="font-inter text-dark-gray hover:text-primary transition-colors duration-300">
                Inicio
              </Link>
              
              {/* Dropdown Áreas de Práctica */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="font-inter text-dark-gray hover:text-primary transition-colors duration-300 flex items-center"
                >
                  Áreas de Práctica
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="py-2">
                      <Link 
                        to="/derecho-laboral" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Derecho Laboral
                      </Link>
                      <Link 
                        to="/derecho-danos" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Derecho de Daños
                      </Link>
                      <Link 
                        to="/derecho-comercial" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Derecho Comercial
                      </Link>
                      <Link 
                        to="/derecho-penal" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Derecho Penal
                      </Link>
                      <Link 
                        to="/derecho-familia" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Derecho de Familia
                      </Link>
                      <Link 
                        to="/mediacion" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Mediación
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
    
              <Link to="/contacto" className="font-inter text-dark-gray hover:text-primary transition-colors duration-300">
                Contacto
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary-shade text-white font-medium px-6 py-2 rounded-full transition-transform duration-150 hover:scale-105"
              onClick={() => window.open('https://wa.me/5492234373938', '_blank')}
            >
              Consultanos
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
            <Link
              to="/"
              className="font-inter text-dark-gray hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            
            {/* Áreas de Práctica - Móvil */}
            <div className="px-3 py-2">
              <div className="font-inter text-dark-gray text-base font-medium mb-2">
                Áreas de Práctica
              </div>
              <div className="pl-4 space-y-1">
                <Link
                  to="/derecho-laboral"
                  className="font-inter text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Derecho Laboral
                </Link>
                <Link
                  to="/derecho-danos"
                  className="font-inter text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Derecho de Daños
                </Link>
                <Link
                  to="/derecho-comercial"
                  className="font-inter text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Derecho Comercial
                </Link>
                <Link
                  to="/derecho-penal"
                  className="font-inter text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Derecho Penal
                </Link>
                <Link
                  to="/derecho-familia"
                  className="font-inter text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Derecho de Familia
                </Link>
                <Link
                  to="/mediacion"
                  className="font-inter text-gray-600 hover:text-primary block py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Mediación
                </Link>
              </div>
            </div>
            
            <Link
              to="/contacto"
              className="font-inter text-dark-gray hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-primary hover:bg-primary-shade text-white font-medium py-2 rounded-full"
                onClick={() => {
                  window.open('https://wa.me/5492234373938', '_blank');
                  setIsOpen(false);
                }}
              >
                Consultanos
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
