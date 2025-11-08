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

  const productHighlights = [
    {
      title: "Organic Grains",
      image: "/images/grains.png",
      description: "Chemical-free grains sourced directly from trusted farms"
    },
    {
      title: "Native Millets",
      image: "/images/image.png",
      description: "Nutritious millets packed with health benefits"
    },
    {
      title: "Natural Spices",
      image: "/images/spices.png",
      description: "Pure spices that retain authentic taste and aroma"
    }
  ]

  return (
    <div className="pt-18">

      {/* Hero Section */}
      <section 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/header-image2.jpg')" }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
            Pure. Fresh. 100% Organic.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 leading-relaxed animate-slide-up px-2">
            From our trusted farms to your plate — experience food that's good for you and the planet.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 leading-relaxed animate-slide-up opacity-90 px-2">
            We bring you the purest grains, millets, spices, and essentials — all grown naturally, free from harmful chemicals. Every product carries the love of the land and the honesty of our farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4">
            <Link 
              to="/products" 
              className="btn-primary inline-block text-center"
            >
              Explore Our Products
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

      {/* Our Promise */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="section-title">Our Promise</h2>
          <p className="section-subtitle">
            We value quality over quantity — ensuring that what reaches your kitchen is as pure as nature made it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            <div className="card card-hover p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">100% Organic</h3>
              <p className="text-professional text-xs sm:text-sm">Certified and verified for purity</p>
            </div>
            <div className="card card-hover p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Direct from Farmers</h3>
              <p className="text-professional text-xs sm:text-sm">Supporting local and sustainable agriculture</p>
            </div>
            <div className="card card-hover p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">No Chemicals</h3>
              <p className="text-professional text-xs sm:text-sm">Free from chemicals, powered only by nature’s pure ingredients</p>
            </div>
            <div className="card card-hover p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Authentic Taste</h3>
              <p className="text-professional text-xs sm:text-sm">Real flavor of native Tamil Nadu produce</p>
            </div>
            <div className="card card-hover p-4 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Eco-Friendly</h3>
              <p className="text-professional text-xs sm:text-sm">Health and nature go hand in hand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Product Categories
            </h2>
            <p className="section-subtitle">
              Discover our carefully curated selection of premium organic products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {productHighlights.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center">
                  <div className="text-center text-white p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-3">{product.title}</h3>
                    <p className="mb-6 text-lg">{product.description}</p>
                    <Link 
                      to="/products" 
                      className="inline-block bg-white text-[#16a093] px-8 py-3 rounded-full hover:bg-[#16a093] hover:text-white transition-all duration-300 font-semibold uppercase tracking-wide shadow-lg"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <Link 
                    to="/products" 
                    className="bg-white/90 text-[#16a093] px-6 py-2 rounded-full hover:bg-[#16a093] hover:text-white transition-all duration-300 font-semibold text-sm shadow-lg backdrop-blur-sm"
                  >
                    View Products
                  </Link>
                </div> */}
              </div>
            ))}
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
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                {/* <div className="w-12 h-1 bg-primary rounded-full mb-3"></div> */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">Quality Assured</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Rigorous quality checks and certifications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                {/* <div className="w-12 h-1 bg-secondary rounded-full mb-3"></div> */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">Farm Direct</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">No middlemen, direct from trusted farms</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                {/* <div className="w-12 h-1 bg-accent rounded-full mb-3"></div> */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">Safe Packaging</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Eco-friendly and secure packaging</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                {/* <div className="w-12 h-1 bg-primary rounded-full mb-3"></div> */}
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
              <div key={index} className="card card-hover p-8 text-center relative">
                {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-2xl">
                    "
                  </div>
                </div> */}
                <div className="flex justify-center mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-2xl">★</span>
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