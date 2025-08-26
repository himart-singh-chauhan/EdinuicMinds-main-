import React, { useState } from 'react';
import { ChevronDown, Calculator, Clock, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    country: '',
    workType: '',
    deadline: ''
  });

  const countries = [
    'USA', 'Australia', 'Romania', 'Tanzania', 'UK', 'Canada', 
    'Germany', 'France', 'UAE', 'Singapore', 'Japan'
  ];

  const workTypes = [
    'Assignment', 'Thesis', 'Research Paper', 'Proposal', 
    'Case Study', 'Essay', 'Dissertation', 'Project Report'
  ];

  const deadlines = [
    '24 Hours', '3 Days', '1 Week', '2 Weeks', '1 Month', '2+ Months'
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary-dark via-primary-light to-accent-teal overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get Your Academic Work Done —{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-light bg-clip-text text-transparent">
                  Anywhere in the World
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 font-body leading-relaxed">
                Assignments, Theses, Proposals, Training — All in One Place. 
                Professional academic assistance delivered with excellence.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white/80">
                <Shield className="h-5 w-5 text-accent-teal" />
                <span className="text-sm font-medium">100% Plagiarism Free</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white/80">
                <Clock className="h-5 w-5 text-accent-teal" />
                <span className="text-sm font-medium">On-Time Delivery</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white/80">
                <Calculator className="h-5 w-5 text-accent-teal" />
                <span className="text-sm font-medium">Instant Pricing</span>
              </div>
            </div>
          </div>

          {/* Right - Quote Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Get Instant Price Quote
                </h3>
                <p className="text-white/80">Fill the details below for immediate pricing</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Select Your Country
                  </label>
                  <div className="relative">
                    <select 
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                    >
                      <option value="" className="text-gray-800">Choose your country</option>
                      {countries.map(country => (
                        <option key={country} value={country} className="text-gray-800">
                          {country}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Type of Work
                  </label>
                  <div className="relative">
                    <select 
                      value={formData.workType}
                      onChange={(e) => setFormData({...formData, workType: e.target.value})}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                    >
                      <option value="" className="text-gray-800">Select work type</option>
                      {workTypes.map(type => (
                        <option key={type} value={type} className="text-gray-800">
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Deadline
                  </label>
                  <div className="relative">
                    <select 
                      value={formData.deadline}
                      onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                    >
                      <option value="" className="text-gray-800">Choose deadline</option>
                      {deadlines.map(deadline => (
                        <option key={deadline} value={deadline} className="text-gray-800">
                          {deadline}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  </div>
                </div>

                <button 
                  type="submit"
                  onClick={() => window.location.href = '/payment'}
                  className="w-full bg-gradient-to-r from-accent-teal to-accent-light text-white font-heading font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow"
                >
                  Payment →
                </button>
              </form>

              <div className="text-center mt-6">
                <p className="text-white/70 text-sm">
                  💬 Free consultation • 🔒 Secure & confidential • ⚡ Instant response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;