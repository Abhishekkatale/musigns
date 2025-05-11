import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1300" 
          alt="Minimalist architecture with dramatic shadows" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-montserrat font-black text-6xl md:text-8xl tracking-tighter mb-4 text-black">MUSIGNS</h1>
        <p className="font-montserrat text-lg md:text-xl tracking-wide max-w-2xl mx-auto text-gray-800">
          CRAFTING ARCHITECTURAL NARRATIVES THROUGH MINIMALIST DESIGN
        </p>
        <motion.a 
          href="#portfolio" 
          className="inline-block mt-12 px-8 py-3 border-2 border-black text-black font-montserrat text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DISCOVER
        </motion.a>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#portfolio" className="text-black">
          <ChevronDown className="h-8 w-8" />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;