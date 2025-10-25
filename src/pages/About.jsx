const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Muthu Eco Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for pure, organic living and sustainable farming products
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Brand Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Muthu Eco Products was born from a simple belief: everyone deserves access to pure, 
                  organic food that nourishes both body and soul. Founded with a commitment to sustainable 
                  farming and healthy living, we have been serving families with the finest organic products.
                </p>
                <p>
                  Our journey began with a small group of passionate farmers and health enthusiasts who 
                  recognized the need for chemical-free, authentic food products. Today, we proudly serve 
                  thousands of customers who trust us for their organic food needs.
                </p>
                <p>
                  Every product in our collection is carefully selected and sourced directly from trusted 
                  farms that share our commitment to organic farming practices and environmental sustainability.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/images/about-img.jpg" 
                alt="Our Story" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide pure, organic food products that promote healthy living while supporting 
                sustainable farming practices. We aim to bridge the gap between conscious consumers 
                and responsible farmers, ensuring quality and authenticity in every product.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-6">👁️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
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
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Promise to You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl">🌱</div>
              <h3 className="text-xl font-semibold">100% Organic Guarantee</h3>
              <p className="text-gray-600">
                Every product is certified organic, free from harmful chemicals, pesticides, and artificial additives.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">🤝</div>
              <h3 className="text-xl font-semibold">Farmer Partnership</h3>
              <p className="text-gray-600">
                We work directly with farmers, ensuring fair prices and supporting sustainable agricultural practices.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">💚</div>
              <h3 className="text-xl font-semibold">Health & Wellness</h3>
              <p className="text-gray-600">
                Our products are carefully selected to provide maximum nutritional value and health benefits.
              </p>
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