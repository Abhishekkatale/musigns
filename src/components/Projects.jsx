import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Serenity House",
      description: "A residential masterpiece nestled in the hills that seamlessly merges interior and exterior spaces. The design employs a restrained material palette of concrete, glass, and wood to create a tranquil sanctuary.",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
      details: [
        { label: "LOCATION", value: "Los Angeles, California" },
        { label: "YEAR", value: "2022" },
        { label: "SIZE", value: "5,200 sq ft" },
        { label: "CLIENT", value: "Private Residence" }
      ]
    },
    {
      id: 2,
      title: "Geometric Pavilion",
      description: "A public cultural space that serves as both art gallery and community center. The striking angular forms create dynamic interior spaces that play with natural light throughout the day.",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
      details: [
        { label: "LOCATION", value: "Tokyo, Japan" },
        { label: "YEAR", value: "2021" },
        { label: "SIZE", value: "12,000 sq ft" },
        { label: "CLIENT", value: "Tokyo Arts Foundation" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-black text-white section-fade">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="font-montserrat font-bold text-4xl md:text-5xl mb-16 tracking-tight text-white relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FEATURED PROJECTS
          <span className="block w-20 h-1 bg-white mt-4"></span>
        </motion.h2>
        
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className={`mb-24 last:mb-0`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                {index % 2 === 1 ? (
                  // Content for odd-indexed projects (right-aligned image)
                  <>
                    <h3 className="font-montserrat font-bold text-3xl mb-6">{project.title}</h3>
                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      {project.details.map((detail, i) => (
                        <div key={i}>
                          <h4 className="font-montserrat text-sm mb-2">{detail.label}</h4>
                          <p>{detail.value}</p>
                        </div>
                      ))}
                    </div>
                    <motion.a 
                      href="#" 
                      className="inline-block px-6 py-3 border border-white text-white font-montserrat text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW PROJECT
                    </motion.a>
                  </>
                ) : (
                  // Image for even-indexed projects
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-auto"
                  />
                )}
              </div>
              <div className={`${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                {index % 2 === 0 ? (
                  // Content for even-indexed projects (left-aligned image)
                  <>
                    <h3 className="font-montserrat font-bold text-3xl mb-6">{project.title}</h3>
                    <p className="text-lg leading-relaxed mb-6 text-gray-300">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      {project.details.map((detail, i) => (
                        <div key={i}>
                          <h4 className="font-montserrat text-sm mb-2">{detail.label}</h4>
                          <p>{detail.value}</p>
                        </div>
                      ))}
                    </div>
                    <motion.a 
                      href="#" 
                      className="inline-block px-6 py-3 border border-white text-white font-montserrat text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW PROJECT
                    </motion.a>
                  </>
                ) : (
                  // Image for odd-indexed projects
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-auto"
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;