import React, { useState } from 'react';
import { Code, TrendingUp, Database, Cpu, BarChart, Briefcase, GraduationCap, BookOpen, Play, Star, Clock, Users } from 'lucide-react';

const CoursesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: BookOpen },
    { name: 'B-Tech CSE', icon: Code },
    { name: 'MBA', icon: Briefcase },
    { name: 'BCA/MCA', icon: Cpu },
    { name: 'Marketing', icon: TrendingUp },
    { name: 'Data Science', icon: Database },
    { name: 'MSc/BSc', icon: GraduationCap },
    { name: 'Diploma', icon: BarChart },
  ];

  const courses = [
    {
      id: 1,
      title: 'Advanced React Development',
      category: 'B-Tech CSE',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80&fm=webp',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.9,
      students: 2847,
      duration: '12 weeks',
      price: '$299',
      originalPrice: '$399',
      level: 'Advanced',
      description: 'Master modern React development with hooks, context, and advanced patterns.',
      features: ['Live Projects', 'Industry Mentorship', 'Certificate'],
    },
    {
      id: 2,
      title: 'Strategic Business Management',
      category: 'MBA',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80&fm=webp',
      instructor: 'Prof. Michael Chen',
      rating: 4.8,
      students: 1923,
      duration: '16 weeks',
      price: '$449',
      originalPrice: '$599',
      level: 'Intermediate',
      description: 'Comprehensive business strategy and management principles for modern leaders.',
      features: ['Case Studies', 'Real Business Projects', 'MBA Credit'],
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      category: 'Data Science',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80&fm=webp',
      instructor: 'Dr. Aisha Patel',
      rating: 4.9,
      students: 3156,
      duration: '14 weeks',
      price: '$349',
      originalPrice: '$499',
      level: 'Beginner',
      description: 'Learn ML algorithms, data preprocessing, and model deployment from scratch.',
      features: ['Hands-on Labs', 'Industry Projects', 'Job Assistance'],
    },
    {
      id: 4,
      title: 'Digital Marketing Mastery',
      category: 'Marketing',
  image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80&fm=webp',
      instructor: 'Maria Rodriguez',
      rating: 4.7,
      students: 2134,
      duration: '10 weeks',
      price: '$249',
      originalPrice: '$349',
      level: 'Intermediate',
      description: 'Complete digital marketing course covering SEO, SEM, social media, and analytics.',
      features: ['Live Campaigns', 'Google Certification', 'Portfolio Building'],
    },
    {
      id: 5,
      title: 'Database Design & Management',
      category: 'BCA/MCA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80&fm=webp',
      instructor: 'Dr. James Wilson',
      rating: 4.8,
      students: 1876,
      duration: '8 weeks',
      price: '$199',
      originalPrice: '$299',
      level: 'Intermediate',
      description: 'Master database design, SQL, NoSQL, and database administration.',
      features: ['Practical Labs', 'Real Databases', 'Industry Tools'],
    },
    {
      id: 6,
      title: 'Research Methodology',
      category: 'MSc/BSc',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80&fm=webp',
      instructor: 'Prof. Sophie Mueller',
      rating: 4.6,
      students: 1456,
      duration: '6 weeks',
      price: '$149',
      originalPrice: '$199',
      level: 'Beginner',
      description: 'Essential research methods, data collection, and analysis techniques.',
      features: ['Research Tools', 'Publication Guide', 'Thesis Support'],
    },
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Master Skills That Matter
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Comprehensive courses designed by industry experts to accelerate your academic and professional growth.
          </p>
          <button 
            onClick={() => window.location.href = '/payment'}
            className="bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow"
          >
            Start Learning Today →
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-primary-dark to-accent-teal text-white shadow-lg'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-accent-teal text-white px-3 py-1 rounded-full text-sm font-bold">
                  {course.level}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Play className="h-5 w-5 text-primary-dark" />
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium">{course.rating}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-accent-teal text-sm font-medium">{course.category}</span>
                  <div className="flex items-center space-x-1 text-neutral-500 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-primary-dark mb-2 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-neutral-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.map((feature, idx) => (
                    <span key={idx} className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-heading text-xl font-bold text-primary-dark">
                      {course.price}
                    </span>
                    <span className="text-neutral-400 line-through text-sm">
                      {course.originalPrice}
                    </span>
                  </div>
                  <button 
                    onClick={() => window.location.href = '/payment'}
                    className="bg-gradient-to-r from-primary-dark to-accent-teal text-white font-medium px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Limited Time Offer */}
        <div className="mt-16 bg-gradient-to-r from-primary-dark to-accent-teal rounded-3xl p-8 text-center text-white">
          <h3 className="font-heading text-2xl font-bold mb-4">
            🎉 Limited Time Offer - Save 25% on All Courses!
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Enroll in any course today and get instant access to premium content and expert mentorship.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">23</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <button 
            onClick={() => window.location.href = '/payment'}
            className="bg-white text-primary-dark font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Claim Your Discount Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;