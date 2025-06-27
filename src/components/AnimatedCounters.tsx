import { useEffect, useState, useRef } from 'react';
import { Container, Section, Grid } from '@/components/design-system';

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

  const counterData = [
    { key: 'years', value: counters.years, label: 'Años de Experiencia' },
    { key: 'cases', value: counters.cases, label: 'Casos Resueltos' },
    { key: 'clients', value: counters.clients, label: 'Clientes Satisfechos' },
    { key: 'consultations', value: counters.consultations, label: 'Consultas Atendidas' }
  ];

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
    const duration = 2000;
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
    <Section ref={sectionRef} className="bg-primary">
      <Container>
        <Grid cols="4" gap="md">
          {counterData.map((counter, index) => (
            <div key={index} className="text-center">
              <div className="font-poppins font-bold text-2xl sm:text-4xl lg:text-5xl text-white mb-1 sm:mb-2">
                {counter.value}+
              </div>
              <div className="font-inter text-white/80 text-xs sm:text-lg">
                {counter.label}
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default AnimatedCounters;
