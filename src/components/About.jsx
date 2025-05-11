import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const stats = [
    { number: "25+", label: "PROJECTS" },
    { number: "12", label: "AWARDS" },
    { number: "8", label: "COUNTRIES" }
  ];

  const processes = [
    { number: "01", title: "CONCEPT", description: "We begin with rigorous research and conceptual development to understand spatial context and client needs." },
    { number: "02", title: "DESIGN", description: "Our design approach merges aesthetic minimalism with functional excellence, focusing on timeless quality." },
    { number: "03", title: "DEVELOP", description: "Technical development transforms concepts into buildable reality through precise documentation." },
    { number: "04", title: "DELIVER", description: "We coordinate with contractors and consultants to ensure faithful realization of the design intent." }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white section-fade">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              className="font-montserrat font-bold text-4xl md:text-5xl mb-8 tracking-tight text-black relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ABOUT MUSIGNS
              <span className="block w-20 h-1 bg-black mt-4"></span>
            </motion.h2>
            
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Founded by Krushna Sanas in 2018, Musigns is an architectural studio driven by the philosophy that design should balance aesthetic minimalism with functional excellence.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We transform spaces into experiences through our commitment to clean lines, purposeful materials, and thoughtful spatial organization. Our work spans residential, commercial, and cultural projects across global locations.
            </motion.p>
            
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="mr-8 last:mr-0">
                  <p className="font-montserrat font-bold text-4xl text-black">{stat.number}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500" 
              alt="Krushna Sanas architecture studio workspace" 
              className="w-full h-auto shadow-lg"
            />
          </motion.div>
        </div>
        
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processes.map((process, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4 text-4xl font-light">{process.number}</div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">{process.title}</h3>
              <p className="text-gray-700">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;