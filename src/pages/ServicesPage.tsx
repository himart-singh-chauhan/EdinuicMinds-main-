import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic assistance and professional services to help you achieve excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Assignment Help",
              description: "Professional assistance with assignments across all subjects and academic levels.",
              features: ["24/7 Support", "Plagiarism Free", "On-time Delivery", "Expert Writers"]
            },
            {
              title: "Thesis Writing",
              description: "Complete thesis and dissertation writing services with research support.",
              features: ["Research Assistance", "Data Analysis", "Literature Review", "Formatting"]
            },
            {
              title: "Research Papers",
              description: "High-quality research papers with proper citations and methodology.",
              features: ["Original Research", "Peer Review", "Academic Standards", "Multiple Revisions"]
            },
            {
              title: "Case Studies",
              description: "Detailed case study analysis and writing for business and academic purposes.",
              features: ["Industry Analysis", "Problem Solving", "Real-world Examples", "Professional Format"]
            },
            {
              title: "Online Courses",
              description: "Interactive online courses with expert instructors and practical learning.",
              features: ["Video Lectures", "Interactive Content", "Certificates", "Lifetime Access"]
            },
            {
              title: "Tutoring",
              description: "One-on-one tutoring sessions with experienced academic professionals.",
              features: ["Personalized Learning", "Flexible Schedule", "Progress Tracking", "Expert Tutors"]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <h3 className="font-heading text-xl font-bold text-primary-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-accent-teal rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.location.href = '/contact'}
                className="w-full bg-gradient-to-r from-accent-teal to-accent-light text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
