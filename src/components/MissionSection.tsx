
import React from 'react';

const MissionSection = () => {
  const values = [
    {
      icon: 'ph-target',
      title: 'Our Mission',
      description: 'To make clean, renewable energy accessible to every home through premium solar installations and exceptional service.'
    },
    {
      icon: 'ph-eye',
      title: 'Our Vision',
      description: 'A future where every home is powered by clean energy, creating sustainable communities and a healthier planet.'
    },
    {
      icon: 'ph-rocket',
      title: 'Innovation',
      description: 'Leading the industry with cutting-edge technology, smart monitoring systems, and efficient installation processes.'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-solgenix-900 to-solgenix-800 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-solgenix-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-solgenix-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            Building a sustainable future
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            At Solgenix, we believe in the power of solar energy to transform lives and communities. 
            Our commitment goes beyond installation - we're building the energy infrastructure of tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="scroll-reveal glassmorphic rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className={`${value.icon} ph-light text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="opacity-80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal text-center">
          <div className="glassmorphic rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-light mb-6">
              Join the Solar Revolution
            </h3>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Over 500 homes transformed, 2.5 million kWh of clean energy generated, 
              and 1,250 tons of CO₂ emissions prevented. Together, we're making a difference.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-light text-solgenix-300 mb-2">500+</div>
                <div className="opacity-80">Homes Powered</div>
              </div>
              <div>
                <div className="text-4xl font-light text-solgenix-300 mb-2">2.5M</div>
                <div className="opacity-80">kWh Generated</div>
              </div>
              <div>
                <div className="text-4xl font-light text-solgenix-300 mb-2">1,250</div>
                <div className="opacity-80">Tons CO₂ Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
