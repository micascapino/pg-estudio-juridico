
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'María González',
    role: 'Empresaria',
    content: 'Excelente atención y profesionalismo. Me asesoraron perfectamente en la constitución de mi empresa.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b332c108?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Particular',
    content: 'Muy satisfecho con el resultado de mi caso. Un equipo comprometido y altamente capacitado.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Ana Martínez',
    role: 'Comerciante',
    content: 'Resolvieron mi conflicto laboral de manera eficiente. Recomiendo ampliamente sus servicios.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${i < rating ? 'text-accent' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
            Testimonios
          </h2>
          <p className="font-inter text-xl text-gray-600">
            Lo que dicen nuestros clientes sobre nosotros
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-light-gray rounded-2xl p-8 text-center mx-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="font-inter text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <h4 className="font-poppins font-semibold text-xl text-dark-gray">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
