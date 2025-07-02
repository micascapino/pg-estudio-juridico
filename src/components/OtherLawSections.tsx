
import { Heart, FileText, Users, Scale } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader, Grid, Title, Subtitle, ServiceCard } from '@/components/design-system';

// Derecho de Familia
export const FamilyLawSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Divorcios",
      description: "Tramitación de divorcios consensuados y contenciosos"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Tenencia de Menores",
      description: "Régimen de visitas y cuidado personal"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Cuota Alimentaria",
      description: "Fijación y modificación de alimentos"
    },
    {
      icon: <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Sucesiones",
      description: "Tramitación de herencias y legados"
    }
  ];

  return (
    <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
      <SectionHeader>
        <Title>Nuestros Servicios</Title>
        <Subtitle>
          Acompañamiento sensible en momentos difíciles de la familia
        </Subtitle>
      </SectionHeader>

      <Grid cols="2" className="mb-12 sm:mb-20">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </Grid>
    </div>
  );
};
