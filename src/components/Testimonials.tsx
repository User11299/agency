import React from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechNova Inc.",
    quote: "AboAlSoud transformed our digital presence completely. Their strategic approach and creative solutions helped us increase our market share significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Horizon Brands",
    quote: "Working with AboAlSoud has been a game-changer for our business. Their team's expertise in branding and social media management is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Brand Manager",
    company: "Luxe Fashion",
    quote: "The content strategy developed by AboAlSoud helped us connect with our audience on a deeper level. Our engagement metrics have never been better.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-dark p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-gray-500'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;