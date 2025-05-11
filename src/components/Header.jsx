import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Fixed Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-6"
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="font-montserrat font-bold text-2xl tracking-wider text-black">
            MUSIGNS
          </a>

          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm tracking-wider">
            <a 
              href="#portfolio" 
              className={`relative group overflow-hidden ${
                isScrolled ? 'text-gray-800' : 'text-black'
              }`}
            >
              <span className="relative z-10 transition-colors hover:text-white">PORTFOLIO</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className={`relative group overflow-hidden ${
                isScrolled ? 'text-gray-800' : 'text-black'
              }`}
            >
              <span className="relative z-10 transition-colors hover:text-white">ABOUT</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#projects" 
              className={`relative group overflow-hidden ${
                isScrolled ? 'text-gray-800' : 'text-black'
              }`}
            >
              <span className="relative z-10 transition-colors hover:text-white">PROJECTS</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className={`relative group overflow-hidden ${
                isScrolled ? 'text-gray-800' : 'text-black'
              }`}
            >
              <span className="relative z-10 transition-colors hover:text-white">CONTACT</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className={`md:hidden focus:outline-none transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-40 flex flex-col justify-center items-center transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-white focus:outline-none"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col space-y-8 text-xl tracking-wider text-white text-center">
          <a 
            href="#portfolio" 
            onClick={closeMenu} 
            className="relative overflow-hidden group"
          >
            <span className="transition-colors hover:text-purple-400">PORTFOLIO</span>
            <span className="block h-0.5 w-0 bg-purple-400 group-hover:w-full transition-all duration-300 mx-auto mt-1"></span>
          </a>
          <a 
            href="#about" 
            onClick={closeMenu} 
            className="relative overflow-hidden group"
          >
            <span className="transition-colors hover:text-purple-400">ABOUT</span>
            <span className="block h-0.5 w-0 bg-purple-400 group-hover:w-full transition-all duration-300 mx-auto mt-1"></span>
          </a>
          <a 
            href="#projects" 
            onClick={closeMenu} 
            className="relative overflow-hidden group"
          >
            <span className="transition-colors hover:text-purple-400">PROJECTS</span>
            <span className="block h-0.5 w-0 bg-purple-400 group-hover:w-full transition-all duration-300 mx-auto mt-1"></span>
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu} 
            className="px-8 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white transition-transform hover:scale-105 mt-4"
          >
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigation;