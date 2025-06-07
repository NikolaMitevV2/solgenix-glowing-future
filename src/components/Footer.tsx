
import React from 'react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-solgenix-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-semibold mb-4 bg-gradient-to-r from-solgenix-300 to-solgenix-500 bg-clip-text text-transparent">
              Solgenix
            </div>
            <p className="text-lg opacity-80 mb-6 max-w-md">
              Leading the solar revolution with premium installations, 
              advanced technology, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="ph-light ph-facebook-logo text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="ph-light ph-instagram-logo text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="ph-light ph-linkedin-logo text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="ph-light ph-twitter-logo text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('#hero')} className="block opacity-80 hover:opacity-100 transition-opacity">
                Home
              </button>
              <button onClick={() => scrollToSection('#how-it-works')} className="block opacity-80 hover:opacity-100 transition-opacity">
                How it Works
              </button>
              <button onClick={() => scrollToSection('#features')} className="block opacity-80 hover:opacity-100 transition-opacity">
                Features
              </button>
              <button onClick={() => scrollToSection('#pricing')} className="block opacity-80 hover:opacity-100 transition-opacity">
                Pricing
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ph-light ph-phone text-lg"></i>
                <span className="opacity-80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ph-light ph-envelope text-lg"></i>
                <span className="opacity-80">info@solgenix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ph-light ph-map-pin text-lg"></i>
                <span className="opacity-80">123 Solar Street, Green City, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="opacity-80">
              © 2024 Solgenix. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
