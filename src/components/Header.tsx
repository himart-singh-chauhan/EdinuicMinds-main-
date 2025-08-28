import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useSmoothScroll();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (target: string) => {
    if (location.pathname === '/') {
      // If on homepage, use smooth scroll
      scrollToSection(target);
    } else {
      // If on other pages, navigate to homepage first then scroll
      navigate('/');
      setTimeout(() => scrollToSection(target), 100);
    }
  };

  return (
  <header className="fixed top-0 w-full bg-white/30 backdrop-blur-2xl border-b border-white/40 shadow-2xl z-50" style={{ WebkitBackdropFilter: 'blur(32px)', backdropFilter: 'blur(32px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group" onClick={(e) => {
            e.preventDefault();
            handleNavigation('#home');
          }}>
            {/* <div className="bg-gradient-to-br from-primary-dark to-accent-teal p-2 rounded-xl group-hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-6 w-6 text-white" />
            </div> */}
            <img src='https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwmasSWIcW8p1VwSr6YDJTLjBZXz3x49d205ya' alt='' className='h-20 w-24'></img>
            <div>
              <h1 className="font-heading font-bold text-xl text-primary-dark group-hover:text-accent-teal transition-colors duration-300">
                Edunique Minds
              </h1>
              <p className="text-xs text-neutral-500 -mt-1">Academic Excellence</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium" onClick={(e) => {
              e.preventDefault();
              handleNavigation('#about');
            }}>
              About
            </a>
            <Link to="/courses" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium">
              Courses
            </Link>
            <Link to="/services" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link to="/blog" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium">
              Blog
            </Link>
            <a href="#contact" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium" onClick={(e) => {
              e.preventDefault();
              handleNavigation('#contact');
            }}>
              Contact
            </a>
            <Link to="/payment" className="bg-gradient-to-r from-primary-dark to-accent-teal text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Payment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-accent-teal transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
              <a href="#about" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={(e) => {
                e.preventDefault();
                handleNavigation('#about');
                setIsOpen(false);
              }}>
                About
              </a>
              <Link to="/courses" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={() => setIsOpen(false)}>
                Courses
              </Link>
              <Link to="/services" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <a href="#contact" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={(e) => {
                e.preventDefault();
                handleNavigation('#contact');
                setIsOpen(false);
              }}>
                Contact
              </a>
              <Link to="/payment" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={() => setIsOpen(false)}>
                Payment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;