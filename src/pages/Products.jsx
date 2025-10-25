import { Link } from 'react-router-dom'

const Products = () => {
  const productCategories = [
    {
      title: "Organic Grains & Pulses",
      description: "Premium quality grains and pulses, naturally grown without chemicals",
      items: ["Organic Rice", "Wheat", "Black Gram", "Green Gram", "Chickpeas", "Red Lentils"],
      image: "/images/food-menu1.jpg"
    },
    {
      title: "Native Millets",
      description: "Nutritious ancient grains packed with essential nutrients",
      items: ["Finger Millet", "Pearl Millet", "Foxtail Millet", "Little Millet", "Barnyard Millet", "Kodo Millet"],
      image: "/images/food-menu2.jpg"
    },
    {
      title: "Spices & Condiments",
      description: "Aromatic spices that add authentic flavor to your dishes",
      items: ["Turmeric Powder", "Red Chili Powder", "Coriander Seeds", "Cumin Seeds", "Black Pepper", "Cardamom"],
      image: "/images/food-menu3.jpg"
    },
    {
      title: "Cold-Pressed Oils",
      description: "Pure, unrefined oils extracted using traditional methods",
      items: ["Coconut Oil", "Sesame Oil", "Groundnut Oil", "Sunflower Oil", "Mustard Oil", "Castor Oil"],
      image: "/images/food-menu4.jpg"
    },
    {
      title: "Natural Essentials",
      description: "Daily essentials sourced from nature for healthy living",
      items: ["Rock Salt", "Jaggery", "Honey", "Ghee", "Coconut Sugar", "Herbal Tea"],
      image: "/images/food-menu5.jpg"
    },
    {
      title: "Ready Mixes & Flours",
      description: "Convenient, healthy mixes and flours for quick cooking",
      items: ["Millet Flour Mix", "Multigrain Flour", "Ragi Flour", "Idli Mix", "Dosa Mix", "Adai Mix"],
      image: "/images/food-menu6.jpg"
    }
  ]

  const handleEnquiry = () => {
    const whatsappNumber = "+919876543210"
    const message = "Hello! I'm interested in your organic products. Please share more details."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our wide range of organic products, carefully sourced from trusted farms 
            to bring you the best of nature's bounty
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
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
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