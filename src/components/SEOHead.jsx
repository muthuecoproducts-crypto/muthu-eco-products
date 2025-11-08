import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image = "/images/header-image2.jpg",
  url = "https://muthu-eco-products.vercel.app",
  type = "website"
}) => {
  const fullTitle = title ? `${title} | Muthu Organic Products` : "Muthu Organic Products - 100% Organic Food | Chemical-Free Grains & Millets Chennai"
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://muthu-eco-products.vercel.app${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://muthu-eco-products.vercel.app${image}`} />
    </Helmet>
  )
}

export default SEOHead