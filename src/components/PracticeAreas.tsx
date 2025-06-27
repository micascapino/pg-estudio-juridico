import { Scale, Users, FileText, MessageSquare, Phone, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Section, 
  SectionHeader, 
  Grid, 
  Title, 
  Subtitle, 
  ServiceCard,
  ButtonSystem,
  Carousel
} from '@/components/design-system';

const practiceAreas = [
  {
    icon: Scale,
    title: 'Derecho de Daños',
    description: 'Responsabilidad civil, accidentes de tránsito y mala praxis médica.',
    route: '/derecho-danos'
  },
  {
    icon: Users,
    title: 'Derecho Laboral',
    description: 'Despidos, accidentes de trabajo y conflictos laborales.',
    route: '/derecho-laboral'
  },
  {
    icon: FileText,
    title: 'Derecho Comercial',
    description: 'Sociedades, contratos comerciales y derecho empresarial.',
    route: '/derecho-comercial'
  },
  {
    icon: MessageSquare,
    title: 'Derecho Penal',
    description: 'Defensa penal, querellas y mediación penal.',
    route: '/derecho-penal'
  },
  {
    icon: Phone,
    title: 'Derecho de Familia',
    description: 'Divorcios, tenencia, cuota alimentaria y sucesiones.',
    route: '/derecho-familia'
  },
  {
    icon: Clock,
    title: 'Mediación',
    description: 'Resolución alternativa de conflictos y mediación civil.',
    route: '/mediacion'
  }
];

// Componente PracticeAreaCard usando design system
const PracticeAreaCard = ({ area, index, onClick }: {
  area: typeof practiceAreas[0];
  index: number;
  onClick: () => void;
}) => {
  const cardAnimation = useScrollReveal({ delay: index * 100 + 400 });

  return (
    <div ref={cardAnimation.elementRef} className={cardAnimation.className}>
      <ServiceCard
        icon={<area.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />}
        title={area.title}
        description={area.description}
        iconVariant="circle"
        layout="vertical"
        button={
          <ButtonSystem
            variant="outline"
            onClick={onClick}
            className="w-full group/btn"
          >
            Ver más
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </ButtonSystem>
        }
      />
    </div>
  );
};

const PracticeAreas = () => {
  const navigate = useNavigate();
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  const handleNavigate = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <Section id="areas" className="bg-light-gray">
      <Container>
        <SectionHeader>
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
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard
                key={area.route}
                area={area}
                index={index}
                onClick={() => handleNavigate(area.route)}
              />
            ))}
          </Grid>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel>
            {practiceAreas.map((area) => (
              <ServiceCard
                key={area.route}
                icon={<area.icon className="h-6 w-6 text-primary" />}
                title={area.title}
                description={area.description}
                iconVariant="circle"
                layout="vertical"
                button={
                  <ButtonSystem
                    variant="outline"
                    onClick={() => handleNavigate(area.route)}
                    className="w-full group/btn"
                  >
                    Ver más
                    <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </ButtonSystem>
                }
              />
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};

export default PracticeAreas;
