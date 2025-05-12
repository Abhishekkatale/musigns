import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Logo from '../assets/logoo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <img 
              src={Logo} 
              alt="Studio Musigns Logo" 
              className="h-10 max-w-[200px] object-contain"
            />          </div>

          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© {currentYear} Musitech. All rights reserved.</p>
          </div>

          <div className="flex space-x-6 text-xl">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
