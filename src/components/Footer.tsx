import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-accent-teal to-accent-light p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Edunique Minds</h3>
                <p className="text-sm text-white/80">Academic Excellence</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Premium academic assistance and e-learning platform serving students worldwide with excellence, integrity, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/80 hover:text-accent-teal transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-white/80 hover:text-accent-teal transition-colors">Courses</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent-teal transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-accent-teal transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent-teal transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-accent-teal transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/80 hover:text-accent-teal transition-colors">Assignment Help</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent-teal transition-colors">Thesis Writing</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent-teal transition-colors">Research Papers</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent-teal transition-colors">Case Studies</Link></li>
              <li><Link to="/courses" className="text-white/80 hover:text-accent-teal transition-colors">Online Courses</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-accent-teal transition-colors">Tutoring</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-teal" />
                <span className="text-white/80">info@eduniqueminds.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-teal" />
                <span className="text-white/80">+91 92171 89006</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-teal mt-1" />
                <span className="text-white/80">
                  
                  Chandigarh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80">
              © 2018 Edunique Minds Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-white/80 hover:text-accent-teal transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white/80 hover:text-accent-teal transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-white/80 hover:text-accent-teal transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;