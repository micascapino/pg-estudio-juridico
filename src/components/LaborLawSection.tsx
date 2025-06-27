import { Scale, Users, FileText, Calendar, TrendingUp, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Container, Section, SectionHeader, Grid, Title, Subtitle, ServiceCard } from '@/components/design-system';

const LaborLawSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Despidos y Rescisión",
      description: "Asesoramiento en despidos con y sin causa justa"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Accidentes de Trabajo",
      description: "Gestión de siniestros laborales y coberturas"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Contratos Laborales",
      description: "Redacción y revisión de contratos de trabajo"
    },
    {
      icon: <Calendar className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Licencias y Vacaciones",
      description: "Gestión de licencias médicas y vacaciones"
    },
    {
      icon: <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Aumentos Salariales",
      description: "Negociación de mejoras salariales"
    },
    {
      icon: <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Seguridad Laboral",
      description: "Cumplimiento de normas de seguridad e higiene"
    }
  ];

  return (
    <>
      <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
        <SectionHeader>
          <Title>Nuestros Servicios</Title>
          <Subtitle>
            Asesoramiento integral en derecho laboral para empleadores y trabajadores
          </Subtitle>
        </SectionHeader>

        <Grid cols="3" className="mb-12 sm:mb-20">
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
    </>
  );
};

export default LaborLawSection; 