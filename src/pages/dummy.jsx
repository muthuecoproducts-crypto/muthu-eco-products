import ContactForm from '../components/ContactForm'

const Contact = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "+917358260527"
    const message = "Hello! I would like to know more about your organic products."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:muthuecoproducts@gmail.com"
  }

  return (
    <div className="pt-0 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-right-top opacity-10" 
             style={{ backgroundImage: "url('/images/leaf-pattern.png')" }}></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat pointer-events-none animate-fade-in-right opacity-0"
             style={{ backgroundImage: "url('/images/organic.png')", backgroundSize: 'auto 65vh', backgroundPosition: 'right 10vh', animationDelay: '0.3s' }}></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-sm font-medium text-green-600 mb-3 tracking-wider animate-slide-up-fade opacity-0" style={{ animationDelay: '0.1s' }}>
            LET'S CONNECT
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up-fade opacity-0 text-gray-800" style={{ animationDelay: '0.3s' }}>
            Get In <span className="text-green-700">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed animate-slide-up-fade opacity-0 px-4 text-gray-700 max-w-2xl mx-auto" style={{ animationDelay: '0.5s' }}>
            Have questions about our organic products? Want to place an order? We'd love to hear from you!
          </p>
          <a
            href="#contact-form"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 inline-block animate-slide-up-fade opacity-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{ animationDelay: '0.7s' }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form" className="animate-fade-in-left opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8 animate-fade-in-right opacity-0" style={{ animationDelay: '0.4s' }}>
              {/* Contact Info */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-gray-800 mb-1">Visit Our Store</h4>
                      <p className="text-gray-600">
                        No.22A-2/2, 1st Main Road<br />
                        Jawahar Nagar, Perambur<br />
                        Chennai – 600 082
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                      <p className="text-gray-600">
                        <a href="tel:+919489790011" className="hover:text-blue-600 transition-colors">+91 9489790011</a><br />
                        <a href="tel:+917358260527" className="hover:text-blue-600 transition-colors">+91 7358260527</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                      <button 
                        onClick={handleEmailClick}
                        className="text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        muthuecoproducts@gmail.com
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-4">Business Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between hover:bg-gray-50 p-2 rounded transition-colors">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between hover:bg-gray-50 p-2 rounded transition-colors">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between hover:bg-gray-50 p-2 rounded transition-colors">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">11:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Connect</h3>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 hover:scale-105 flex-grow"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </button>
                  <a
                    href="tel:+917358260527"
                    className="flex items-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 flex-grow"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-5" 
             style={{ backgroundImage: "url('/images/pattern-light.png')" }}></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-sm font-medium text-green-600 mb-2 tracking-wider animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>STAY CONNECTED</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>Follow Us on Social Media</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            Stay updated with our latest products, special offers, and organic living tips by following us on social media.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/share/17KUaMXDLG/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/muthu_eco_products/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
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

export default Contact
