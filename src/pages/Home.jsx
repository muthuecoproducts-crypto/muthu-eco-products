import { Link } from 'react-router-dom'

const Home = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Amazing quality organic products! My family loves the taste and freshness.",
      rating: 5,
      image: "/images/male-photo1.jpg"
    },
    {
      name: "Rajesh Kumar",
      text: "Best organic grains and millets. Highly recommend for healthy living.",
      rating: 5,
      image: "/images/male-photo2.jpg"
    },
    {
      name: "Meera Patel",
      text: "Pure and authentic products. Great service and fast delivery.",
      rating: 5,
      image: "/images/male-photo3.jpg"
    }
  ]

  const productHighlights = [
    {
      title: "Organic Grains",
      image: "/images/food1.jpg",
      description: "Chemical-free grains sourced directly from trusted farms"
    },
    {
      title: "Native Millets",
      image: "/images/food2.jpg",
      description: "Nutritious millets packed with health benefits"
    },
    {
      title: "Natural Spices",
      image: "/images/food3.jpg",
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
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Pure Organic Living
          </h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed animate-slide-up">
            Fresh, organic food items sourced directly from trusted farms for your healthy lifestyle
          </p>
          <Link 
            to="/products" 
            className="btn-primary inline-block animate-slide-up"
          >
            Explore Products
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="content-spacing">
              <p className="text-primary font-semibold text-lg tracking-wide uppercase">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                We've been providing pure organic products for healthy living
              </h2>
              <p className="text-professional text-lg">
                At Muthu Eco Products, we are committed to bringing you the finest organic food items. 
                From chemical-free grains and pulses to nutritious millets, spices, and natural essentials, 
                our products retain their authentic taste and health benefits.
              </p>
              <Link 
                to="/about" 
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg"></div>
              <img 
                src="/images/about-photo.jpg" 
                alt="About Us" 
                className="relative w-full h-96 object-cover object-right rounded-xl shadow-professional hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="section-title">Our Promise</h2>
          <p className="section-subtitle">
            We are committed to delivering excellence in every aspect of our organic products
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="card card-hover p-8 text-center">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Organic</h3>
              <p className="text-professional">All our products are certified organic and chemical-free, ensuring pure nutrition for your family</p>
            </div>
            <div className="card card-hover p-8 text-center">
              <div className="text-5xl mb-6">🚚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Farm Fresh</h3>
              <p className="text-professional">Direct sourcing from trusted farms ensures maximum freshness and authentic taste in every product</p>
            </div>
            <div className="card card-hover p-8 text-center">
              <div className="text-5xl mb-6">💚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Health First</h3>
              <p className="text-professional">Products that promote healthy living and well-being for you and your loved ones</p>
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
          <div className="grid md:grid-cols-3 gap-10">
            {productHighlights.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
                  <div className="text-center text-white p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-3">{product.title}</h3>
                    <p className="mb-6 text-lg">{product.description}</p>
                    <Link 
                      to="/products" 
                      className="bg-white text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-semibold uppercase tracking-wide"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group hover-lift p-6 rounded-xl">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">✅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-professional">Rigorous quality checks and certifications</p>
            </div>
            <div className="group hover-lift p-6 rounded-xl">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌾</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Farm Direct</h3>
              <p className="text-professional">No middlemen, direct from trusted farms</p>
            </div>
            <div className="group hover-lift p-6 rounded-xl">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📦</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safe Packaging</h3>
              <p className="text-professional">Eco-friendly and secure packaging</p>
            </div>
            <div className="group hover-lift p-6 rounded-xl">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfaction</h3>
              <p className="text-professional">100% customer satisfaction guarantee</p>
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-2xl">
                    "
                  </div>
                </div>
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