// WhatsApp Floating Button
const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/919217189006" // WhatsApp contact number
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-3 flex items-center justify-center transition-all duration-300"
    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.624.438 3.204 1.267 4.584L2 22l5.584-1.267A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.488 0-2.944-.402-4.2-1.162l-.3-.18-3.316.753.753-3.316-.18-.3A7.963 7.963 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.32-5.255c-.237-.119-1.4-.691-1.616-.77-.217-.079-.375-.119-.533.119-.158.237-.611.77-.749.928-.138.158-.276.178-.513.059-.237-.119-1-.369-1.9-1.175-.702-.626-1.175-1.4-1.313-1.637-.138-.237-.015-.365.104-.484.107-.106.237-.276.356-.414.119-.138.158-.237.237-.395.079-.158.04-.296-.02-.414-.059-.119-.533-1.287-.729-1.762-.192-.462-.388-.399-.533-.406-.138-.007-.296-.009-.454-.009-.158 0-.414.059-.63.296-.217.237-.827.808-.827 1.969 0 1.161.847 2.285.965 2.444.119.158 1.666 2.547 4.037 3.463.565.194 1.005.31 1.35.397.567.144 1.084.124 1.492.075.455-.055 1.4-.572 1.6-1.126.198-.553.198-1.027.139-1.126-.059-.099-.216-.158-.453-.277z"/>
    </svg>
  </a>
);
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
const TrainingSection = lazy(() => import('../components/TrainingSection'));
const DevelopmentSection = lazy(() => import('../components/DevelopmentSection'));

const HomePage: React.FC = () => {
  return (
    <>
      <PageTransition>
      <HeroDemo />
      <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded"></div>}>
        <FlagsScroll />
      </Suspense>
      <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse rounded"></div>}>
        <ImpactCounters />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <div id="how-it-works">
          <HowItWorks />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded"></div>}>
        <StudentShowcase />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <div id="services">
          <ServicesSection />
        </div>
      </Suspense>
        <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
          <TrainingSection />
        </Suspense>
        <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
          <DevelopmentSection />
        </Suspense>
      <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded"></div>}>
        <div id="courses">
          <CoursesSection />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-60 bg-gray-100 animate-pulse rounded"></div>}>
        <div id="blog">
          <BlogSection />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse rounded"></div>}>
        <div id="contact">
          <ContactSection />
        </div>
      </Suspense>
      </PageTransition>
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
