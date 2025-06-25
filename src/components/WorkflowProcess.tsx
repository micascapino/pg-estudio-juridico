
import { MessageSquare, FileText, Scale } from 'lucide-react';

const WorkflowProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Consulta Inicial',
      description: 'Analizamos tu caso en detalle y te brindamos una evaluación profesional sin costo.',
      number: '01'
    },
    {
      icon: FileText,
      title: 'Estrategia Legal',
      description: 'Desarrollamos un plan de acción personalizado basado en las mejores prácticas jurídicas.',
      number: '02'
    },
    {
      icon: Scale,
      title: 'Resolución',
      description: 'Ejecutamos la estrategia con seguimiento constante hasta lograr los resultados esperados.',
      number: '03'
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Un enfoque sistemático y profesional para garantizar los mejores resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="font-poppins font-bold text-sm text-white">{step.number}</span>
                </div>
              </div>

              <h3 className="font-poppins font-semibold text-2xl text-dark-gray mb-4">
                {step.title}
              </h3>
              
              <p className="font-inter text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-primary/20 transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcess;
