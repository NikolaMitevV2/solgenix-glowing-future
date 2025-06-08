
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-darkslategray mb-6">
              Get in <span className="bg-solgenix-gradient bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-darkslategray max-w-2xl mx-auto">
              Ready to start your solar journey? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Side - Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-darkslategray mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-darkslategray">Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your full name"
                      className="bg-white border-gray-300 text-darkslategray"
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-darkslategray">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="bg-white border-gray-300 text-darkslategray"
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-darkslategray">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your solar needs..."
                      className="min-h-[120px] bg-white border-gray-300 text-darkslategray"
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-solgenix-gradient hover:bg-solgenix-600 text-darkslategray border-0"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Side - Company Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-darkslategray mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-solgenix-100">
                      <Mail className="w-6 h-6 text-solgenix-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-darkslategray mb-1">Email</h3>
                      <p className="text-darkslategray">contact@solgenix.com</p>
                      <p className="text-darkslategray">support@solgenix.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-solgenix-100">
                      <Phone className="w-6 h-6 text-solgenix-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-darkslategray mb-1">Phone</h3>
                      <p className="text-darkslategray">+1 (555) 123-4567</p>
                      <p className="text-darkslategray">+1 (555) 765-4321</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-solgenix-100">
                      <MapPin className="w-6 h-6 text-solgenix-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-darkslategray mb-1">Location</h3>
                      <p className="text-darkslategray">123 Solar Street</p>
                      <p className="text-darkslategray">Green City, CA 90210</p>
                      <p className="text-darkslategray">United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-solgenix-50 to-solgenix-100 p-8 rounded-2xl">
                <h3 className="text-xl font-medium text-darkslategray mb-4">Business Hours</h3>
                <div className="space-y-2 text-darkslategray">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
