import { Link } from 'react-router-dom'

const Products = () => {
  const productCategories = [
    {
      title: "Organic & Natural Rice Varieties",
      description: "Our traditional rice varieties are cultivated using natural farming methods, free from chemicals or polish. Each grain carries the rich heritage and authentic taste of Tamil Nadu.",
      benefits: ["Retains bran and natural nutrients", "Easy to digest and energizing", "Great aroma and authentic texture", "Supports heart and gut health"],
      items: ["Thooyamalli (Boiled/Raw)", "Kitchili Samba (Boiled)", "Seeraga Samba (Boiled/Raw)", "Thanga Samba", "Sivan Samba", "Illupam Poo Samba (Boiled/Raw)", "Maapillai Samba", "Poongar", "Karuppu Kavuni", "Kattuyanam", "Karunguruvai", "Kullakar", "Arubadhamkuruvai", "Brown Rice", "Idli Rice"],
      image: "/images/grains.png"
    },
    {
      title: "Natural Millets",
      description: "Millets are ancient superfoods rich in fiber and minerals, ideal for modern healthy living. They're naturally gluten-free and promote sustained energy.",
      benefits: ["High in fiber and antioxidants", "Excellent for diabetic and heart-friendly diets", "Keeps you full longer and aids weight management", "Boosts immunity and metabolism"],
      items: ["Varagu", "Saamai", "Kula Saamai", "Thinai", "Kuthiraivali", "Raagi", "Naattu Kambu", "White Solam", "Red Solam"],
      image: "/images/native-millets.png"
    },
    {
      title: "Organic Pulses",
      description: "Our organic pulses are protein-rich, unpolished, and sourced directly from trusted farmers. Perfect for everyday meals, dals, and snacks.",
      benefits: ["High in protein and fiber", "Easy to cook and digest", "Great source of energy and iron", "No artificial polish or chemicals"],
      items: ["Toor Dhal", "Gram Dhal", "White Moong Dhal", "Green Moong Dhal Whole", "White Urad Dhal", "Black Urad Dhal", "Roasted Gram", "Groundnut"],
      image: "/images/grains.png"
    },
    {
      title: "Organic Flours",
      description: "Freshly ground from organic grains, our flours retain all essential nutrients and natural flavor. Ideal for wholesome cooking.",
      benefits: ["Stone-ground and preservative-free", "Rich in nutrients and fiber", "Perfect for traditional recipes", "Longer shelf life when stored properly"],
      items: ["Wheat Flour", "Ragi Flour", "Kambu Flour", "Traditional Mixed Rice Flour"],
      image: "/images/flour.png"
    },
    {
      title: "Natural Sweeteners",
      description: "We bring you unrefined, chemical-free sweeteners that make every dish naturally delicious and healthy.",
      benefits: ["100% natural and minimally processed", "Rich in minerals and antioxidants", "Healthier alternative to refined sugar", "Boosts immunity and energy"],
      items: ["Naattu Sakkarai", "Jaggery"],
      image: "/images/honey.png"
    },
    {
      title: "Organic Spices & Powders",
      description: "Our handpicked spices are sun-dried and freshly ground to retain their natural oils, aroma, and medicinal properties.",
      benefits: ["Enhances flavor and aroma naturally", "Packed with antioxidants", "Supports digestion and immunity", "Free from additives and colors"],
      items: ["Chilli Long", "Red Chilli Powder", "Mustard", "Pepper", "Coriander Seed", "Fenugreek", "Seeragam (Cumin)", "Sombu (Fennel)", "Cinnamon", "Cardamom", "Clove", "Garam Masala", "Curry Masala", "Sambar Powder", "Idly Powder", "Rasam Powder", "Tamarind"],
      image: "/images/spices.png"
    },
    {
      title: "Rava & Mixes",
      description: "Traditional rava and instant mixes made from organic grains for quick, healthy, and tasty meals.",
      benefits: ["Quick to cook and light on digestion", "Made from natural, chemical-free grains", "Great for easy breakfast or tiffin options", "No preservatives added"],
      items: ["Traditional Rice Mixed Rava", "Adai Mix"],
      image: "/images/flour.png"
    },
    {
      title: "Aval, Noodles & Flakes",
      description: "Wholesome, ready-to-cook flakes made from traditional rice varieties — perfect for healthy snacking or light meals.",
      benefits: ["Easy to prepare and filling", "Rich in fiber and nutrients", "Naturally gluten-free", "Suitable for all ages"],
      items: ["Karunguruvai Rice Aval", "Maapillai Samba Aval", "Karuppu Kavuni Aval"],
      image: "/images/grains.png"
    },
    {
      title: "Healthy Snacks",
      description: "Traditional homemade-style snacks made from native grains, offering taste, nutrition, and nostalgia in every bite.",
      benefits: ["Rich in protein and calcium", "Great energy boosters", "No artificial flavors or preservatives", "Perfect for kids and adults alike"],
      items: ["Ulundhankali", "Health Mix Laddu", "Moong Dhal Laddu", "Black Urad Dhal Laddu", "Raagi Laddu", "Thinai Laddu"],
      image: "/images/honey.png"
    },
    {
      title: "Idly Batter & Puttu Mixes",
      description: "Ready-to-cook, naturally fermented batters and mixes for authentic South Indian meals — pure, soft, and flavorful.",
      benefits: ["Fermented naturally, aids digestion", "Rich in protein and minerals", "Convenient and time-saving", "Made from traditional rice varieties"],
      items: ["Maapillai Samba Idly Batter", "Poongar Idly Batter", "Karunkuruvai Idly Batter", "Poongar Semiya Puttu", "Karuppu Kavuni Puttu Maavu"],
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
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up text-gray-800">
            Products
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed animate-slide-up px-2 text-gray-700">
            Every product from Muthu Eco Products is grown naturally and handled with care — ensuring that what reaches your kitchen is fresh, pure, and full of nutrients. Explore our range of 100% organic and natural essentials below.
          </p>
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
                          <span className="text-primary mt-1">●</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold text-gray-800 mb-2">Varieties:</h4>
                    <p className="text-gray-700 text-sm">{category.items.join(", ")}</p>
                  </div>
                  <button
                    onClick={handleEnquiry}
                    className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition-colors duration-300 font-medium uppercase shadow-lg"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Muthu Organic Shop */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">💫 Why Muthu Organic Shop?</h2>
          <p className="text-xl text-gray-700 mb-2">Because we don't just sell food — we sell trust.</p>
          <p className="text-gray-600 mb-12">At Muthu, every grain, every spice, and every drop of oil comes with our personal promise of purity.</p>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300">
              <h3 className="text-lg font-semibold mb-2">Certified FSSAI</h3>
              <p className="text-gray-600 text-sm">No. 22419534000178</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300">
              <h3 className="text-lg font-semibold mb-2">Trusted Network</h3>
              <p className="text-gray-600 text-sm">Of organic farmers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300">
              <h3 className="text-lg font-semibold mb-2">Locally Owned</h3>
              <p className="text-gray-600 text-sm">& ethically run</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300">
              <h3 className="text-lg font-semibold mb-2"> Transparent</h3>
              <p className="text-gray-600 text-sm">Pricing and quality</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-300">
              <h3 className="text-lg font-semibold mb-2">Tamil Nadu's Taste</h3>
              <p className="text-gray-600 text-sm">The organic way! 🌾</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit or Contact Us</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📍 Muthu Organic Shop</h3>
                <p className="text-gray-600">No.22A-2/2, 1st Main Road, Jawahar Nagar, Perambur,<br />Chennai – 600 082</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📞 Phone</h3>
                <p className="text-gray-600">7358260527 | 9489790011</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📧 Email</h3>
                <p className="text-gray-600">muthuecoproducts@gmail.com | muthuecoonline@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEnquiry}
              className="bg-pink-400 text-white px-8 py-3 rounded-full hover:bg-pink-500 transition-colors duration-300 font-medium uppercase shadow-lg"
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
