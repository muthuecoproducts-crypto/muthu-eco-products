import { Link } from 'react-router-dom'

const Products = () => {
  const productCategories = [
    {
      title: "🌵 1. Organic Grains & Pulses",
      description: "From traditional rice to nourishing lentils, these staples form the heart of every healthy meal.",
      benefits: ["Naturally rich in protein and fiber", "Helps in maintaining balanced energy levels", "Easier digestion compared to polished or chemical-treated grains", "Retains authentic aroma and texture"],
      items: ["Traditional Rice Varieties", "Toor Dal", "Moong Dal", "Urad Dal", "Bengal Gram"],
      image: "/images/food-menu1.jpg"
    },
    {
      title: "🌾 2. Native Millets",
      description: "The ancient superfoods that our ancestors loved — millets are the comeback stars of healthy living!",
      benefits: ["Gluten-free & rich in antioxidants", "Keeps you full for longer (great for weight management)", "Boosts heart health and immunity", "Ideal for diabetic-friendly meals"],
      items: ["Foxtail Millet", "Barnyard Millet", "Little Millet", "Kodo Millet", "Finger Millet (Ragi)"],
      image: "/images/food-menu2.jpg"
    },
    {
      title: "🌶 3. Spices & Condiments",
      description: "Our spices are sun-dried, handpicked, and full of natural oils — giving you that unbeatable aroma and taste.",
      benefits: ["Natural source of antioxidants", "Improves digestion and metabolism", "Adds real flavor without artificial enhancers", "Helps in boosting immunity"],
      items: ["Turmeric", "Pepper", "Coriander", "Mustard", "Cumin", "Fenugreek"],
      image: "/images/food-menu3.jpg"
    },
    {
      title: "🥥 4. Cold-Pressed Oils",
      description: "Extracted the traditional way — no heat, no chemicals, just raw nutrition in every drop.",
      benefits: ["Retains natural nutrients and aroma", "Supports heart health and balanced cholesterol", "Perfect for traditional cooking and skincare", "Long shelf life with pure extraction process"],
      items: ["Gingelly Oil", "Coconut Oil", "Groundnut Oil"],
      image: "/images/food-menu4.jpg"
    },
    {
      title: "🍯 5. Natural Essentials",
      description: "Tiny kitchen heroes that make every dish wholesome and flavorful!",
      benefits: ["100% natural and unrefined", "Boosts immunity and energy levels", "Great alternatives to processed sugar and salts"],
      items: ["Pure Honey", "Jaggery", "Rock Salt", "Country Sugar"],
      image: "/images/food-menu5.jpg"
    },
    {
      title: "🥓 6. Ready Mixes & Flours",
      description: "Convenience meets tradition — instant mixes made with care and love!",
      benefits: ["Freshly ground from organic grains", "Free from preservatives", "Quick, healthy meal options for busy mornings"],
      items: ["Idli/Dosa Batter", "Multigrain Mix", "Ragi Flour", "Besan", "Wheat Flour"],
      image: "/images/food-menu6.jpg"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">🌻 Our Product Range & Benefits</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Even though we're a humble store, our shelves are full of nature's treasures. Here's a glimpse of what we bring to your table — and why they're amazing for your health!
          </p>
          <button
            onClick={handleEnquiry}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-medium uppercase"
          >
            Make Enquiry
          </button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
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
                    <p className="text-primary font-semibold">✨ Popular items: {category.items.join(", ")}</p>
                  </div>
                  <button
                    onClick={handleEnquiry}
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors duration-300 font-medium uppercase"
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
            <div className="space-y-4">
              <div className="text-4xl">🔬</div>
              <h3 className="text-xl font-semibold">Lab Tested</h3>
              <p className="text-gray-600">All products undergo rigorous laboratory testing</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">📜</div>
              <h3 className="text-xl font-semibold">Certified Organic</h3>
              <p className="text-gray-600">Certified by recognized organic certification bodies</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🌱</div>
              <h3 className="text-xl font-semibold">Chemical Free</h3>
              <p className="text-gray-600">No pesticides, chemicals, or artificial additives</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🚚</div>
              <h3 className="text-xl font-semibold">Fresh Delivery</h3>
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
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-medium uppercase"
            >
              WhatsApp Enquiry
            </button>
            <Link
              to="/contact"
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 font-medium uppercase"
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