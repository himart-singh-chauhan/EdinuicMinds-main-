import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useSmoothScroll();

  return (
  <header className="fixed top-0 w-full bg-white/30 backdrop-blur-2xl border-b border-white/40 shadow-2xl z-50" style={{ WebkitBackdropFilter: 'blur(32px)', backdropFilter: 'blur(32px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group" onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}>
            <div className="bg-gradient-to-br from-primary-dark to-accent-teal p-2 rounded-xl group-hover:shadow-lg transition-all duration-300">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-primary-dark group-hover:text-accent-teal transition-colors duration-300">
                Edunique Minds
              </h1>
              <p className="text-xs text-neutral-500 -mt-1">Academic Excellence</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#about');
            }}>
              About
            </a>
            <a href="#courses" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#courses');
            }}>
              Courses
            </a>
            <a href="#blog" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#blog');
            }}>
              Blog
            </a>
            <a href="#contact" className="text-neutral-700 hover:text-accent-teal transition-colors duration-300 font-medium" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
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
                scrollToSection('#about');
                setIsOpen(false);
              }}>
                About
              </a>
              <a href="#courses" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#courses');
                setIsOpen(false);
              }}>
                Courses
              </a>
              <a href="#blog" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#blog');
                setIsOpen(false);
              }}>
                Blog
              </a>
              <a href="#contact" className="block px-3 py-2 text-neutral-700 hover:text-accent-teal transition-colors" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
                setIsOpen(false);
              }}>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;