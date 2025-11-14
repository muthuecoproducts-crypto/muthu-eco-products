const About = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section 
        className="min-h-[75vh] flex items-center justify-center relative"
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/images/organic.png')", backgroundSize: 'auto 55vh', backgroundPosition: 'right 15vh' }}></div>
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
                  We believe that நல் உணவே அரும் ருந்து — healthy food is truly the best medicine.
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
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base px-2">
                To provide pure, organic food products that promote healthy living while supporting 
                sustainable farming practices. We aim to bridge the gap between conscious consumers 
                and responsible farmers, ensuring quality and authenticity in every product.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              
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
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Certified FSSAI</h3>
              <p className="text-gray-600 text-sm">No. 22419534000178</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Trusted Network</h3>
              <p className="text-gray-600 text-sm">Of organic farmers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Locally Owned</h3>
              <p className="text-gray-600 text-sm">& ethically run</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Transparent</h3>
              <p className="text-gray-600 text-sm">Pricing and quality</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Tamil Nadu's Taste</h3>
              <p className="text-gray-600 text-sm">The organic way!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Visit Us</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📍 Address:</h3>
                <p className="text-gray-600">Muthu Organic Shop<br />No.22A-2/2, 1st Main Road,<br />Jawahar Nagar, Perambur,<br />Chennai – 600 082</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📞 Phone:</h3>
                <p className="text-gray-600">7358260527 | 9489790011</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📧 Email:</h3>
                <p className="text-gray-600">muthuecoproducts@gmail.com / muthuecoonline@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About