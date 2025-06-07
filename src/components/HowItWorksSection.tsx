
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Installing the Mount',
      description: 'Our certified technicians securely mount the solar panel system to your roof with precision engineering and weather-resistant materials.',
      icon: 'ph-wrench',
      image: '/lovable-uploads/52f3a3cf-079e-491b-8bbf-002ab3f43aec.png'
    },
    {
      number: '02',
      title: 'Connect Solar Inverter',
      description: 'We install and configure your high-efficiency inverter system to optimize energy conversion and ensure maximum power output.',
      icon: 'ph-lightning',
      image: '/lovable-uploads/52f3a3cf-079e-491b-8bbf-002ab3f43aec.png'
    },
    {
      number: '03',
      title: 'Link to Power Grid',
      description: 'Final connection to your local power grid enables net metering, allowing you to sell excess energy back to the utility company.',
      icon: 'ph-plugs-connected',
      image: '/lovable-uploads/52f3a3cf-079e-491b-8bbf-002ab3f43aec.png'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-solgenix-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined three-step process ensures a seamless solar installation experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="scroll-reveal glassmorphic rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-solgenix-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {step.number}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className={`${step.icon} ph-light text-2xl text-solgenix-500`}></i>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
