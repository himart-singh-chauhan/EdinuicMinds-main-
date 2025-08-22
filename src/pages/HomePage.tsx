import React, { Suspense, lazy } from 'react';
import PageTransition from '../components/PageTransition';
import { HeroDemo } from '../components/ui/demo';

// Lazy load components for better performance
const FlagsScroll = lazy(() => import('../components/FlagsScroll'));
const ImpactCounters = lazy(() => import('../components/ImpactCounters'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const StudentShowcase = lazy(() => import('../components/StudentShowcase'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const CoursesSection = lazy(() => import('../components/CoursesSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const BlogSection = lazy(() => import('../components/BlogSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <HeroDemo />
      <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded"></div>}>
        <FlagsScroll />
      </Suspense>
      <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse rounded"></div>}>
        <ImpactCounters />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded"></div>}>
        <StudentShowcase />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded"></div>}>
        <CoursesSection />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <BlogSection />
      </Suspense>
      <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse rounded"></div>}>
        <ContactSection />
      </Suspense>
    </PageTransition>
  );
};

export default HomePage;
