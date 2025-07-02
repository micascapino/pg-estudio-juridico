import { ReactNode, useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
  autoSlide?: boolean;
  slideInterval?: number;
}

interface CarouselDotsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
  className?: string;
}

export const CarouselDots = ({ 
  total, 
  current, 
  onChange, 
  className = '' 
}: CarouselDotsProps) => (
  <div className={`flex justify-center mt-6 sm:mt-8 space-x-2 ${className}`}>
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        onClick={() => onChange(index)}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
          index === current ? 'bg-primary' : 'bg-gray-300'
        }`}
        aria-label={`Ir a slide ${index + 1}`}
      />
    ))}
  </div>
);

export const Carousel = ({ 
  children, 
  className = '', 
  showDots = true,
  showArrows = false,
  autoSlide = false,
  slideInterval = 5000 
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-slide functionality
  useEffect(() => {
    if (autoSlide && children.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % children.length);
      }, slideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, slideInterval, children.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + children.length) % children.length);
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    if (showArrows) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [showArrows]);

  return (
    <div className={`relative ${className}`} role="region" aria-label="Carousel">
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0 px-3">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && children.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 touch-manipulation"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 touch-manipulation"
            aria-label="Siguiente slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {showDots && children.length > 1 && (
        <CarouselDots
          total={children.length}
          current={currentSlide}
          onChange={goToSlide}
        />
      )}
    </div>
  );
};

// Hook personalizado para usar el carousel externamente si es necesario
export const useCarousel = (itemCount: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % itemCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + itemCount) % itemCount);
  };

  return {
    currentSlide,
    setCurrentSlide,
    goToSlide,
    nextSlide,
    prevSlide
  };
}; 