import { Car, Heart, Building, Users, FileText, Shield, AlertTriangle, Scale } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Container, Section, SectionHeader, Grid, Title, Subtitle, ServiceCard, IconCard, Card } from '@/components/design-system';

const DamagesLawSection = () => {
  const accidentsAnimation = useScrollReveal();
  const malpracticeAnimation = useScrollReveal({ delay: 200 });
  const civilAnimation = useScrollReveal({ delay: 400 });

  const trafficAccidents = [
    {
      icon: <Car className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Accidentes de Tránsito",
      description: "Colisiones, atropellos y siniestros viales"
    },
    {
      icon: <AlertTriangle className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Daños Materiales",
      description: "Reparación de vehículos y objetos dañados"
    },
    {
      icon: <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Lesiones Personales",
      description: "Daño físico y psicológico a personas"
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />,
      title: "Gestión de Seguros",
      description: "Tramitación con compañías aseguradoras"
    }
  ];

  const malpracticeTypes = [
    {
      type: "Negligencia Médica",
      description: "Errores en diagnóstico o tratamiento",
      icon: <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
    },
    {
      type: "Error Quirúrgico",
      description: "Complicaciones en intervenciones",
      icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
    },
    {
      type: "Falta de Información",
      description: "Consentimiento informado deficiente",
      icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
    },
    {
      type: "Abandono de Persona",
      description: "Desatención del deber de cuidado",
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
    }
  ];

  const civilResponsibilities = [
    {
      area: "Responsabilidad Contractual",
      details: "Incumplimiento de contratos y obligaciones pactadas",
      cases: ["Incumplimiento de plazos", "Defectos en la prestación", "Daños por incumplimiento"]
    },
    {
      area: "Responsabilidad Extracontractual",
      details: "Daños causados sin relación contractual previa",
      cases: ["Daños por animales", "Caída de objetos", "Responsabilidad por terceros"]
    },
    {
      area: "Responsabilidad Profesional",
      details: "Daños causados en el ejercicio profesional",
      cases: ["Error profesional", "Negligencia", "Violación del deber de cuidado"]
    }
  ];

  return (
    <>
      <div ref={accidentsAnimation.elementRef} className={accidentsAnimation.className}>
        <SectionHeader>
          <Title>Accidentes de Tránsito</Title>
          <Subtitle>
            Asesoramiento integral en siniestros viales y reclamos de seguros
          </Subtitle>
        </SectionHeader>

        <Grid cols="4" className="mb-12 sm:mb-20">
          {trafficAccidents.map((accident, index) => (
            <IconCard
              key={index}
              icon={accident.icon}
              title={accident.title}
              description={accident.description}
            />
          ))}
        </Grid>
      </div>

      <div ref={civilAnimation.elementRef} className={civilAnimation.className}>
        <SectionHeader>
          <Title>Responsabilidad Civil</Title>
          <Subtitle>
            Cobertura integral en todos los aspectos de la responsabilidad civil
          </Subtitle>
        </SectionHeader>

        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-20">
          {civilResponsibilities.map((responsibility, index) => (
            <Card key={index}>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-2 sm:p-3">
                  <Scale className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-semibold text-sm sm:text-xl text-dark-gray mb-2 sm:mb-3">
                    {responsibility.area}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-4">
                    {responsibility.details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {responsibility.cases.map((case_item, caseIndex) => (
                      <span key={caseIndex} className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary">
                        {case_item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default DamagesLawSection; 