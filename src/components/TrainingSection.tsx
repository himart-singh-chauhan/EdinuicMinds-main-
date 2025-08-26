import React from "react";
import { CardCarousel } from "./CardCarousel";

const TrainingSection: React.FC = () => {
  const images = [
    { src: "/assets/ad.svg", alt: "Android Development" },
    { src: "/assets/web.svg", alt: "Web Development" },
    { src: "/assets/au.svg", alt: "Automation" },
    { src: "/assets/gn.svg", alt: "Graphic Design" },
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
