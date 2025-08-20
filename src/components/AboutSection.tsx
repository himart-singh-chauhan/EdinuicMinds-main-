import React from 'react';
import { Target, Eye, Heart, Globe, Users, Award, BookOpen, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every academic work we deliver, ensuring the highest quality standards.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Complete transparency, original work, and ethical practices in all our academic services.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'Your success is our priority. We tailor our services to meet your unique academic needs.',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving students worldwide with culturally aware and internationally recognized standards.',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Expert Writers', icon: Users },
    { number: '50,000+', label: 'Projects Completed', icon: BookOpen },
    { number: '99.8%', label: 'Success Rate', icon: Target },
  ];

  const countries = [
    { name: 'USA', flag: '🇺🇸', students: '15,000+' },
    { name: 'Australia', flag: '🇦🇺', students: '12,000+' },
    { name: 'UK', flag: '🇬🇧', students: '10,000+' },
    { name: 'Canada', flag: '🇨🇦', students: '8,000+' },
    { name: 'Germany', flag: '🇩🇪', students: '6,000+' },
    { name: 'France', flag: '🇫🇷', students: '5,000+' },
    { name: 'UAE', flag: '🇦🇪', students: '4,000+' },
    { name: 'Singapore', flag: '🇸🇬', students: '3,500+' },
    { name: 'Japan', flag: '🇯🇵', students: '3,000+' },
    { name: 'Romania', flag: '🇷🇴', students: '2,500+' },
    { name: 'Tanzania', flag: '🇹🇿', students: '2,000+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            About Edunique Minds
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We are a premier academic assistance platform dedicated to empowering students worldwide 
            with exceptional educational support, innovative learning solutions, and personalized guidance 
            to achieve academic excellence.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-primary-dark to-primary-light rounded-3xl p-8 text-white text-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl inline-flex mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">
              To provide world-class academic assistance that empowers students to achieve their educational 
              goals while maintaining the highest standards of quality, integrity, and innovation.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-accent-teal to-accent-light rounded-3xl p-8 text-white text-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl inline-flex mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/90 leading-relaxed">
              To become the global leader in academic support services, fostering a community where 
              every student has access to premium educational resources and expert guidance.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-600 rounded-3xl p-8 text-white text-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl inline-flex mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4">What We Do</h3>
            <p className="text-white/90 leading-relaxed">
              We provide comprehensive academic services including assignments, theses, research papers, 
              online courses, and personalized tutoring across multiple disciplines and academic levels.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-dark mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-neutral-600">
              The principles that guide everything we do and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-heading text-lg font-bold text-primary-dark mb-3">
                  {value.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-dark mb-4">
              Our Track Record
            </h3>
            <p className="text-lg text-neutral-600">
              Numbers that speak to our commitment and success in academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-accent-teal to-accent-light p-4 rounded-xl inline-flex mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="font-heading text-3xl font-bold text-primary-dark mb-2">
                  {stat.number}
                </div>
                <p className="text-neutral-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Countries We Serve */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-dark mb-4">
            Countries We Serve
          </h3>
          <p className="text-lg text-neutral-600 mb-8">
            Trusted by students across the globe for academic excellence and support.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {country.flag}
              </div>
              <h4 className="font-heading font-bold text-primary-dark mb-1">
                {country.name}
              </h4>
              <p className="text-accent-teal text-sm font-medium">
                {country.students}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => window.location.href = '/payment'}
            className="bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow"
          >
            Join Our Global Community →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;