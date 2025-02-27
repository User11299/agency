import React from 'react';
import { Megaphone, Palette, Share2, FileText } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  id: string;
}> = ({ icon, title, description, id }) => {
  return (
    <div id={id} className="bg-dark-gray p-6 rounded-lg transition-transform hover:scale-105 border border-gray-800">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive marketing solutions tailored to your business needs, helping you stand out in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            id="digital-marketing"
            icon={<Megaphone className="h-10 w-10" />}
            title="Digital Marketing"
            description="Strategic campaigns across digital platforms to increase your brand visibility and drive conversions."
          />
          <ServiceCard
            id="branding"
            icon={<Palette className="h-10 w-10" />}
            title="Branding & Identity"
            description="Create a distinctive brand identity that resonates with your target audience and sets you apart from competitors."
          />
          <ServiceCard
            id="social-media"
            icon={<Share2 className="h-10 w-10" />}
            title="Social Media Management"
            description="Engage your audience with compelling content and strategic social media campaigns that build community."
          />
          <ServiceCard
            id="content-creation"
            icon={<FileText className="h-10 w-10" />}
            title="Content Creation"
            description="Develop high-quality, engaging content that tells your brand story and connects with your audience."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;