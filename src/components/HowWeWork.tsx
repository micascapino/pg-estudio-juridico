import { Ear, Search, Target, MessageCircle, Shield } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Container, 
  Section, 
  SectionHeader, 
  Grid, 
  Title, 
  Subtitle, 
  ServiceCard
} from '@/components/design-system';

const workProcess = [
  {
    icon: Ear,
    title: 'Escuchamos tu consulta',
    description: 'Analizamos tu caso en detalle para comprender todos los aspectos jurídicos involucrados.'
  },
  {
    icon: Search,
    title: 'Evaluamos las opciones',
    description: 'Estudiamos las alternativas legales más eficaces para tu situación particular.'
  },
  {
    icon: Target,
    title: 'Diseñamos una estrategia',
    description: 'Creamos un plan de acción personalizado adaptado a tus necesidades específicas.'
  },
  {
    icon: MessageCircle,
    title: 'Te mantenemos informado',
    description: 'Comunicación constante y transparente durante todo el proceso legal.'
  },
  {
    icon: Shield,
    title: 'Defendemos tus derechos',
    description: 'Trabajamos con compromiso y profesionalismo para obtener los mejores resultados.'
  }
];

const HowWeWork = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeader>
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <Title>Cómo trabajamos</Title>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <Subtitle>
              Nuestro objetivo es brindarte soluciones jurídicas claras, rápidas y efectivas
              con un enfoque personalizado en cada etapa del proceso.
            </Subtitle>
          </div>
        </SectionHeader>

        <Grid cols="3">
          {workProcess.map((step, index) => {
            const cardAnimation = useScrollReveal({ delay: index * 100 + 400 });
            return (
              <div key={index} ref={cardAnimation.elementRef} className={cardAnimation.className}>
                <ServiceCard
                  icon={<step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />}
                  title={step.title}
                  description={step.description}
                  iconVariant="circle"
                  layout="vertical"
                />
              </div>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default HowWeWork; 