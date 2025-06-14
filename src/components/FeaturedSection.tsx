import React from 'react';
const FeaturedSection = () => {
  const companies = [{
    name: 'Tesla',
    logo: 'Tesla'
  }, {
    name: 'Google',
    logo: 'Google'
  }, {
    name: 'Microsoft',
    logo: 'Microsoft'
  }, {
    name: 'Apple',
    logo: 'Apple'
  }, {
    name: 'Amazon',
    logo: 'Amazon'
  }, {
    name: 'Meta',
    logo: 'Meta'
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-lg mb-8 text-slate-900 ">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="scroll-reveal">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {companies.map((company, index) => <div key={company.name} className="flex items-center justify-center h-16 px-8 glassmorphic rounded-lg hover:opacity-100 transition-all duration-300 bg-white/50 backdrop-blur-sm border border-gray-200/50" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <span className="text-2xl font-semibold text-slate-700">
                  {company.logo}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedSection;