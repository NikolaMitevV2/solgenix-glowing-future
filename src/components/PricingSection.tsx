
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free Schedule',
      price: 'Free',
      description: 'Get started with a complimentary consultation and site assessment',
      features: [
        'Free home energy audit',
        'Solar potential assessment',
        'Personalized system design',
        'Financing options review',
        'No obligation quote'
      ],
      recommended: false,
      cta: 'Schedule Free Consultation'
    },
    {
      name: 'Pro Installation',
      price: '$18,999',
      description: 'Complete solar system installation for residential properties',
      features: [
        'Premium solar panels (6kW system)',
        'Professional installation',
        '25-year warranty',
        'Smart monitoring system',
        'Grid connection & permits',
        'Annual maintenance check'
      ],
      recommended: true,
      cta: 'Get Pro Installation'
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom',
      description: 'Large-scale solar solutions for commercial and industrial properties',
      features: [
        'Custom system design',
        'Commercial-grade equipment',
        'Project management',
        'Advanced monitoring & analytics',
        'Maintenance & support',
        'ROI optimization consulting'
      ],
      recommended: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-white to-solgenix-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            Choose your solar plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible options designed to meet your energy needs and budget
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`scroll-reveal glassmorphic rounded-2xl p-8 relative hover:scale-105 transition-all duration-300 ${
                plan.recommended ? 'ring-2 ring-solgenix-500 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-solgenix-gradient text-white px-6 py-2 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-light mb-2">
                  {plan.price}
                  {plan.price !== 'Free' && plan.price !== 'Custom' && (
                    <span className="text-lg text-muted-foreground">/system</span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <i className="ph-light ph-check text-solgenix-500 text-lg flex-shrink-0"></i>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full neumorphic ${
                  plan.recommended
                    ? 'bg-solgenix-gradient hover:bg-solgenix-600 text-white'
                    : 'bg-white hover:bg-solgenix-50 text-solgenix-600 border border-solgenix-200'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
