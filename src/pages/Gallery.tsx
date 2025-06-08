
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      location: "San Francisco, CA",
      title: "Residential Solar Installation"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
      location: "Los Angeles, CA",
      title: "Commercial Solar Farm"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop",
      location: "Phoenix, AZ",
      title: "Desert Solar Array"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&h=400&fit=crop",
      location: "Denver, CO",
      title: "Mountain View Installation"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
      location: "Austin, TX",
      title: "Urban Solar Solution"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1548366086-7f4ab5ae3742?w=600&h=400&fit=crop",
      location: "Miami, FL",
      title: "Coastal Solar Project"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      location: "Seattle, WA",
      title: "Pacific Northwest Install"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1473800447596-01729482b8eb?w=600&h=400&fit=crop",
      location: "Las Vegas, NV",
      title: "Desert Commercial Project"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop",
      location: "Portland, OR",
      title: "Eco-Friendly Installation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-darkslategray mb-6">
              Project <span className="bg-solgenix-gradient bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-darkslategray max-w-2xl mx-auto">
              Explore our successful solar installations across the country and see the difference we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-solgenix-300">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 text-sm text-darkslategray">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-solgenix-500 rounded-full mr-2"></div>
                <span>500+ Completed Projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-solgenix-400 rounded-full mr-2"></div>
                <span>25+ States Covered</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-solgenix-600 rounded-full mr-2"></div>
                <span>100% Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
