import React, { useState } from 'react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Brand Campaign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Complete brand identity redesign for a luxury fashion brand."
  },
  {
    id: 2,
    title: "Social Media Growth",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Increased social media engagement by 300% for a tech startup."
  },
  {
    id: 3,
    title: "E-commerce Conversion",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Boosted online sales by 150% through targeted digital campaigns."
  },
  {
    id: 4,
    title: "Video Content Series",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Created viral video content series for a food delivery service."
  },
  {
    id: 5,
    title: "SEO Optimization",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Improved search rankings and organic traffic for a B2B company."
  },
  {
    id: 6,
    title: "Product Launch",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Successful product launch campaign for a new smartphone."
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their marketing goals.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm ${filter === 'all' ? 'bg-primary text-white' : 'bg-dark-gray text-white hover:bg-primary/20'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('branding')}
              className={`px-4 py-2 rounded-full text-sm ${filter === 'branding' ? 'bg-primary text-white' : 'bg-dark-gray text-white hover:bg-primary/20'}`}
            >
              Branding
            </button>
            <button 
              onClick={() => setFilter('digital marketing')}
              className={`px-4 py-2 rounded-full text-sm ${filter === 'digital marketing' ? 'bg-primary text-white' : 'bg-dark-gray text-white hover:bg-primary/20'}`}
            >
              Digital Marketing
            </button>
            <button 
              onClick={() => setFilter('social media')}
              className={`px-4 py-2 rounded-full text-sm ${filter === 'social media' ? 'bg-primary text-white' : 'bg-dark-gray text-white hover:bg-primary/20'}`}
            >
              Social Media
            </button>
            <button 
              onClick={() => setFilter('content creation')}
              className={`px-4 py-2 rounded-full text-sm ${filter === 'content creation' ? 'bg-primary text-white' : 'bg-dark-gray text-white hover:bg-primary/20'}`}
            >
              Content Creation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9 h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-primary text-sm font-medium bg-dark-gray px-3 py-1 rounded-full mb-2 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                <p className="text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;