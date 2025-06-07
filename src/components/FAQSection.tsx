import React, { useState } from 'react';
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const faqs = [{
    question: 'How long does the solar panel installation process take?',
    answer: 'Typically, our installation process takes 1-3 days depending on the system size and complexity. This includes mounting, electrical connections, and system testing. We handle all permits and inspections.'
  }, {
    question: 'What is the warranty on solar panels?',
    answer: 'Our premium solar panels come with a 25-year performance warranty and 12-year product warranty. Additionally, we provide a 10-year workmanship warranty on all installations.'
  }, {
    question: 'How much can I save on my electricity bills?',
    answer: 'Most homeowners see 70-90% reduction in their electricity bills. Actual savings depend on your energy usage, roof orientation, local sunlight, and utility rates. We provide personalized savings estimates during consultation.'
  }, {
    question: 'Do solar panels work during cloudy days?',
    answer: 'Yes, solar panels continue to generate electricity on cloudy days, though at reduced efficiency (typically 10-25% of peak output). Modern panels are designed to capture diffused sunlight effectively.'
  }, {
    question: 'What happens if I produce more energy than I use?',
    answer: 'Excess energy is fed back into the grid through net metering, earning you credits on your utility bill. In many cases, you can sell this excess energy back to the utility company.'
  }, {
    question: 'Are there financing options available?',
    answer: 'Yes, we offer various financing options including solar loans, leases, and power purchase agreements (PPAs). We also help you take advantage of federal tax credits and local incentives.'
  }];
  return <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            Get answers to common questions about solar panel installation and our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="space-y-4">
            {faqs.map((faq, index) => <div key={index} className="glassmorphic rounded-xl overflow-hidden transition-all duration-300">
                <button className="w-full p-6 text-left flex items-center justify-between hover:bg-solgenix-50/50 transition-colors" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <i className={`ph-light ${openFAQ === index ? 'ph-minus' : 'ph-plus'} text-xl text-solgenix-500 flex-shrink-0 transition-transform duration-300`}></i>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0">
                    <p className="leading-relaxed text-gray-900">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;