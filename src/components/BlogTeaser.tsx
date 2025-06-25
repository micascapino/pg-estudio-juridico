
import { useScrollReveal } from '@/hooks/useScrollReveal';

const blogPosts = [
  {
    title: 'Nuevas Reformas en el Código Civil',
    category: 'Derecho Civil',
    excerpt: 'Análisis de las últimas modificaciones y su impacto en los contratos civiles.',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=400&q=80',
    date: '15 Jun 2024',
    isNew: true
  },
  {
    title: 'Guía de Derechos Laborales 2024',
    category: 'Derecho Laboral',
    excerpt: 'Todo lo que necesitas saber sobre tus derechos como trabajador.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80',
    date: '10 Jun 2024',
    isNew: false
  },
  {
    title: 'Mediación: Alternativa Eficaz',
    category: 'Mediación',
    excerpt: 'Cómo la mediación puede resolver conflictos de manera más rápida y económica.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80',
    date: '5 Jun 2024',
    isNew: true
  }
];

const BlogTeaser = () => {
  const titleAnimation = useScrollReveal();
  const subtitleAnimation = useScrollReveal({ delay: 200 });
  const buttonAnimation = useScrollReveal({ delay: 800 });

  return (
    <section id="blog" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div ref={titleAnimation.elementRef} className={titleAnimation.className}>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-dark-gray mb-4">
              Blog Jurídico
            </h2>
          </div>
          <div ref={subtitleAnimation.elementRef} className={subtitleAnimation.className}>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
              Mantente informado con nuestros artículos sobre las últimas novedades legales
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const cardAnimation = useScrollReveal({ delay: index * 150 + 400 });
            return (
              <article 
                key={index} 
                ref={cardAnimation.elementRef}
                className={`bg-white rounded-xl overflow-hidden shadow-custom hover:shadow-custom-hover transition-all duration-300 hover:-translate-y-2 group ${cardAnimation.className}`}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.isNew && (
                    <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Nuevo
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm font-inter">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="font-poppins font-semibold text-xl text-dark-gray mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="font-inter text-primary font-medium hover:text-primary-shade transition-colors duration-300">
                    Leer más →
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div ref={buttonAnimation.elementRef} className={buttonAnimation.className}>
            <button className="font-inter text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Ver Todos los Artículos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
