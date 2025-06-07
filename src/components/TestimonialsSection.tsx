import React, { useState, useEffect } from 'react';
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Solgenix transformed our energy bills completely. Professional installation and exceptional service from start to finish.',
    result: '85% reduction in energy costs',
    rating: 5,
    image: '👩‍💼'
  }, {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'The solar panel system exceeded our expectations. Clean installation, reliable performance, and outstanding customer support.',
    result: '$2,400 annual savings',
    rating: 5,
    image: '👨‍💼'
  }, {
    name: 'Emily Rodriguez',
    role: 'Environmental Advocate',
    content: 'Not only are we saving money, but we are contributing to a sustainable future. Solgenix made the process seamless.',
    result: '90% renewable energy usage',
    rating: 5,
    image: '👩‍🔬'
  }, {
    name: 'David Thompson',
    role: 'Tech Entrepreneur',
    content: 'The monitoring system is incredible. Real-time data, predictive analytics, and mobile app integration - exactly what I needed.',
    result: 'ROI achieved in 3.2 years',
    rating: 5,
    image: '👨‍💻'
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return <section className="py-20 bg-gradient-to-br from-white to-solgenix-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            What our customers say
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-900">
            Real results from real customers who chose Solgenix for their solar journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto scroll-reveal">
          <div className="relative">
            <div className="glassmorphic rounded-2xl p-8 lg:p-12 min-h-[300px] flex items-center">
              <div className="w-full text-center">
                <div className="flex justify-center mb-6">
                  <div className="text-6xl">{testimonials[currentTestimonial].image}</div>
                </div>
                
                <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-6 text-foreground">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="bg-solgenix-100 rounded-lg p-4 mb-6 inline-block">
                  <div className="text-lg font-semibold text-solgenix-700">
                    {testimonials[currentTestimonial].result}
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => <i key={i} className="ph-fill ph-star text-yellow-400 text-xl mx-1"></i>)}
                </div>

                <div>
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-solgenix-500 w-8' : 'bg-solgenix-200 hover:bg-solgenix-300'}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;