import React from 'react';
import au from '../assets/au.svg';
import bq from '../assets/bq.svg';
import br from '../assets/br.svg';
import cz from '../assets/cz.svg';
import gbEng from '../assets/gb-eng.svg';
import gb from '../assets/gb.svg';
import gn from '../assets/gn.svg';
import gp from '../assets/gp.svg';
// import hm from '../assets/hm.svg';
import lr from '../assets/lr.svg';
import nl from '../assets/nl.svg';
import no from '../assets/no.svg';
import ru from '../assets/ru.svg';
// import sh from '../assets/sh.svg';
import yt from '../assets/yt.svg';

const flagImages = [
  { src: au, name: 'Australia' },
  { src: bq, name: 'Bonaire' },
  { src: br, name: 'Brazil' },
  { src: cz, name: 'Czech ' },
  { src: gbEng, name: 'England' },
  { src: gb, name: 'UK' },
  { src: gn, name: 'Guinea' },
  { src: gp, name: 'Guadeloupe' },
  // { src: hm, name: 'Heard Island' },
  { src: lr, name: 'Liberia' },
  { src: nl, name: 'Netherlands' },
  { src: no, name: 'Norway' },
  { src: ru, name: 'Russia' },
  // { src: sh, name: 'Saint Helena' },
  { src: yt, name: 'Mayotte' },
];

// Duplicate for infinite scroll effect
const duplicatedFlags = [...flagImages, ...flagImages];

const FlagsScroll: React.FC = () => {
  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-primary-dark mb-2">
          Serving Students Globally
        </h3>
        <p className="text-neutral-600">
          We've helped thousands of students across these countries achieve academic excellence
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-slide-left">
          {duplicatedFlags.map((flag, index) => (
            <div
              key={flag.name + '-' + index}
              className="flex-shrink-0 mx-8 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={flag.src}
                  alt={flag.name + ' flag'}
                  className="w-16 h-16 rounded-full object-cover shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-gray-200"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <p className="text-center mt-3 text-sm font-medium text-neutral-600 group-hover:text-accent-teal transition-colors">
                {flag.name}
              </p>
            </div>
          ))}
        </div>
        {/* Fade gradients for smooth infinite scroll */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default FlagsScroll;