import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-dark py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="font-script text-2xl md:text-3xl text-white">AboAlSoud</span>
              <span className="text-primary text-xs uppercase tracking-widest ml-2 mt-1">Marketing Agency</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
            <div className="relative group">
              <button 
                className="text-white hover:text-primary transition-colors flex items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-gray rounded-md shadow-lg overflow-hidden z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <a href="#digital-marketing" className="block px-4 py-2 text-sm text-white hover:bg-primary hover:text-white">Digital Marketing</a>
                <a href="#branding" className="block px-4 py-2 text-sm text-white hover:bg-primary hover:text-white">Branding</a>
                <a href="#social-media" className="block px-4 py-2 text-sm text-white hover:bg-primary hover:text-white">Social Media</a>
                <a href="#content-creation" className="block px-4 py-2 text-sm text-white hover:bg-primary hover:text-white">Content Creation</a>
              </div>
            </div>
            <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="text-white hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-dark-gray rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
              <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-white hover:text-primary transition-colors flex items-center"
                >
                  Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#digital-marketing" className="block text-white hover:text-primary">Digital Marketing</a>
                    <a href="#branding" className="block text-white hover:text-primary">Branding</a>
                    <a href="#social-media" className="block text-white hover:text-primary">Social Media</a>
                    <a href="#content-creation" className="block text-white hover:text-primary">Content Creation</a>
                  </div>
                )}
              </div>
              <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
              <a href="#portfolio" className="text-white hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;