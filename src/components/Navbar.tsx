import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, WhatsAppButton } from '@/components/design-system';

// Constantes de navegación
const PRACTICE_AREAS = [
  { path: '/amparos-de-salud', label: 'Amparos de Salud' },
  { path: '/derecho-familia', label: 'Derecho de Familia' },
  { path: '/sucesiones', label: 'Sucesiones' },
  { path: '/responsabilidad-civil', label: 'Responsabilidad Civil' },
  { path: '/consultoria-juridica', label: 'Consultoría Jurídica' }
];

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return { isOpen, setIsOpen, ref };
};


interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ to, children, onClick, className = '' }: NavLinkProps) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onClick) onClick();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`font-inter text-dark-gray hover:text-primary transition-colors duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};

// Componente DropdownLink
const DropdownLink = ({ to, children, onClick }: NavLinkProps) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onClick) onClick();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdown = useDropdown();

  const closeMobileMenu = () => setIsMobileOpen(false);
  
  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleNavigation} className="flex items-center">
              <img 
                src="/logo-estudio-gp.png" 
                alt="Giamberardino – Petrocco & Asociados" 
                className="h-8 w-8 sm:h-10 sm:w-10 object-cover mr-2"
              />
              <span className="font-poppins font-bold text-sm sm:text-xl text-dark-gray">
                Giamberardino – Petrocco & Asociados
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/">Inicio</NavLink>
              
              {/* Dropdown Áreas de Práctica */}
              <div className="relative" ref={dropdown.ref}>
                <button
                  onClick={() => dropdown.setIsOpen(!dropdown.isOpen)}
                  className="font-inter text-dark-gray hover:text-primary transition-colors duration-300 flex items-center"
                >
                  Áreas de Práctica
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdown.isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdown.isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="py-2">
                      {PRACTICE_AREAS.map(({ path, label }) => (
                        <DropdownLink 
                          key={path}
                          to={path} 
                          onClick={() => dropdown.setIsOpen(false)}
                        >
                          {label}
                        </DropdownLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <NavLink to="/contacto">Contacto</NavLink>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <WhatsAppButton 
              className="text-sm px-4 lg:px-6 py-2"
            >
              Consultanos
            </WhatsAppButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-3 pt-3 pb-4 space-y-2">
            <NavLink 
              to="/" 
              onClick={closeMobileMenu}
              className="hover:bg-gray-50 block px-3 py-2 text-sm font-medium rounded-md"
            >
              Inicio
            </NavLink>
            
            {/* Áreas de Práctica - Móvil */}
            <div className="px-3 py-1">
              <div className="font-inter text-dark-gray text-sm font-medium mb-2 text-gray-500 uppercase tracking-wide">
                Áreas de Práctica
              </div>
              <div className="pl-2 space-y-1">
                {PRACTICE_AREAS.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={closeMobileMenu}
                    className="text-gray-700 hover:bg-gray-50 block py-2 px-2 text-sm rounded-md"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
            
            <NavLink 
              to="/contacto" 
              onClick={closeMobileMenu}
              className="hover:bg-gray-50 block px-3 py-2 text-sm font-medium rounded-md"
            >
              Contacto
            </NavLink>
            
            <div className="px-3 pt-3">
              <WhatsAppButton 
                className="w-full"
              >
                Consultanos
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
