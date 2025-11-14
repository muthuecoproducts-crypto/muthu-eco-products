const About = () => {
  return (
    <div className="pt-0 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-right-top opacity-15" 
             style={{ backgroundImage: "url('/images/organic-pattern.png')" }}></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat pointer-events-none animate-fade-in-right"
             style={{ backgroundImage: "url('/images/organic.png')", backgroundSize: 'auto 65vh', backgroundPosition: 'right 10vh' }}></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-sm font-medium text-green-600 mb-3 tracking-wider animate-slide-up-fade opacity-0" style={{ animationDelay: '0.1s' }}>
            OUR JOURNEY TO PURITY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up-fade opacity-0 text-gray-800" style={{ animationDelay: '0.3s' }}>
            About <span className="text-green-700">Muthu Organic</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed animate-slide-up-fade opacity-0 px-4 text-gray-700 max-w-2xl mx-auto" style={{ animationDelay: '0.5s' }}>
            Your neighborhood destination for fresh, farm-grown, and fully organic essentials that nurture both your health and our planet.
          </p>
          <a
            href="/contact"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 inline-block animate-slide-up-fade opacity-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{ animationDelay: '0.7s' }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-in-left opacity-0">
              <span className="inline-block text-sm font-medium text-green-600 mb-3 tracking-wider">OUR STORY</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Welcome to Muthu Organic Shop</h2>
              <div className="space-y-4 text-gray-600">
                <p className="italic text-lg border-l-4 border-green-200 pl-4">
                  "நல் உணவே அரும் ருந்து — healthy food is truly the best medicine."
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
              
              <div className="mt-8">
                <a href="/products" className="text-green-600 hover:text-green-700 font-medium flex items-center group">
                  Explore Our Products 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-right opacity-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-100 rounded-full z-0"></div>
                <img 
                  src="/images/home.png" 
                  alt="Our Story" 
                  className="w-full h-auto sm:h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain opacity-5" 
             style={{ backgroundImage: "url('/images/leaf-pattern.png')" }}></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-green-600 mb-3 tracking-wider">OUR PURPOSE</span>
            <h2 className="text-3xl font-bold text-gray-800">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide pure, organic food products that promote healthy living while supporting 
                sustainable farming practices. We aim to bridge the gap between conscious consumers 
                and responsible farmers, ensuring quality and authenticity in every product.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted name in organic food products, creating a healthier world 
                where organic living is accessible to all. We envision a future where every meal 
                contributes to personal health and environmental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up opacity-0">
            <span className="inline-block text-sm font-medium text-green-600 mb-3 tracking-wider">OUR PROMISE</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Muthu Organic Shop?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Because we don't just sell food — we sell trust. At Muthu, every grain, every spice, and every drop of oil comes with our personal promise of purity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "Certified FSSAI", desc: "No. 22419534000178", icon: "certificate", delay: "0.1s", color: "green" },
              { title: "Trusted Network", desc: "Of organic farmers", icon: "users", delay: "0.2s", color: "blue" },
              { title: "Locally Owned", desc: "& ethically run", icon: "home", delay: "0.3s", color: "yellow" },
              { title: "Transparent", desc: "Pricing and quality", icon: "eye", delay: "0.4s", color: "indigo" },
              { title: "Tamil Nadu's Taste", desc: "The organic way!", icon: "star", delay: "0.5s", color: "red" },
            ].map((item, index) => (
              <div key={index} 
                   className={`bg-white p-6 rounded-2xl shadow-lg border-b-4 border-${item.color}-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up opacity-0`}
                   style={{ animationDelay: item.delay }}>
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  {item.icon === "certificate" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${item.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )}
                  {item.icon === "users" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${item.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {item.icon === "home" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${item.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {item.icon === "eye" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${item.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                  {item.icon === "star" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${item.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-10" 
             style={{ backgroundImage: "url('/images/leaf-bottom.png')" }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-sm font-medium text-green-600 mb-3 tracking-wider animate-fade-in-up opacity-0">REACH OUT</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>Visit Us</h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-4 hover:bg-green-50 rounded-xl transition-colors duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">Address</h3>
                <p className="text-gray-600 text-sm">
                  Muthu Organic Shop<br />
                  No.22A-2/2, 1st Main Road,<br />
                  Jawahar Nagar, Perambur,<br />
                  Chennai – 600 082
                </p>
              </div>
              <div className="text-center p-4 hover:bg-blue-50 rounded-xl transition-colors duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">Phone</h3>
                <p className="text-gray-600 text-sm">
                  <a href="tel:7358260527" className="hover:text-blue-600 transition-colors duration-300">7358260527</a><br />
                  <a href="tel:9489790011" className="hover:text-blue-600 transition-colors duration-300">9489790011</a>
                </p>
              </div>
              <div className="text-center p-4 hover:bg-yellow-50 rounded-xl transition-colors duration-300">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:muthuecoproducts@gmail.com" className="hover:text-yellow-600 transition-colors duration-300">muthuecoproducts@gmail.com</a><br />
                  <a href="mailto:muthuecoonline@gmail.com" className="hover:text-yellow-600 transition-colors duration-300">muthuecoonline@gmail.com</a>
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Business Hours</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md mx-auto">
                <div className="flex justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-50 rounded sm:col-span-2">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">11:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add at the end of your CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease forwards;
        }
        
        .animate-slide-up-fade {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </div>
  )
}

export default About
