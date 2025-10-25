const About = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">🍃 About Us</h1>
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
                  affordable, and oh-so-delicious! 🌿
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
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">🎯</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base px-2">
                To provide pure, organic food products that promote healthy living while supporting 
                sustainable farming practices. We aim to bridge the gap between conscious consumers 
                and responsible farmers, ensuring quality and authenticity in every product.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">👁️</div>
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
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">💫 Why Muthu Organic Shop?</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">Because we don't just sell food — we sell trust.</p>
          <p className="text-center text-gray-600 mb-12">At Muthu, every grain, every spice, and every drop of oil comes with our personal promise of purity.</p>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center space-y-4">
              <div className="text-4xl">✅</div>
              <h3 className="text-lg font-semibold">Certified FSSAI</h3>
              <p className="text-gray-600 text-sm">No. 22419534000178</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">✅</div>
              <h3 className="text-lg font-semibold">Trusted Network</h3>
              <p className="text-gray-600 text-sm">Of organic farmers</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">✅</div>
              <h3 className="text-lg font-semibold">Locally Owned</h3>
              <p className="text-gray-600 text-sm">& ethically run</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">✅</div>
              <h3 className="text-lg font-semibold">Transparent</h3>
              <p className="text-gray-600 text-sm">Pricing and quality</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">✅</div>
              <h3 className="text-lg font-semibold">Tamil Nadu's Taste</h3>
              <p className="text-gray-600 text-sm">The organic way! 🌾</p>
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
                src="/images/building-image.jpg" 
                alt="Quality Control" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
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
            <div className="space-y-3">
              <div className="text-3xl">🌿</div>
              <h3 className="font-semibold">Purity</h3>
              <p className="text-sm text-gray-600">Uncompromising commitment to pure, natural products</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🔍</div>
              <h3 className="font-semibold">Transparency</h3>
              <p className="text-sm text-gray-600">Complete transparency in sourcing and processes</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🌍</div>
              <h3 className="font-semibold">Sustainability</h3>
              <p className="text-sm text-gray-600">Environmental responsibility in all our practices</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">❤️</div>
              <h3 className="font-semibold">Care</h3>
              <p className="text-sm text-gray-600">Genuine care for customer health and satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About