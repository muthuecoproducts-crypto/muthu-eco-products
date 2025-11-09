const About = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section 
        className="min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/organic.png')" }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up text-gray-800">
            About Us
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed animate-slide-up px-2 text-gray-700">
            Welcome to Muthu Organic Shop, your neighborhood destination for fresh, farm-grown, and fully organic essentials.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block animate-slide-up"
          >
            Contact Us
          </a>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sourcing & Quality Focus</h2>
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
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-3 bg-gradient-to-t from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group border-t-4 border-primary">
              {/* <div className="w-8 h-8 bg-primary/20 rounded-full mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300"></div> */}
              <h3 className="font-semibold text-primary text-lg group-hover:text-primary/80 transition-colors duration-300">Purity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Uncompromising commitment to pure, natural products</p>
            </div>
            <div className="space-y-3 bg-gradient-to-t from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group border-t-4 border-accent">
              {/* <div className="w-8 h-8 bg-secondary/20 rounded-full mx-auto mb-4 group-hover:bg-secondary/30 transition-colors duration-300"></div> */}
              <h3 className="font-semibold text-secondary text-lg group-hover:text-secondary/80 transition-colors duration-300">Transparency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Complete transparency in sourcing and processes</p>
            </div>
            <div className="space-y-3 bg-gradient-to-t from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group border-t-4 border-primary">
              {/* <div className="w-8 h-8 bg-accent/20 rounded-full mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300"></div> */}
              <h3 className="font-semibold text-primary text-lg group-hover:text-primary/80 transition-colors duration-300">Sustainability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Environmental responsibility in all our practices</p>
            </div>
            <div className="space-y-3 bg-gradient-to-t from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group border-t-4 border-accent">
              {/* <div className="w-8 h-8 bg-primary/20 rounded-full mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300"></div> */}
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