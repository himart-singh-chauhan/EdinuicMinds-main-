import React from 'react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import FlagsScroll from '../components/FlagsScroll';
import ImpactCounters from '../components/ImpactCounters';
import HowItWorks from '../components/HowItWorks';
import StudentShowcase from '../components/StudentShowcase';
import ServicesSection from '../components/ServicesSection';
import CoursesSection from '../components/CoursesSection';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <HeroSection />
      <FlagsScroll />
      <ImpactCounters />
      <HowItWorks />
      <StudentShowcase />
      <ServicesSection />
      <CoursesSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </PageTransition>
  );
};

export default HomePage;
