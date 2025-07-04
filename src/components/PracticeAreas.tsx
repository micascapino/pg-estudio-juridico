import { Scale, Users, FileText, MessageSquare, Phone, Clock, ArrowRight, Heart, Building, FileSignature, Home, Briefcase } from 'lucide-react';
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
    icon: Heart,
    title: 'Amparos de Salud',
    description: 'Cobertura de tratamientos, medicamentos, cirugías, internaciones prolongadas, fertilización asistida, discapacidad.',
    route: '/amparos-de-salud'
  },
  {
    icon: Users,
    title: 'Derecho de Familia',
    description: 'Divorcios, alimentos, cuidado personal, régimen de comunicación.',
    route: '/derecho-familia'
  },
  {
    icon: Briefcase,
    title: 'Derecho Laboral',
    description: 'Despidos, indemnizaciones, accidentes de trabajo, acoso laboral, contratos laborales y asesoría empresarial.',
    route: '/derecho-laboral'
  },
  {
    icon: FileText,
    title: 'Sucesiones',
    description: 'Asesoramiento y trámites judiciales para sucesiones.',
    route: '/sucesiones'
  },
  {
    icon: Scale,
    title: 'Responsabilidad Civil',
    description: 'Reclamos por daños y perjuicios, accidentes de tránsito, mala praxis médica y negociación con seguros.',
    route: '/responsabilidad-civil'
  },
  {
    icon: Building,
    title: 'Consultoría Jurídica',
    description: 'Asesoramiento legal integral permanente para empresas y particulares.',
    route: '/consultoria-juridica'
  },
  {
    icon: FileSignature,
    title: 'Contratos',
    description: 'Redacción, revisión y negociación de contratos civiles y comerciales.',
    route: '/contratos'
  },
  {
    icon: Home,
    title: 'Propiedad y Bienes Inmuebles',
    description: 'Compraventa, locaciones, desalojos, usucapión, subdivisiones y regularización de títulos.',
    route: '/propiedad-inmuebles'
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
            <Title>Servicios</Title>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <Subtitle>
              Especialidades y áreas de práctica con enfoque personalizado
              y soluciones jurídicas efectivas.
            </Subtitle>
          </div>
        </SectionHeader>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <Grid cols="4">
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
          <Carousel showArrows={true} showDots={true}>
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
