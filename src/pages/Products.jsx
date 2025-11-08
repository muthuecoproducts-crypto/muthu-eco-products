import { Link } from 'react-router-dom'

const Products = () => {
  const productCategories = [
    {
      title: "1. Organic Grains & Pulses",
      description: "From traditional rice to nourishing lentils, these staples form the heart of every healthy meal.",
      benefits: ["Naturally rich in protein and fiber", "Helps in maintaining balanced energy levels", "Easier digestion compared to polished or chemical-treated grains", "Retains authentic aroma and texture"],
      items: ["Traditional Rice Varieties", "Toor Dal", "Moong Dal", "Urad Dal", "Bengal Gram"],
      image: "/images/grains.png"
    },
    {
      title: "2. Native Millets",
      description: "The ancient superfoods that our ancestors loved — millets are the comeback stars of healthy living!",
      benefits: ["Gluten-free & rich in antioxidants", "Keeps you full for longer (great for weight management)", "Boosts heart health and immunity", "Ideal for diabetic-friendly meals"],
      items: ["Foxtail Millet", "Barnyard Millet", "Little Millet", "Kodo Millet", "Finger Millet (Ragi)"],
      image: "/images/native-millets.png"
    },
    {
      title: "3. Spices & Condiments",
      description: "Our spices are sun-dried, handpicked, and full of natural oils — giving you that unbeatable aroma and taste.",
      benefits: ["Natural source of antioxidants", "Improves digestion and metabolism", "Adds real flavor without artificial enhancers", "Helps in boosting immunity"],
      items: ["Turmeric", "Pepper", "Coriander", "Mustard", "Cumin", "Fenugreek"],
      image: "/images/spices.png"
    },
    {
      title: "4. Cold-Pressed Oils",
      description: "Extracted the traditional way — no heat, no chemicals, just raw nutrition in every drop.",
      benefits: ["Retains natural nutrients and aroma", "Supports heart health and balanced cholesterol", "Perfect for traditional cooking and skincare", "Long shelf life with pure extraction process"],
      items: ["Gingelly Oil", "Coconut Oil", "Groundnut Oil"],
      image: "/images/oils.png"
    },
    {
      title: "5. Natural Essentials",
      description: "Tiny kitchen heroes that make every dish wholesome and flavorful!",
      benefits: ["100% natural and unrefined", "Boosts immunity and energy levels", "Great alternatives to processed sugar and salts"],
      items: ["Pure Honey", "Jaggery", "Rock Salt", "Country Sugar"],
      image: "/images/honey.png"
    },
    {
      title: "6. Ready Mixes & Flours",
      description: "Convenience meets tradition — instant mixes made with care and love!",
      benefits: ["Freshly ground from organic grains", "Free from preservatives", "Quick, healthy meal options for busy mornings"],
      items: ["Idli/Dosa Batter", "Multigrain Mix", "Ragi Flour", "Besan", "Wheat Flour"],
      image: "/images/flour.png"
    }
  ]

  const handleEnquiry = () => {
    const whatsappNumber = "+917358260527"
    const message = "Hello! I'm interested in your organic products. Please share more details."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="pt-0">

      {/* Hero Section */}
      <section 
        className="min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/organic.png')" }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up">
            Our Product Range & Benefits
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed animate-slide-up px-2">
            Even though we're a humble store, our shelves are full of nature's treasures. Here's a glimpse of what we bring to your table — and why they're amazing for your health!
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-block animate-slide-up"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div 
                key={index} 
                className="relative rounded-2xl overflow-hidden shadow-xl min-h-[500px] flex items-center"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.3) 100%), url('${category.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="p-8 md:p-12 max-w-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.title}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{category.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                    <ul className="space-y-2 mb-4">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-primary font-semibold">Popular items: {category.items.join(", ")}</p>
                  </div>
                  <button
                    onClick={handleEnquiry}
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors duration-300 font-medium uppercase shadow-lg"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Quality Assurance</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary">
              <h3 className="text-xl font-semibold mb-3">Lab Tested</h3>
              <p className="text-gray-600">All products undergo rigorous laboratory testing</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-accent">
              <h3 className="text-xl font-semibold mb-3">Certified Organic</h3>
              <p className="text-gray-600">Certified by recognized organic certification bodies</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary">
              <h3 className="text-xl font-semibold mb-3">Chemical Free</h3>
              <p className="text-gray-600">No pesticides, chemicals, or artificial additives</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-accent">
              <h3 className="text-xl font-semibold mb-3">Fresh Delivery</h3>
              <p className="text-gray-600">Direct from farm to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Organic Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to learn more about our products and place your order
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEnquiry}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 font-medium uppercase shadow-lg"
            >
              WhatsApp Enquiry
            </button>
            <Link
              to="/contact"
              className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 font-medium uppercase shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products