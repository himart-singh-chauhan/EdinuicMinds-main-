import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import MainLayout from './components/Layouts/MainLayout';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse"></div>}>
                <HomePage />
              </Suspense>
            } 
          />
          <Route 
            path="/about" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse"></div>}>
                <AboutPage />
              </Suspense>
            } 
          />
          <Route 
            path="/courses" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse"></div>}>
                <CoursesPage />
              </Suspense>
            } 
          />
          <Route 
            path="/blog" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse"></div>}>
                <BlogPage />
              </Suspense>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse"></div>}>
                <ContactPage />
              </Suspense>
            } 
          />
          <Route 
            path="/payment" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-gray-100 animate-pulse"></div>}>
                <PageTransition><PaymentPage /></PageTransition>
              </Suspense>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;