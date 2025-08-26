import React from 'react';
import { FileText, BookOpen, Search, Presentation as PresentationChart, Users, Clock, Shield, Award } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Assignment Help',
      description: 'Expert assistance with all types of academic assignments across various subjects and disciplines.',
      features: ['24/7 Support', 'Plagiarism Free', 'On-time Delivery'],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: BookOpen,
      title: 'Thesis Writing',
      description: 'Comprehensive thesis and dissertation writing services with thorough research and analysis.',
      features: ['Expert Writers', 'Original Research', 'Multiple Revisions'],
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: Search,
      title: 'Research Papers',
      description: 'In-depth research papers with proper citations, methodology, and academic formatting.',
      features: ['Peer Reviewed', 'Proper Citations', 'Quality Research'],
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      icon: PresentationChart,
      title: 'Case Studies',
      description: 'Detailed case study analysis with practical insights and professional presentation.',
      features: ['Real-world Analysis', 'Data Insights', 'Professional Format'],
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
    },
    {
      icon: Users,
      title: 'Online Tutoring',
      description: 'One-on-one tutoring sessions with expert educators in various academic subjects.',
      features: ['Live Sessions', 'Personalized Learning', 'Flexible Schedule'],
      color: 'from-teal-400 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
    },
    {
      icon: Award,
      title: 'Course Completion',
      description: 'Complete course assistance and training programs for skill development.',
      features: ['Certification', 'Practical Training', 'Industry Relevant'],
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-50 to-red-100',
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: '100% Plagiarism-Free',
      description: 'All work is original and passes through advanced plagiarism detection tools.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We guarantee delivery before your deadline, every single time.',
    },
    {
      icon: Award,
      title: 'Expert Writers',
      description: 'PhD qualified writers and researchers from top universities worldwide.',
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive academic assistance tailored to your needs, delivered with excellence and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-primary-dark mb-3">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-neutral-600">
                    <div className="w-2 h-2 bg-accent-teal rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => window.location.href = '/payment'}
                className="w-full bg-gradient-to-r from-primary-dark to-accent-teal text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Order Now →
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-dark mb-4">
              Why Choose Edunique Minds?
            </h3>
            <p className="text-lg text-neutral-600">
              We're committed to your academic success with unmatched quality and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-accent-teal to-accent-light p-4 rounded-xl inline-flex mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-heading text-lg font-bold text-primary-dark mb-2">
                  {item.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;