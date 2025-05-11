// App.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;