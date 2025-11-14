import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Products = () => {
  const [loadedImages, setLoadedImages] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }))
  }

  const handleEnquiry = () => {
    const whatsappNumber = "+917358260527"
    const message = "Hello! I'm interested in your organic products. Please share more details."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="pt-0">

      {/* Hero Section */}
      <section className="min-h-[75vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-no-repeat pointer-events-none opacity-10" 
             style={{ 
               backgroundImage: "url('/images/organic.png')", 
               backgroundSize: 'auto 55vh', 
               backgroundPosition: 'right 15vh' 
             }}>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="relative inline-block">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800 relative z-10">
                Products
              </h1>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-green-200 opacity-60 rounded-full z-0"></div>
            </span>
          </div>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed text-gray-700 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            Every product from Muthu Eco Products is grown naturally and handled with care — ensuring that what reaches your kitchen is fresh, pure, and full of nutrients. Explore our range of 100% organic and natural essentials below.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((category, index) => {
              const isOdd = index % 2 === 0
              const imageLoaded = loadedImages[index]
              
              return (
                <div 
                  key={index} 
                  className={`group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-green-200/50 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Shimmer overlay */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent z-20"></div>
                    
                    <div className={`flex flex-col ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 p-8`}>
                      {/* Image Section */}
                      <div className="flex-1 relative">
                        <div className={`relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ${
                          !imageLoaded ? 'bg-gray-200 animate-pulse' : ''
                        }`}>
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className={`w-full h-[500px] object-cover transition-all duration-700 ${
                              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                            onLoad={() => handleImageLoad(index)}
                          />
                          
                          {/* Image overlay effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Floating badge */}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-sm font-semibold text-green-700">🌱 Organic</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1">
                        <div className="relative">
                          <h2 className="text-3xl font-bold text-green-700 mb-4 relative inline-block">
                            {category.title}
                            <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-yellow-400 rounded-full transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500"></div>
                          </h2>
                        </div>
                        
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed bg-gray-50/50 p-4 rounded-xl border-l-4 border-green-300">
                          {category.description}
                        </p>
                        
                        <div className="mb-6 space-y-4">
                          <div>
                            <h4 className="font-semibold text-yellow-600 mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                              Benefits:
                            </h4>
                            <ul className="space-y-2 mb-4">
                              {category.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start space-x-3 group/benefit">
                                  <span className="text-green-500 mt-1.5 text-lg flex-shrink-0">✓</span>
                                  <span className="text-gray-600 group-hover/benefit:text-gray-800 transition-colors duration-300">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-yellow-600 mb-2 flex items-center gap-2">
                              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                              Varieties:
                            </h4>
                            <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-xl border border-green-100">
                              <p className="text-gray-600 text-sm leading-relaxed">{category.items.join(", ")}</p>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={handleEnquiry}
                          className="group/btn relative bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-3 rounded-full hover:from-pink-500 hover:to-pink-600 transition-all duration-300 font-medium uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Enquire Now
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Muthu Organic Shop */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
              💫 Why Muthu Organic Shop?
              <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-700 mb-2 font-medium">Because we don't just sell food — we sell trust.</p>
            <p className="text-gray-600 max-w-2xl mx-auto">At Muthu, every grain, every spice, and every drop of oil comes with our personal promise of purity.</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: "Certified FSSAI", desc: "No. 22419534000178", icon: "🏆" },
              { title: "Trusted Network", desc: "Of organic farmers", icon: "🤝" },
              { title: "Locally Owned", desc: "& ethically run", icon: "🏠" },
              { title: "Transparent", desc: "Pricing and quality", icon: "🔍" },
              { title: "Tamil Nadu's Taste", desc: "The organic way! 🌾", icon: "🌾" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:border-green-200/70 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block">
            Visit or Contact Us
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full"></div>
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/50 group relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10 space-y-6 text-left">
              <div className="group/item">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-3 text-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  📍 Muthu Organic Shop
                </h3>
                <p className="text-gray-600 ml-5 pl-3 border-l-2 border-green-200 group-hover/item:border-green-400 transition-colors duration-300">
                  No.22A-2/2, 1st Main Road, Jawahar Nagar, Perambur,<br />Chennai – 600 082
                </p>
              </div>
              
              <div className="group/item">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-3 text-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  📞 Phone
                </h3>
                <p className="text-gray-600 ml-5 pl-3 border-l-2 border-green-200 group-hover/item:border-green-400 transition-colors duration-300">
                  7358260527 | 9489790011
                </p>
              </div>
              
              <div className="group/item">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-3 text-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  📧 Email
                </h3>
                <p className="text-gray-600 ml-5 pl-3 border-l-2 border-green-200 group-hover/item:border-green-400 transition-colors duration-300">
                  muthuecoproducts@gmail.com | muthuecoonline@gmail.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEnquiry}
              className="group/btn relative bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full hover:from-pink-500 hover:to-pink-600 transition-all duration-300 font-medium uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                </svg>
                WhatsApp Enquiry
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <Link
              to="/contact"
              className="group/btn relative bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-300 font-medium uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden flex items-center gap-3 justify-center"
            >
              <span className="relative z-10 flex items-center gap-3">
                Contact Us
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products