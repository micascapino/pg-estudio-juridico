
import { useEffect, useState, useRef } from 'react';

const AnimatedCounters = () => {
  const [counters, setCounters] = useState({
    years: 0,
    cases: 0,
    clients: 0,
    consultations: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    years: 15,
    cases: 500,
    clients: 300,
    consultations: 1000
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    Object.keys(finalValues).forEach((key) => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const stepValue = finalValue / steps;
      let currentValue = 0;

      const timer = setInterval(() => {
        currentValue += stepValue;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, increment);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-2">
              {counters.years}+
            </div>
            <div className="font-inter text-white/80 text-lg">
              Años de Experiencia
            </div>
          </div>
          
          <div className="text-center">
            <div className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-2">
              {counters.cases}+
            </div>
            <div className="font-inter text-white/80 text-lg">
              Casos Resueltos
            </div>
          </div>
          
          <div className="text-center">
            <div className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-2">
              {counters.clients}+
            </div>
            <div className="font-inter text-white/80 text-lg">
              Clientes Satisfechos
            </div>
          </div>
          
          <div className="text-center">
            <div className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-2">
              {counters.consultations}+
            </div>
            <div className="font-inter text-white/80 text-lg">
              Consultas Atendidas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;
