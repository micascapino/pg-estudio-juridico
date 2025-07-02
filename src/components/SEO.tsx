import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO = ({ 
  title = "Giamberardino – Petrocco & Asociados - Abogados Especialistas",
  description = "Estudio jurídico especializado en derecho civil, penal y comercial. Más de 15 años de experiencia brindando asesoramiento legal de calidad.",
  keywords = "abogados, estudio jurídico, derecho civil, derecho penal, derecho comercial, Mar del Plata, asesoramiento legal",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  canonicalUrl
}: SEOProps) => {
  const baseUrl = "https://giamberardino-petrocco.vercel.app";
  const fullTitle = title.includes("Giamberardino") ? title : `${title} | Giamberardino – Petrocco & Asociados`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Giamberardino – Petrocco & Asociados" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={`${baseUrl}${canonicalUrl}`} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@estudioGiamberardino & Petrocco" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />}
    </Helmet>
  );
};

export default SEO; 