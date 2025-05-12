import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, MessageSquare, Twitter } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;
    
    if (!formData.name || formData.name.length < 2) {
      formErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!formData.projectType) {
      formErrors.projectType = "Please select a project type";
      isValid = false;
    }
    
    if (!formData.message || formData.message.length < 10) {
      formErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }
    
    setErrors(formErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Clear form and show success message
        setFormData({ name: '', email: '', projectType: '', message: '' });
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({ submit: "There was a problem sending your message. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white section-fade">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              className="font-montserrat font-bold text-4xl md:text-5xl mb-8 tracking-tight text-black relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              CONTACT
              <span className="block w-20 h-1 bg-black mt-4"></span>
            </motion.h2>
            
            <motion.p 
              className="text-lg leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Interested in collaborating with us? Contact Studio Musigns to discuss your project requirements or to schedule a consultation with our team.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-3">STUDIO</h3>
                <p className="mb-1">123 Design Avenue</p>
                <p className="mb-1">Suite 405</p>
                <p>New York, NY 10001</p>
              </div>
              
              <div>
                <h3 className="font-montserrat font-semibold text-lg mb-3">CONTACT</h3>
                <p className="mb-1">hello@musigns.com</p>
                <p className="mb-1">+1 (212) 555-0123</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#" className="text-gray-700 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors" aria-label="Message">
                <MessageSquare className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 mb-6">
                  Thank you for your message. We'll get back to you soon.
                </div>
              )}
              
              {errors.submit && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 mb-6">
                  {errors.submit}
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="name" className="block font-montserrat text-sm">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 py-3 bg-transparent focus:border-black transition-colors rounded-none outline-none ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block font-montserrat text-sm">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 py-3 bg-transparent focus:border-black transition-colors rounded-none outline-none ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="projectType" className="block font-montserrat text-sm">PROJECT TYPE</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 py-3 bg-transparent focus:border-black transition-colors rounded-none outline-none ${errors.projectType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="cultural">Cultural</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block font-montserrat text-sm">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 py-3 bg-transparent focus:border-black transition-colors rounded-none outline-none resize-none ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-8 py-3 bg-black text-white font-montserrat text-sm tracking-widest hover:bg-gray-900 transition-colors rounded-none h-auto disabled:opacity-70"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;