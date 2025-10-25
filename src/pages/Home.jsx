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
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/header-image2.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
            Pure Organic Living
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Fresh, organic food items sourced directly from trusted farms
          </p>
          <Link 
            to="/products" 
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-medium uppercase inline-block"
          >
            Our Products
          </Link>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-primary font-medium">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                We've been providing pure organic products for healthy living
              </h2>
              <p className="text-gray-600 text-lg">
                At Muthu Eco Products, we are committed to bringing you the finest organic food items. 
                From chemical-free grains and pulses to nutritious millets, spices, and natural essentials, 
                our products retain their authentic taste and health benefits.
              </p>
              <Link 
                to="/about" 
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors duration-300 font-medium uppercase inline-block"
              >
                Learn More
              </Link>
            </div>
            <div>
              <img 
                src="/images/about-photo.jpg" 
                alt="About Us" 
                className="w-full h-96 object-cover object-right rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Promise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">🌱</div>
              <h3 className="text-xl font-semibold">100% Organic</h3>
              <p className="text-gray-600">All our products are certified organic and chemical-free</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🚚</div>
              <h3 className="text-xl font-semibold">Farm Fresh</h3>
              <p className="text-gray-600">Direct sourcing from trusted farms ensures maximum freshness</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">💚</div>
              <h3 className="text-xl font-semibold">Health First</h3>
              <p className="text-gray-600">Products that promote healthy living and well-being</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Product Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productHighlights.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="mb-4">{product.description}</p>
                    <Link 
                      to="/products" 
                      className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300 text-sm uppercase"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="text-3xl">✅</div>
              <h3 className="font-semibold">Quality Assured</h3>
              <p className="text-sm text-gray-600">Rigorous quality checks</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🌾</div>
              <h3 className="font-semibold">Farm Direct</h3>
              <p className="text-sm text-gray-600">No middlemen involved</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">📦</div>
              <h3 className="font-semibold">Safe Packaging</h3>
              <p className="text-sm text-gray-600">Eco-friendly packaging</p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">💯</div>
              <h3 className="font-semibold">Satisfaction</h3>
              <p className="text-sm text-gray-600">100% customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
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