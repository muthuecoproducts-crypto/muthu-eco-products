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
    <div className="pt-0">

      {/* Hero Section */}
      <section 
        className="min-h-[75vh] flex items-center justify-center relative"
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/images/organic.png')", backgroundSize: 'auto 55vh', backgroundPosition: 'right 15vh' }}></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          {/* <span className="inline-block text-sm font-medium text-primary mb-3 tracking-wider">
            LET'S CONNECT
          </span> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 leading-relaxed px-4 text-gray-700 max-w-2xl mx-auto">
            Get in touch with us for any queries about our organic products or to place an order
          </p>
          <a
            href="#contact-form"
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                    <div className="text-primary text-xl">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        No.22A-2/2, 1st Main Road<br />
                        Jawahar Nagar, Perambur<br />
                        Chennai – 600 082
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                    <div className="text-primary text-xl">📞</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 9489790011</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 hover:translate-x-2 transition-all duration-300">
                    <div className="text-primary text-xl">✉️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <button 
                        onClick={handleEmailClick}
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        muthuecoproducts@gmail.com
                      </button>
                    </div>
                  </div>
                  
                  

                </div>
                
              </div>
               {/* Quick Connect */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-t-2 hover:shadow-xl transition-all duration-300">
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
          <span className="inline-block text-sm font-medium text-pink-600 mb-2 tracking-wider">STAY CONNECTED</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Follow Us on Social Media</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
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
    </div>
  )
}

export default Contact