import SEOHead from '../components/SEOHead'

const About = () => {
  return (
    <div className="pt-0">
      <SEOHead 
        title="About Us - Organic Food Suppliers Chennai"
        description="Learn about Muthu Eco Products - your trusted organic food supplier in Chennai. We source chemical-free grains, millets, and spices directly from Tamil Nadu farmers since 2020."
        keywords="about organic food supplier Chennai, chemical-free farming, Tamil Nadu organic products, sustainable agriculture, farm to table Chennai"
        url="https://muthu-eco-products.vercel.app/about"
      />
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">About Us</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Welcome to Muthu Organic Shop, your neighborhood destination for fresh, farm-grown, and fully organic essentials.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Welcome to Muthu Organic Shop</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  We believe that நல் உணவே அரும ருந்து — healthy food is truly the best medicine.
                </p>
                <p>
                  Our journey began with a simple goal: to bring back purity to every kitchen. From 
                  chemical-free grains and wholesome millets to aromatic spices and cold-pressed oils, 
                  every product you see here comes straight from trusted organic farms.
                </p>
                <p>
                  With love, honesty, and sustainability at our core, we aim to make clean eating easy, 
                  affordable, and oh-so-delicious!
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/images/home.png" 
                alt="Our Story" 
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center">
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base px-2">
                To provide pure, organic food products that promote healthy living while supporting 
                sustainable farming practices. We aim to bridge the gap between conscious consumers 
                and responsible farmers, ensuring quality and authenticity in every product.
              </p>
            </div>
            <div className="text-center">
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base px-2">
                To become the most trusted name in organic food products, creating a healthier world 
                where organic living is accessible to all. We envision a future where every meal 
                contributes to personal health and environmental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Muthu Organic Shop?</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">Because we don't just sell food — we sell trust.</p>
          <p className="text-center text-gray-600 mb-12">At Muthu, every grain, every spice, and every drop of oil comes with our personal promise of purity.</p>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center space-y-4 bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">Certified FSSAI</h3>
              <p className="text-gray-600 text-sm">No. 22419534000178</p>
            </div>
            <div className="text-center space-y-4 bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-1 bg-secondary mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300">Trusted Network</h3>
              <p className="text-gray-600 text-sm">Of organic farmers</p>
            </div>
            <div className="text-center space-y-4 bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-1 bg-accent mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-accent transition-colors duration-300">Locally Owned</h3>
              <p className="text-gray-600 text-sm">& ethically run</p>
            </div>
            <div className="text-center space-y-4 bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">Transparent</h3>
              <p className="text-gray-600 text-sm">Pricing and quality</p>
            </div>
            <div className="text-center space-y-4 bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-1 bg-secondary mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300">Tamil Nadu's Taste</h3>
              <p className="text-gray-600 text-sm">The organic way!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Quality Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/quality.png" 
                alt="Quality Control" 
                className="w-full h-full object-cover rounded-lg shadow-lg border border-2 border-gray-200"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Sourcing & Quality Focus</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Direct Farm Sourcing:</strong> We maintain direct relationships with certified 
                  organic farmers across the region, ensuring traceability and quality from farm to table.
                </p>
                <p>
                  <strong>Rigorous Quality Checks:</strong> Every batch undergoes multiple quality 
                  assessments including purity tests, nutritional analysis, and freshness verification.
                </p>
                <p>
                  <strong>Sustainable Practices:</strong> We support farming methods that preserve soil 
                  health, conserve water, and maintain biodiversity for future generations.
                </p>
                <p>
                  <strong>Authentic Taste:</strong> Our products retain their natural flavors and 
                  nutritional properties through careful handling and minimal processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-3 bg-gradient-to-t from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-8 h-8 bg-primary/20 rounded-full mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300"></div>
              <h3 className="font-semibold text-primary text-lg group-hover:text-primary/80 transition-colors duration-300">Purity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Uncompromising commitment to pure, natural products</p>
            </div>
            <div className="space-y-3 bg-gradient-to-t from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-8 h-8 bg-secondary/20 rounded-full mx-auto mb-4 group-hover:bg-secondary/30 transition-colors duration-300"></div>
              <h3 className="font-semibold text-secondary text-lg group-hover:text-secondary/80 transition-colors duration-300">Transparency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Complete transparency in sourcing and processes</p>
            </div>
            <div className="space-y-3 bg-gradient-to-t from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-8 h-8 bg-accent/20 rounded-full mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300"></div>
              <h3 className="font-semibold text-accent text-lg group-hover:text-accent/80 transition-colors duration-300">Sustainability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Environmental responsibility in all our practices</p>
            </div>
            <div className="space-y-3 bg-gradient-to-t from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-8 h-8 bg-primary/20 rounded-full mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300"></div>
              <h3 className="font-semibold text-primary text-lg group-hover:text-primary/80 transition-colors duration-300">Care</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Genuine care for customer health and satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About