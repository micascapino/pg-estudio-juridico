import { useState } from 'react';
import { Scale, Users, FileText, MessageSquare, Phone, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Container, Section, SectionHeader, Grid, Title, Subtitle, Card } from '@/components/design-system';

const practiceAreas = [
  {
    icon: Scale,
    title: 'Derecho de Daños',
    description: 'Responsabilidad civil, accidentes de tránsito y mala praxis médica.',
    color: 'bg-primary/10',
    route: '/derecho-danos'
  },
  {
    icon: Users,
    title: 'Derecho Laboral',
    description: 'Despidos, accidentes de trabajo y conflictos laborales.',
    color: 'bg-primary/10',
    route: '/derecho-laboral'
  },
  {
    icon: FileText,
    title: 'Derecho Comercial',
    description: 'Sociedades, contratos comerciales y derecho empresarial.',
    color: 'bg-primary/10',
    route: '/derecho-comercial'
  },
  {
    icon: MessageSquare,
    title: 'Derecho Penal',
    description: 'Defensa penal, querellas y mediación penal.',
    color: 'bg-primary/10',
    route: '/derecho-penal'
  },
  {
    icon: Phone,
    title: 'Derecho de Familia',
    description: 'Divorcios, tenencia, cuota alimentaria y sucesiones.',
    color: 'bg-primary/10',
    route: '/derecho-familia'
  },
  {
    icon: Clock,
    title: 'Mediación',
    description: 'Resolución alternativa de conflictos y mediación civil.',
    color: 'bg-primary/10',
    route: '/mediacion'
  }
];

const PracticeAreas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <Section id="areas" className="bg-light-gray">
      <Container>
        <SectionHeader className="mb-12 sm:mb-16">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <Title>Áreas de Práctica</Title>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <Subtitle>
              Brindamos asesoramiento especializado en diversas ramas del derecho
              con un enfoque integral y personalizado.
            </Subtitle>
          </div>
        </SectionHeader>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <Grid cols="3">
            {practiceAreas.map((area, index) => {
              const cardAnimation = useScrollReveal({ delay: index * 100 + 400 });
              return (
                <div
                  key={index}
                  ref={cardAnimation.elementRef}
                  className={cardAnimation.className}
                >
                  <Card hover className="h-full flex flex-col group">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${area.color} rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <area.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg sm:text-xl text-dark-gray mb-2 sm:mb-3">
                      {area.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow">
                      {area.description}
                    </p>
                    <Button
                      onClick={() => handleNavigate(area.route)}
                      className="w-full group/btn border border-primary text-primary hover:bg-primary hover:text-white bg-transparent transition-all duration-300 mt-auto text-xs sm:text-sm py-2 sm:py-2.5"
                    >
                      Ver más
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Card>
                </div>
              );
            })}
          </Grid>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {practiceAreas.map((area, index) => (
                <div key={index} className="w-full flex-shrink-0 px-3">
                  <Card className="h-full flex flex-col">
                    <div className={`w-12 h-12 ${area.color} rounded-full flex items-center justify-center mb-4`}>
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-dark-gray mb-2">
                      {area.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                      {area.description}
                    </p>
                    <Button
                      onClick={() => handleNavigate(area.route)}
                      className="w-full group/btn border border-primary text-primary hover:bg-primary hover:text-white bg-transparent transition-all duration-300 mt-auto text-sm py-2"
                    >
                      Ver más
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {practiceAreas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PracticeAreas;
