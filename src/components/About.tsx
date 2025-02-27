import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About AboAlSoud Marketing Agency</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-300 mb-6">
              Founded with a passion for innovative marketing, AboAlSoud Marketing Agency has been helping businesses grow and thrive in the digital landscape for over a decade. We combine creativity with data-driven strategies to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-300 mb-8">
              Our team of experts is dedicated to understanding your unique business needs and crafting tailored solutions that align with your goals and vision.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 h-5 w-5 mt-1" />
                <p className="text-gray-300">Strategic approach</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 h-5 w-5 mt-1" />
                <p className="text-gray-300">Creative solutions</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 h-5 w-5 mt-1" />
                <p className="text-gray-300">Data-driven decisions</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-2 h-5 w-5 mt-1" />
                <p className="text-gray-300">Client-focused approach</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors inline-block"
            >
              Get to Know Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;