import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Logo from '../assets/logo.png';

function Hero() {
  const { scrollYProgress } = useViewportScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax and mouse movement effects
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundTranslateY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Subtle mouse-follow effect for background
  const backgroundTransform = {
    transform: `translate(${-mousePosition.x / 50}px, ${-mousePosition.y / 50}px)`,
    transition: 'transform 0.5s ease-out'
  };

  return (
    <section className="h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Animated Background Layer */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{
          ...backgroundTransform,
          y: backgroundTranslateY
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
        <img
          src="https://i.pinimg.com/736x/c8/17/aa/c817aadc51489ca018b1586db1957168.jpg"
          alt="Minimalist architecture with dramatic shadows"
          className="w-full h-full object-cover opacity-80 filter brightness-90"
        />
        {/* Animated Geometric Overlay */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg 
            className="w-full h-full absolute"
            viewBox="0 0 1440 900"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="geometryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3498db" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#2c3e50" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <motion.path
              d="M0 225 Q720 450 1440 225 T 1440 675 Q720 900 0 675 Z"
              fill="url(#geometryGradient)"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                d: [
                  "M0 225 Q720 450 1440 225 T 1440 675 Q720 900 0 675 Z",
                  "M0 200 Q720 500 1440 200 T 1440 700 Q720 950 0 700 Z",
                  "M0 225 Q720 450 1440 225 T 1440 675 Q720 900 0 675 Z"
                ]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Content Layer */}
      <motion.div
        className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center"
        style={{ y: translateY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Logo with Advanced Interactions */}
        <motion.div
          className="relative"
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            scale: { duration: 0.2 },
            rotate: { 
              duration: 0.4, 
              repeat: 1, 
              type: "tween" 
            }
          }}
        >
          <motion.img
            src={Logo}
            alt="Studio Musigns Logo"
            className="h-28 md:h-40 object-contain mb-6 drop-shadow-2xl"
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              filter: "blur(10px)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: "blur(0px)"
            }}
            transition={{ 
              duration: 1, 
              type: "spring",
              stiffness: 100
            }}
          />
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Animated Tagline with Letter Hover Effects */}
        <motion.p 
          className="font-montserrat text-lg md:text-xl tracking-wide max-w-2xl text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {['CRAFTING', 'ARCHITECTURAL', 'NARRATIVES', 'THROUGH', 'MINIMALIST', 'DESIGN'].map((word, index) => (
            <motion.span 
              key={word}
              className="inline-block mr-2"
              whileHover={{ 
                scale: 1.1,
                color: '#201f21'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Discover Button with Advanced Interactions */}
        <motion.a
          href="#portfolio"
          className="inline-block mt-12 px-8 py-3 border-2 border-black text-black font-montserrat text-sm tracking-widest relative overflow-hidden group"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
          />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            DISCOVER
          </span>
        </motion.a>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <a href="#portfolio" className="text-black group">
          <motion.div
            className="p-2 rounded-full border border-black/30 group-hover:border-black transition-all duration-300"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(0,0,0,0.1)",
                "0 0 10px 5px rgba(0,0,0,0.2)",
                "0 0 0 0 rgba(0,0,0,0.1)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="h-8 w-8 group-hover:text-black transition-colors duration-300" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;