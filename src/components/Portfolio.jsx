import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const categories = ["ALL", "RESIDENTIAL", "COMMERCIAL", "CULTURAL", "PUBLIC"];

const portfolioItems = [
  {
    id: 1,
    title: "Horizon Residence",
    description: "Award-winning luxury home with panoramic views utilizing sustainable design principles and natural materials.",
    category: "RESIDENTIAL",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    featured: true
  },
  {
    id: 2,
    title: "Concrete Pavilion",
    description: "Brutalist commercial space with dramatic angles and an interplay of light and shadow throughout.",
    category: "COMMERCIAL",
    year: "2022", 
    imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200"
  },
  {
    id: 3,
    title: "Spiral Museum",
    description: "Public cultural center featuring a continuous circulation path that creates evolving spatial experiences.",
    category: "PUBLIC",
    year: "2021",
    imageUrl: "https://i.pinimg.com/736x/90/dd/e1/90dde181ebe7af68db9e5808ad54313b.jpg"
  },
  {
    id: 4,
    title: "Luminous House",
    description: "Residential dwelling designed around natural light patterns with sliding glass panels for spatial flexibility.",
    category: "RESIDENTIAL",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=950",
    featured: true
  },
  {
    id: 5,
    title: "Angular Gallery",
    description: "Contemporary art space with geometrically complex forms and carefully designed exhibition lighting.",
    category: "CULTURAL",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200"
  },
  {
    id: 6,
    title: "Monochrome Tower",
    description: "Minimalist commercial high-rise with a distinctive black and white façade and innovative space planning.",
    category: "COMMERCIAL",
    year: "2021",
    imageUrl: "https://i.pinimg.com/736x/a9/62/86/a96286fb18f092e8236153adda8ef6d9.jpg"
  },
  {
    id: 7,
    title: "Glass Pavilion",
    description: "Transparent structure for cultural events with seamless connection between interior and landscape.",
    category: "CULTURAL",
    year: "2022",
    imageUrl: "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
  },
  {
    id: 8,
    title: "Urban Microhousing",
    description: "Innovative compact living solution with transformable interiors that maximize small footprints.",
    category: "RESIDENTIAL",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
  }
];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const filteredProjects = selectedCategory === "ALL" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);
  
  // Handle category change
  const handleCategoryChange = (category) => {
    if (category === selectedCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsAnimating(false);
    }, 500);
  };
  
  // Handle project selection
  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };
  
  // Handle closing project modal
  const closeProjectDetail = () => {
    setSelectedProject(null);
  };
  
  // Get project details
  const getSelectedProject = () => {
    return portfolioItems.find(item => item.id === selectedProject);
  };

  // Project detail modal
  const ProjectDetail = () => {
    const project = getSelectedProject();
    if (!project) return null;
    
    return (
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative max-w-5xl w-full">
          <motion.button 
            onClick={closeProjectDetail}
            className="absolute right-0 top-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </motion.button>
          
          <motion.div 
            className="bg-white p-0 overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[50vh] md:h-[80vh] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <motion.h3 
                    className="font-montserrat font-bold text-3xl md:text-4xl mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-500 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.category} · {project.year}
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button className="px-8 py-3 border-2 border-black text-black font-montserrat text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
                    VIEW FULL PROJECT
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };
  
  // Featured project component
  const FeaturedProject = ({ project }) => {
    return (
      <motion.div 
        key={project.id}
        className="col-span-1 md:col-span-2 h-[450px] mb-10 relative overflow-hidden group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        layoutId={`project-${project.id}`}
        onClick={() => handleProjectClick(project.id)}
      >
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-montserrat font-bold text-3xl text-white mb-2 drop-shadow-lg">{project.title}</h3>
              <p className="text-white/80 text-sm">{project.category} · {project.year}</p>
            </div>
            <div className="bg-white p-3 rounded-full transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <Plus size={20} className="text-black" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Regular project component
  const RegularProject = ({ project }) => {
    return (
      <motion.div 
        className="relative overflow-hidden group cursor-pointer h-[350px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        layoutId={`project-${project.id}`}
        onClick={() => handleProjectClick(project.id)}
      >
        <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/30 transition-colors duration-300"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-montserrat font-bold text-xl text-white mb-1 drop-shadow-lg">{project.title}</h3>
              <p className="text-white/80 text-xs">{project.category} · {project.year}</p>
            </div>
            <div className="bg-white p-2 rounded-full">
              <Plus size={16} className="text-black" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#f9f9f9] section-fade">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-20 flex flex-col md:flex-row md:justify-between md:items-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl tracking-tight text-black relative mb-10 md:mb-0">
            PORTFOLIO
            <span className="block w-20 h-1 bg-black mt-4"></span>
          </h2>
          
          <div className="inline-flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 text-sm font-montserrat tracking-wider transition-colors ${
                  selectedCategory === category 
                    ? "bg-black text-white" 
                    : "bg-transparent text-gray-600 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredProjects.map((project) => (
            project.featured ? (
              <FeaturedProject key={project.id} project={project} />
            ) : (
              <RegularProject key={project.id} project={project} />
            )
          ))}
        </motion.div>
      </div>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && <ProjectDetail />}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;