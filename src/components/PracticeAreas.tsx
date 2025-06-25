
import { useState } from 'react';
import { Scale, Users, FileText, MessageSquare, Phone, Clock } from 'lucide-react';

const practiceAreas = [
  {
    icon: Scale,
    title: 'Derecho Civil',
    description: 'Contratos, obligaciones, derechos reales y responsabilidad civil.',
    color: 'bg-primary/10'
  },
  {
    icon: Users,
    title: 'Derecho Laboral',
    description: 'Despidos, accidentes de trabajo y conflictos laborales.',
    color: 'bg-primary/10'
  },
  {
    icon: FileText,
    title: 'Derecho Comercial',
    description: 'Sociedades, contratos comerciales y derecho empresarial.',
    color: 'bg-primary/10'
  },
  {
    icon: MessageSquare,
    title: 'Derecho Penal',
    description: 'Defensa penal, querellas y mediación penal.',
    color: 'bg-primary/10'
  },
  {
    icon: Phone,
    title: 'Derecho de Familia',
    description: 'Divorcios, tenencia, cuota alimentaria y sucesiones.',
    color: 'bg-primary/10'
  },
  {
    icon: Clock,
    title: 'Mediación',
    description: 'Resolución alternativa de conflictos y mediación civil.',
    color: 'bg-primary/10'
  }
];

const PracticeAreas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="areas" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
            Áreas de Práctica
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Brindamos asesoramiento especializado en diversas ramas del derecho
            con un enfoque integral y personalizado.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-custom hover:shadow-custom-hover transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${area.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-dark-gray mb-3">
                {area.title}
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {practiceAreas.map((area, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-8 shadow-custom">
                    <div className={`w-16 h-16 ${area.color} rounded-full flex items-center justify-center mb-6`}>
                      <area.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-dark-gray mb-3">
                      {area.title}
                    </h3>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {practiceAreas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
