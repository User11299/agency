import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="font-script text-2xl text-white">AboAlSoud</span>
              <span className="text-primary text-xs uppercase tracking-widest ml-2 mt-1">Marketing Agency</span>
            </div>
            <p className="text-gray-400 mb-6">
              Elevating brands through strategic marketing solutions that drive results and create lasting impressions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#digital-marketing" className="text-gray-400 hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#branding" className="text-gray-400 hover:text-primary transition-colors">Branding & Identity</a></li>
              <li><a href="#social-media" className="text-gray-400 hover:text-primary transition-colors">Social Media Management</a></li>
              <li><a href="#content-creation" className="text-gray-400 hover:text-primary transition-colors">Content Creation</a></li>
              <li><a href="#seo" className="text-gray-400 hover:text-primary transition-colors">SEO Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-dark border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary text-white w-full"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AboAlSoud Marketing Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;