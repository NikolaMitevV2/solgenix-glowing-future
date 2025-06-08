import React from "react";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-white"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-solgenix-200/30 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-solgenix-300/20 rounded-full blur-2xl" />

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up px-[50px]">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-tight text-darkslategray">
                Build your
                <span className="block bg-solgenix-gradient bg-clip-text text-transparent">
                  solar future.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl max-w-2xl text-gray-600">
                Transform your home with premium solar panel installations.
                Clean energy, cutting-edge technology, exceptional service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="neumorphic text-lg px-8 py-4 bg-solgenix-gradient hover:bg-solgenix-600 text-darkslategray border-0"
                onClick={() => scrollToSection("#pricing")}
              >
                <i className="ph-light ph-lightning mr-2 text-xl"></i>
                Get Started
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-semibold text-solgenix-600">
                  500+
                </div>
                <div className="text-sm text-muted-foreground bg-slate-50 text-slate-700">
                  Installations
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-solgenix-600">
                  98%
                </div>
                <div className="text-sm text-muted-foreground text-slate-700">
                  Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-semibold text-solgenix-600">
                  25yr
                </div>
                <div className="text-sm text-muted-foreground text-slate-700">
                  Warranty
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/e0e8a5be-8bfc-425f-b104-04ae1977f1c2.png"
                alt="Solgenix Logo"
                className="w-full h-auto rounded-2xl shadow-2xl glassmorphic"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-solgenix-400/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-solgenix-300/15 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
