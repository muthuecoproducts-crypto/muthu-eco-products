import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const location = useLocation()

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917358260527')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-gradient-to-r from-white/95 via-pink-50/95 to-white/95 backdrop-blur-md shadow-xl z-50 rounded-full border border-pink-100">
        <div className="px-6">
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
                  Muthu Organic Products
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">
                  Natural, Organic, Traditional
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
              <button onClick={handleCopyPhone} className="btn-primary text-sm px-6 py-2 ml-4 relative">
                {copied ? 'Copied!' : 'Call Now'}
              </button>
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

        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-28 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white backdrop-blur-md shadow-2xl z-40 rounded-3xl border border-gray-200 lg:hidden">
          <div className="p-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'text-white bg-gradient-to-r from-[#16a093] to-[#117964]' 
                  : 'text-gray-700 bg-white hover:bg-pink-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${
                location.pathname === '/products' 
                  ? 'text-white bg-gradient-to-r from-[#16a093] to-[#117964]' 
                  : 'text-gray-700 bg-white hover:bg-pink-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${
                location.pathname === '/about' 
                  ? 'text-white bg-gradient-to-r from-[#16a093] to-[#117964]' 
                  : 'text-gray-700 bg-white hover:bg-pink-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${
                location.pathname === '/contact' 
                  ? 'text-white bg-gradient-to-r from-[#16a093] to-[#117964]' 
                  : 'text-gray-700 bg-white hover:bg-pink-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => { handleCopyPhone(); setIsOpen(false); }}
              className="w-full mt-2 btn-primary text-center py-3"
            >
              {copied ? 'Copied!' : 'Call Now'}
            </button>
          </div>
        </div>
      )}
      
      {copied && (
        <div className="fixed top-24 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in-right">
          Phone number copied to clipboard
        </div>
      )}
    </>
  )
}

export default Navbar