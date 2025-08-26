import React from "react";
import { CardCarousel } from "./CardCarousel";

const TrainingSection: React.FC = () => {
  const images = [
    { 
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80&fm=webp", 
      alt: "Android Development" 
    },
    { 
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80&fm=webp", 
      alt: "Web Development" 
    },
    { 
      src: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=500&q=80&fm=webp", 
      alt: "Automation" 
    },
    { 
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=80&fm=webp", 
      alt: "Graphic Design" 
    },
    { 
      src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=500&q=80&fm=webp", 
      alt: "Data Science" 
    },
    { 
      src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=500&q=80&fm=webp", 
      alt: "Programming" 
    },
  ];
  return (
    <section className="py-16 bg-gradient-to-br from-[#2CA6A4]/10 via-white to-[#2CA6A4]/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary-dark mb-4 drop-shadow">Skill Carousel</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">Explore our top training programs in App, Web, Automation, and Design. Swipe to discover more!</p>
        </div>
        <CardCarousel
          images={images}
          autoplayDelay={2000}
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </section>
  );
};

export default TrainingSection;
