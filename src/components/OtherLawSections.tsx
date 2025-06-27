import { FC } from 'react';
import { Building, Gavel, Heart, HandHeart, FileText, Users, Scale, Shield } from 'lucide-react';
import ContactForm from './ContactForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader, Grid, Title, Subtitle, ServiceCard } from '@/components/design-system';

// Derecho Comercial
export const CommercialLawSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <Building className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Constitución de Sociedades",
      description: "Creación y estructura de empresas"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Contratos Comerciales",
      description: "Redacción y negociación de acuerdos"
    },
    {
      icon: <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Derecho Concursal",
      description: "Concursos y quiebras empresariales"
    },
    {
      icon: <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Propiedad Intelectual",
      description: "Marcas, patentes y derechos de autor"
    }
  ];

  return (
    <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
      <SectionHeader>
        <Title>Nuestros Servicios</Title>
        <Subtitle>
          Asesoramiento integral para el desarrollo de tu empresa
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

// Derecho Penal
export const CriminalLawSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <Gavel className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Defensa Penal",
      description: "Representación en procesos penales"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Querellas",
      description: "Inicio de acciones penales privadas"
    },
    {
      icon: <HandHeart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Penal",
      description: "Resolución alternativa de conflictos"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Violencia Familiar",
      description: "Protección y medidas cautelares"
    }
  ];

  return (
    <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
      <SectionHeader>
        <Title>Nuestros Servicios</Title>
        <Subtitle>
          Defensa especializada para proteger tus derechos
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

// Mediación
export const MediationSection = () => {
  const servicesAnimation = useScrollReveal();

  const services = [
    {
      icon: <HandHeart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Civil",
      description: "Resolución pacífica de conflictos civiles"
    },
    {
      icon: <Users className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Familiar",
      description: "Acuerdos en temas de familia"
    },
    {
      icon: <Building className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Comercial",
      description: "Conflictos entre empresas"
    },
    {
      icon: <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Mediación Laboral",
      description: "Resolución de conflictos laborales"
    }
  ];

  return (
    <div ref={servicesAnimation.elementRef} className={servicesAnimation.className}>
      <SectionHeader>
        <Title>Nuestros Servicios</Title>
        <Subtitle>
          Soluciones pacíficas y eficientes para resolver conflictos
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