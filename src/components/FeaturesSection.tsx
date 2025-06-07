
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'ph-sun',
      title: 'High-Efficiency Panels',
      description: 'Premium monocrystalline solar panels with 22%+ efficiency rating and 25-year performance warranty.'
    },
    {
      icon: 'ph-shield-check',
      title: 'Weather Resistant',
      description: 'Built to withstand extreme weather conditions with IP67 waterproof rating and hurricane-force wind resistance.'
    },
    {
      icon: 'ph-chart-line-up',
      title: 'Smart Monitoring',
      description: 'Real-time energy production tracking with mobile app integration and predictive maintenance alerts.'
    },
    {
      icon: 'ph-recycle',
      title: 'Eco-Friendly',
      description: 'Reduce your carbon footprint by up to 90% while contributing to a sustainable energy future.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            Premium features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced technology and superior craftsmanship in every installation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="scroll-reveal glassmorphic rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-solgenix-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} ph-light text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
