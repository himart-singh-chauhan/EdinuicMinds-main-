import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    queryType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = React.useMemo(() => [
    'USA', 'Australia', 'Romania', 'Tanzania', 'UK', 'Canada',
    'Germany', 'France', 'UAE', 'Singapore', 'Japan'
  ], []);

  const queryTypes = React.useMemo(() => [
    'Assignment Help', 'Thesis Writing', 'Course Inquiry', 'Technical Support',
    'Pricing Information', 'Partnership', 'Other'
  ], []);

  const faqs = React.useMemo(() => [
    {
      question: 'How do you ensure plagiarism-free work?',
      answer: 'We use advanced plagiarism detection tools and have a strict policy of original content creation. Every piece of work is checked multiple times before delivery.'
    },
    {
      question: 'What is your revision policy?',
      answer: 'We offer unlimited revisions within 30 days of delivery to ensure your complete satisfaction with the work quality.'
    },
    {
      question: 'How do you maintain confidentiality?',
      answer: 'We have strict privacy policies and use secure systems to protect your personal information and academic work. Your identity remains completely confidential.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and various international payment methods for your convenience.'
    },
    {
      question: 'Can I communicate with my assigned writer?',
      answer: 'Yes, we provide direct communication channels with your assigned expert through our secure messaging system.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'We offer a money-back guarantee if the work doesn\'t meet your requirements or our quality standards. Your satisfaction is our priority.'
    }
  ], []);

  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  }, []);

  const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Let's Get in Touch
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have questions about our services? Need academic assistance? We're here to help you succeed. 
            Reach out to us anytime, anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 sticky top-24 z-30">
              <h3 className="font-heading text-xl font-bold text-primary-dark mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-accent-teal to-accent-light p-3 rounded-xl">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-dark">Email Us</p>
                    <p className="text-neutral-600 text-sm">support@eduniqueminds.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-primary-dark to-primary-light p-3 rounded-xl">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-dark">Call Us</p>
                    <p className="text-neutral-600 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-dark">Live Chat</p>
                    <p className="text-neutral-600 text-sm">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-primary-dark">Global Service</p>
                    <p className="text-neutral-600 text-sm">Serving 20+ countries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-primary-dark to-accent-teal rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6" />
                <h3 className="font-heading text-lg font-bold">Office Hours</h3>
              </div>
              <div className="space-y-2 text-white/90">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Support</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <p className="text-sm text-white/90">
                  💬 Live chat support available 24/7 for urgent queries
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <button 
                onClick={() => window.location.href = '/payment'}
                className="w-full bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Instant Quote →
              </button>
              <button className="w-full bg-white text-primary-dark font-medium py-3 px-6 rounded-xl border-2 border-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
              <h3 className="font-heading text-xl font-bold text-primary-dark mb-6">
                Send Us a Message
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-dark font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-primary-dark font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary-dark font-medium mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                    >
                      <option value="">Select your country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-primary-dark font-medium mb-2">
                      Query Type *
                    </label>
                    <select
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
                    >
                      <option value="">Select query type</option>
                      {queryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-primary-dark font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements, deadline, and any specific instructions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="font-heading text-2xl font-bold text-primary-dark mb-8 text-center">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <summary className="p-6 cursor-pointer font-medium text-primary-dark hover:text-accent-teal transition-colors">
                      {faq.question}
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-primary-dark mb-4">
                Our Global Presence
              </h3>
              <p className="text-neutral-600">
                Headquartered in the heart of the academic district, serving students worldwide.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-accent-teal mx-auto mb-4" />
                <h4 className="font-heading text-lg font-bold text-primary-dark mb-2">
                  Global Headquarters
                </h4>
                <p className="text-neutral-600">
                  123 Academic Street<br />
                  Education District<br />
                  Global City, GC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;