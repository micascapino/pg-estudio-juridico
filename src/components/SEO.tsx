import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'service';
}

const SEO = ({ 
  title = "Giamberardino – Petrocco & Asociados - Abogados Especialistas",
  description = "Estudio jurídico especializado en derecho civil, penal y comercial. Más de 15 años de experiencia brindando asesoramiento legal de calidad.",
  keywords = "abogados, estudio jurídico, derecho civil, derecho penal, derecho comercial, Mar del Plata, asesoramiento legal",
  ogImage = "https://pg-estudio-juridico.vercel.app/logo-estudio-gp.png",
  canonicalUrl,
  type = 'website'
}: SEOProps) => {
  const baseUrl = "https://pg-estudio-juridico.vercel.app";
  const fullTitle = title.includes("Giamberardino") ? title : `${title} | Giamberardino – Petrocco & Asociados`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${baseUrl}/#legalservice`,
        "name": "Giamberardino – Petrocco & Asociados",
        "description": description,
        "url": baseUrl,
        "telephone": "+542235474966",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AR",
          "addressRegion": "Buenos Aires",
          "addressLocality": "Mar del Plata"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-38.0055",
          "longitude": "-57.5426"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Mar del Plata"
          },
          {
            "@type": "State",
            "name": "Buenos Aires"
          }
        ],
        "serviceType": [
          "Amparos de Salud",
          "Derecho de Familia",
          "Sucesiones",
          "Responsabilidad Civil",
          "Consultoría Jurídica"
        ],
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios Legales",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Amparos de Salud",
                "description": "Asesoramiento y representación en amparos de salud"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Derecho de Familia",
                "description": "Divorcios, regímenes de visitas, cuota alimentaria"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Sucesiones",
                "description": "Tramitación de herencias y sucesiones"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Responsabilidad Civil", 
                "description": "Accidentes de tránsito y daños y perjuicios"
              }
            }
          ]
        }
      },
      {
        "@type": "Attorney",
        "@id": `${baseUrl}/#attorney`,
        "name": "Giamberardino – Petrocco & Asociados",
        "jobTitle": "Abogados",
        "worksFor": {
          "@id": `${baseUrl}/#legalservice`
        },
        "knowsAbout": [
          "Derecho Civil",
          "Derecho de Familia", 
          "Derecho de la Salud",
          "Responsabilidad Civil",
          "Sucesiones"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Giamberardino – Petrocco & Asociados",
        "description": description,
        "publisher": {
          "@id": `${baseUrl}/#legalservice`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/buscar?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Giamberardino – Petrocco & Asociados" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Geo tags para SEO local */}
      <meta name="geo.region" content="AR-B" />
      <meta name="geo.placename" content="Mar del Plata" />
      <meta name="geo.position" content="-38.0055;-57.5426" />
      <meta name="ICBM" content="-38.0055, -57.5426" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content="Giamberardino – Petrocco & Asociados" />
      {canonicalUrl && <meta property="og:url" content={`${baseUrl}${canonicalUrl}`} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudioGiamberardino & Petrocco" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />}
      
      {/* Datos estructurados JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 