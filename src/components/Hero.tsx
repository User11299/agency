import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center bg-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="font-script text-5xl md:text-7xl block mb-2">AboAlSoud</span>
              <span className="text-primary uppercase tracking-wider text-xl md:text-2xl">Marketing Agency</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Elevate your brand with strategic marketing solutions that drive results and create lasting impressions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#services" 
                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/20 absolute -top-4 -left-4 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 border-2 border-primary/50">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Marketing team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;