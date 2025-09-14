import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sichuan Tours</h1>
              <p className="text-xs text-gray-600">Private Car Adventures</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Services</a>
            <a href="#destinations" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Destinations</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Services</a>
              <a href="#destinations" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Destinations</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
              <a href="#contact" className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-2 rounded-full text-center font-medium">
                Book Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;