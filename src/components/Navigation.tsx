
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'How it Works', href: '#how-it-works', isRoute: false },
    { label: 'Features', href: '#features', isRoute: false },
    { label: 'Mission', href: '#mission', isRoute: false },
    { label: 'Pricing', href: '#pricing', isRoute: false },
    { label: 'FAQ', href: '#faq', isRoute: false },
    { label: 'Gallery', href: '/gallery', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      setIsMobileMenuOpen(false);
    } else {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        window.location.href = '/' + item.href;
      } else {
        scrollToSection(item.href);
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/80 border-b border-white/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img alt="Solgenix Logo" src="/lovable-uploads/f32cbed0-f5ec-449d-a12c-24e6bfce96bd.png" className="h-8 w-8 object-contain" />
              <div className="text-2xl font-semibold tracking-tight bg-solgenix-gradient bg-clip-text text-transparent">
                Solgenix
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors font-bold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-foreground/80 hover:text-foreground transition-colors font-bold"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <i className={`ph-light ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        
        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-lg border-l border-white/20 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-20">
            <div className="space-y-6">
              {navItems.map(item => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left text-lg font-light text-foreground/80 hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-lg font-light text-foreground/80 hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
