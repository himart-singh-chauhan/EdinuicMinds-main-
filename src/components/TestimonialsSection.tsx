import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn } from './ui/testimonials-columns-1';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "EdUniqueMinds transformed my academic journey completely. Their expert guidance helped me achieve outstanding grades in my MBA program. The quality of work and timely delivery exceeded all my expectations.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b495?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "Sarah Johnson",
    role: "MBA Student, Harvard",
  },
  {
    text: "The research paper assistance I received was phenomenal. The team understood my requirements perfectly and delivered original, well-researched content that helped me secure top marks in my dissertation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "Michael Chen",
    role: "PhD Candidate, MIT",
  },
  {
    text: "As an international student, I was struggling with assignments. EdUniqueMinds not only helped me complete my coursework but also taught me better academic writing techniques.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "Priya Sharma",
    role: "Computer Science, Stanford",
  },
  {
    text: "Their 24/7 support and commitment to excellence is unmatched. Every assignment was delivered on time with impeccable quality. Highly recommend for serious students.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "David Wilson",
    role: "Engineering Student, Caltech",
  },
  {
    text: "The thesis writing support was incredible. They helped me structure my research, improve my arguments, and present my findings clearly. Got accepted to my dream PhD program!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "Emily Rodriguez",
    role: "Psychology Graduate, UCLA",
  },
  {
    text: "Professional, reliable, and incredibly knowledgeable. EdUniqueMinds helped me navigate complex business case studies and improved my analytical thinking significantly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "James Thompson",
    role: "Business Analytics, Wharton",
  },
  {
    text: "The quality of research and attention to detail in every assignment was outstanding. They truly understand what academic excellence means and deliver accordingly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "Lisa Chang",
    role: "Medical Student, Johns Hopkins",
  },
  {
    text: "From assignment help to exam preparation, EdUniqueMinds supported me throughout my academic journey. Their expertise across multiple subjects is truly impressive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "Robert Garcia",
    role: "Law Student, Yale",
  },
  {
    text: "The personalized approach and genuine care for student success sets them apart. They don't just complete assignments; they help you learn and grow academically.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&fm=webp&q=80",
    name: "Amanda Foster",
    role: "Literature PhD, Oxford",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-neutral-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-dark/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-accent-teal to-accent-light text-white py-2 px-6 rounded-full shadow-lg">
              <Quote className="h-4 w-4" />
              <span className="font-medium">Student Testimonials</span>
            </div>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            What Our Students Say About Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Discover how EdUniqueMinds has transformed the academic journey of thousands of students worldwide. 
            Read authentic reviews from our satisfied students across various universities and programs.
          </p>
          
          {/* Star ratings */}
          <div className="flex items-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-neutral-600 font-medium">4.9/5 from 2,500+ reviews</span>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={25} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={18} 
          />
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-6">
            Join thousands of successful students who trust EdUniqueMinds
          </p>
          <button 
            onClick={() => window.location.href = '/payment'}
            className="bg-gradient-to-r from-primary-dark to-accent-teal text-white font-heading font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-glow"
          >
            Start Your Success Story →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
