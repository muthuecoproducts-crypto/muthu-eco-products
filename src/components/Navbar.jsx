import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && 
          mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+917358260527')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
    <nav ref={navRef} className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-gradient-to-r from-white/95 via-pink-50/95 to-white/95 backdrop-blur-md shadow-xl z-50 rounded-full border border-pink-100 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-4'}`}>
        <div className="px-6">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <img 
                src="/images/MEP logo.png" 
                alt="MEP Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-gray-800">
                  Muthu Eco Products
                </span>
                <span className="text-[0.65rem] sm:text-xs text-gray-500 font-medium tracking-tight leading-tight">
                  We are the retailers of traditional,<br />natural and organic groceries
                </span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`font-semibold transition-all duration-300 relative py-2 ${
                location.pathname === '/' 
                  ? 'text-pink-500 border-b-2 border-pink-500' 
                  : 'text-gray-700 hover:text-pink-500'
              }`}>
                Home
              </Link>
              <Link to="/products" className={`font-semibold transition-all duration-300 relative py-2 ${
                location.pathname === '/products' 
                  ? 'text-pink-500 border-b-2 border-pink-500' 
                  : 'text-gray-700 hover:text-pink-500'
              }`}>
                Products
              </Link>
              <Link to="/about" className={`font-semibold transition-all duration-300 relative py-2 ${
                location.pathname === '/about' 
                  ? 'text-pink-500 border-b-2 border-pink-500' 
                  : 'text-gray-700 hover:text-pink-500'
              }`}>
                About
              </Link>
              <Link to="/contact" className={`font-semibold transition-all duration-300 relative py-2 ${
                location.pathname === '/contact' 
                  ? 'text-pink-500 border-b-2 border-pink-500' 
                  : 'text-gray-700 hover:text-pink-500'
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
        <div ref={mobileMenuRef} className="fixed top-28 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white backdrop-blur-md shadow-2xl z-40 rounded-3xl border border-gray-200 lg:hidden animate-slide-down">
          <div className="p-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 bg-white hover:bg-pink-100 ${
                location.pathname === '/' ? 'text-pink-500 underline decoration-2 underline-offset-4' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 bg-white hover:bg-pink-100 ${
                location.pathname === '/products' ? 'text-pink-500 underline decoration-2 underline-offset-4' : 'text-gray-700'
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 bg-white hover:bg-pink-100 ${
                location.pathname === '/about' ? 'text-pink-500 underline decoration-2 underline-offset-4' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 bg-white hover:bg-pink-100 ${
                location.pathname === '/contact' ? 'text-pink-500 underline decoration-2 underline-offset-4' : 'text-gray-700'
              }`}
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
        <div className="fixed top-28 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in-right">
          Phone number copied to clipboard
        </div>
      )}
    </>
  )
}

export default Navbar