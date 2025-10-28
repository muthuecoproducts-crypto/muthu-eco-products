import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-professional z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/images/MEP logo.png" 
                alt="MEP Logo" 
                className="w-12 h-12 object-contain group-hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-800">
                  Muthu Eco Products
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">
                  Sustainable Solutions
                </span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`font-semibold transition-all duration-300 relative py-2 ${
                location.pathname === '/' 
                  ? 'text-[#16a093] border-b-2 border-[#16a093]' 
                  : 'text-gray-700 hover:text-[#16a093]'
              }`}>
                Home
              </Link>
              <Link to="/products" className={`font-semibold transition-all duration-300 relative py-2 ${
                location.pathname === '/products' 
                  ? 'text-[#16a093] border-b-2 border-[#16a093]' 
                  : 'text-gray-700 hover:text-[#16a093]'
              }`}>
                Products
              </Link>
              <Link to="/about" className={`font-semibold transition-all duration-300 relative py-2 ${
                location.pathname === '/about' 
                  ? 'text-[#16a093] border-b-2 border-[#16a093]' 
                  : 'text-gray-700 hover:text-[#16a093]'
              }`}>
                About
              </Link>
              <Link to="/contact" className={`font-semibold transition-all duration-300 relative py-2 ${
                location.pathname === '/contact' 
                  ? 'text-[#16a093] border-b-2 border-[#16a093]' 
                  : 'text-gray-700 hover:text-[#16a093]'
              }`}>
                Contact
              </Link>
              <a href="tel:+917358260527" className="btn-primary text-sm px-6 py-2 ml-4">
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-lg p-2 transition-colors duration-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
        </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-lg border-t border-gray-100">
              <Link
                to="/"
                className={`block px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'text-[#16a093] bg-[#16a093]/10 border-l-4 border-[#16a093]' 
                    : 'text-gray-700 hover:text-[#16a093] hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === '/about' 
                    ? 'text-[#16a093] bg-[#16a093]/10 border-l-4 border-[#16a093]' 
                    : 'text-gray-700 hover:text-[#16a093] hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`block px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === '/products' 
                    ? 'text-[#16a093] bg-[#16a093]/10 border-l-4 border-[#16a093]' 
                    : 'text-gray-700 hover:text-[#16a093] hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === '/contact' 
                    ? 'text-[#16a093] bg-[#16a093]/10 border-l-4 border-[#16a093]' 
                    : 'text-gray-700 hover:text-[#16a093] hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+917358260527"
                className="block mx-4 mt-4 btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar