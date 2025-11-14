import { Link } from 'react-router-dom'

const Home = () => {
  const testimonials = [
    {
      name: "Lakshmi Raman",
      text: "இயற்கை உணவுகள் மிகவும் சுவையாக இருக்கிறது! எங்கள் குடும்பத்திற்கு மிகவும் பிடித்திருக்கிறது.",
      rating: 5,
      image: "/images/lakshmi.png"
    },
    {
      name: "Murugan Selvam",
      text: "Best organic grains and millets. நல்ல தரமான சிறுதானியங்கள். வீட்டில் எல்லோருக்கும் பிடித்திருக்கிறது.",
      rating: 5,
      image: "/images/murugan.png"
    },
    {
      name: "Kamala Devi",
      text: "Pure and authentic products. சுத்தமான இயற்கை உணவுகள். Great service and fast delivery.",
      rating: 5,
      image: "/images/kamala.png"
    }
  ]

  return (
    <div className="pt-18">

      {/* Hero Section */}
      <section 
        className="min-h-[95vh] flex items-center justify-center relative"
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/images/organic.png')", backgroundSize: 'auto 70vh', backgroundPosition: 'right 17vh' }}></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in text-gray-800">
            Wholesome. Honest. Homegrown.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 leading-relaxed animate-slide-up px-2 text-gray-700">
            Welcome to Muthu Eco Products — your trusted source for pure, organic essentials. From farm-fresh grains to traditional spices, we bring you food that's as real as nature intended — free from chemicals, full of goodness.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4">
            <Link 
              to="/products" 
              className="btn-primary inline-block text-center"
            >
              Explore Our Range
            </Link>
            <Link 
              to="/about" 
              className="btn-secondary inline-block text-center"
            >
              Know Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Nature's Best Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8">
            <img 
              src="/images/packaging.png" 
              alt="Organic Products" 
              className="w-80 h-80 rounded-full object-cover flex-shrink-0 hidden md:block"
            />
            <div className="text-center md:text-left flex-1">
              <h2 className="section-title">Nature's Best, Packed with Care.</h2>
              <p className="section-subtitle max-w-3xl md:mx-0 mx-auto">
                Discover our complete range of naturally grown rice, millets, pulses, flours, spices, and healthy mixes — all sourced directly from local organic farms. Pure taste, rich nutrition, and eco-friendly packaging in every pack.
              </p>
              <Link 
                to="/products" 
                className="btn-primary inline-block mt-6"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Supply Section */}
      <section className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8">
            <div className="text-center md:text-right flex-1">
              <h2 className="section-title">Fresh Idly & Dosa Batter for Bulk Supply</h2>
              <p className="section-subtitle max-w-3xl md:mx-0 md:ml-auto mx-auto">
                Supplying freshly prepared, preservative-free Idly and Dosa batter made from native rice varieties — perfect for restaurants, caterers, and organic stores. Consistency, purity, and authentic flavor guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end justify-center mt-6">
                <Link 
                  to="/contact" 
                  className="btn-primary inline-block"
                >
                  Enquire for Bulk Orders
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-secondary inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <img 
              src="/images/imag.png" 
              alt="Idly Dosa Batter" 
              className="w-96 h-96 rounded-full object-cover flex-shrink-0 hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="section-title">🥣 Our Promise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">🌾</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">100% Organic</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Certified and verified for purity</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Direct from Farmers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Supporting local and sustainable agriculture</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">💚</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">No Chemicals or Preservatives</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Just natural goodness</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">🍚</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Authentic Taste</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Experience the real flavor of native Tamil Nadu produce</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Eco-Friendly Packaging</h3>
              <p className="text-professional text-xs sm:text-sm">Because health and nature go hand in hand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We stand out in the organic food industry through our commitment to excellence
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Assured</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Rigorous quality checks and certifications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Farm Direct</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">No middlemen, direct from trusted farms</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Safe Packaging</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Eco-friendly and secure packaging</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Satisfaction</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">100% customer satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              What Our Customers Say
            </h2>
            <p className="section-subtitle">
              Real experiences from families who trust us for their organic food needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-hover p-8 text-center relative hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-professional text-lg mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="text-left">
                    <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                    <p className="text-primary font-medium">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
